import React, { useEffect, useRef, useState } from 'react';
import './Sidebar.css';
import Button_Toggle from '../../Buttons/Button_Toggle/Button_Toggle';

type ButtonProps = {
  html?: string;
  size?: string;
  position?: string;
  onClick?: () => void;
};

type SidebarProps = {
  content: React.ReactNode;
  Style?: React.CSSProperties;
  Style_opened?: React.CSSProperties;
  Style_closed?: React.CSSProperties;
  Style_Outer?: React.CSSProperties;
  Opened?: boolean;
  CloseButton?: false | ButtonProps | boolean | React.ReactNode;
  OpenButton?: false | ButtonProps | boolean | React.ReactNode;
  CloseByClickOutside?: boolean;
  CloseByHoverOutside?: boolean;
  ToggleBetween?: string[];
};

const Sidebar: React.FC<SidebarProps> = ({
  content,
  Style = {},
  Style_opened = {},
  Style_closed = {},
  Style_Outer = {},
  Opened = true,
  CloseButton = false,
  OpenButton = false,
  CloseByClickOutside = false,
  CloseByHoverOutside = false,
  ToggleBetween = ['closed', 'opened'],
}) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isOpened, setIsOpened] = useState(Opened);

  useEffect(() => setIsOpened(Opened), [Opened]);

  useEffect(() => {
    if (!CloseByClickOutside) return;
    const handleOutside = (event: Event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) setIsOpened(false);
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [CloseByClickOutside]);

  const handleMouseLeave = () => {
    if (CloseByHoverOutside) setIsOpened(false);
  };

  const combinedStyle: React.CSSProperties = {
    transition: 'transform 0.3s ease',
    ...Style,
    ...(isOpened ? Style_opened : Style_closed),
  };

  return (
    <div className="Sidebar_Outer" style={{ ...Style_Outer }}>
      <div className="Sidebar_Field">
        <div
          ref={sidebarRef}
          className={`Sidebar_Field_Sidebar ${isOpened ? 'opened' : 'closed'}`}
          style={combinedStyle}
          onMouseLeave={handleMouseLeave}
        >
          {content}

          {CloseButton && isOpened &&
            (React.isValidElement(CloseButton) ? (
              CloseButton
            ) : CloseButton === true ? (
              <Button_Toggle
                ElementToToggle={sidebarRef}
                ToggleBetween={ToggleBetween}
                onClick={() => setIsOpened(false)}
              />
            ) : (
              <div
                dangerouslySetInnerHTML={{ __html: (CloseButton as ButtonProps).html! }}
                style={{ position: 'absolute', cursor: 'pointer' }}
                onClick={() => setIsOpened(false)}
              />
            ))
          }
        </div>
      </div>

      {OpenButton !== false && !isOpened && (
        <div className="Sidebar_Field">
          <div className="Sidebar_Field_OpenButton">
            {React.isValidElement(OpenButton) ? (
              OpenButton
            ) : OpenButton === true ? (
              <Button_Toggle
                ElementToToggle={sidebarRef}
                ToggleBetween={ToggleBetween}
                onClick={() => setIsOpened(true)}
              />
            ) : (
              <div
                dangerouslySetInnerHTML={{ __html: (OpenButton as ButtonProps).html! }}
                style={{ position: 'absolute', cursor: 'pointer' }}
                onClick={() => setIsOpened(true)}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;

import React, { useEffect, useRef, useState } from 'react';
import './Sidebar.css';
import Button_Close from '../../Buttons/Button_Close/Button_Close';
import Button_Open from '../../Buttons/Button_Open/Button_Open';

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
  Opened?: boolean;
  CloseButton?: false | ButtonProps | React.ReactNode;
  OpenButton?: false | ButtonProps | React.ReactNode;
  CloseByClickOutside?: boolean;
  CloseByHoverOutside?: boolean;
};

const Sidebar: React.FC<SidebarProps> = ({
  content,
  Style = {},
  Style_opened = {},
  Style_closed = {},
  Opened = true,
  CloseButton = false,
  OpenButton = false,
  CloseByClickOutside = false,
  CloseByHoverOutside = false,
}) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isOpened, setIsOpened] = useState(Opened);

  useEffect(() => {
    setIsOpened(Opened);
  }, [Opened]);

  useEffect(() => {
    if (!CloseByClickOutside) return;
    const handleOutside = (event: Event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsOpened(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [CloseByClickOutside]);

  const handleMouseLeave = () => {
    if (CloseByHoverOutside) setIsOpened(false);
  };

  const renderCloseButton = () => {
    if (!CloseButton || !isOpened) return null;
    if (React.isValidElement(CloseButton)) return CloseButton;
    const props = CloseButton as ButtonProps;
    return props.html ? (
      <div
        dangerouslySetInnerHTML={{ __html: props.html }}
        style={{
          position: 'absolute',
          cursor: 'pointer',
          ...parseStyle(props.position),
          ...parseSize(props.size),
        }}
        onClick={() => setIsOpened(false)}
      />
    ) : (
      <Button_Close Container={sidebarRef} Size={parseSize(props.size)} onClick={() => setIsOpened(false)} />
    );
  };

  const renderOpenButton = () => {
    if (!OpenButton || isOpened) return null;
    if (React.isValidElement(OpenButton)) return OpenButton;
    const props = OpenButton as ButtonProps;
    return props.html ? (
      <div
        dangerouslySetInnerHTML={{ __html: props.html }}
        style={{
          position: 'absolute',
          cursor: 'pointer',
          ...parseStyle(props.position),
          ...parseSize(props.size),
        }}
        onClick={() => setIsOpened(true)}
      />
    ) : (
      <Button_Open Container={sidebarRef} Size={parseSize(props.size)} onClick={() => setIsOpened(true)} />
    );
  };

  const parseStyle = (str?: string): React.CSSProperties => {
    if (!str) return {};
    const style: React.CSSProperties = {};
    str.split(',').forEach(pair => {
      const [key, value] = pair.split(':').map(s => s.trim());
      if (key && value) style[key as keyof React.CSSProperties] = value;
    });
    return style;
  };

  const parseSize = (str?: string): { width?: string; height?: string } => {
    if (!str) return {};
    const [width, height] = str.split(',').map(s => s.trim());
    return { width, height };
  };

  return (
    <div className="Sidebar_Outer" style={{ position: 'relative' }}>
      <div className="Sidebar_Field">
        <div
          ref={sidebarRef}
          className="Sidebar_Field_Sidebar"
          style={{
            transition: 'transform 0.3s ease',
            ...Style,
            ...(isOpened ? Style_opened : Style_closed),
          }}
          onMouseLeave={handleMouseLeave}
        >
          {renderCloseButton()}
          {content}
        </div>
      </div>

      {OpenButton !== false && (
        <div className="Sidebar_Field">
          <div className="Sidebar_Field_OpenButton">
            {renderOpenButton()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;

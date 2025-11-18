import React, { useEffect, useRef } from 'react';
import './Sidebar.css';

type CloseButtonProps = {
  html?: string;
  size?: string;
  position?: string;
};

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  content: React.ReactNode;
  position: string;
  size: string;
  closeByClick?: boolean;
  CloseByOutsideAction?: boolean;
  CloseButton?: CloseButtonProps;
};

const defaultCloseButtonHTML = `<div style="display:flex; align-items:center; justify-content:center; width:100%; height:100%; background:#333; border-radius:50%; font-size:14px; color:white;">×</div>`;

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  content,
  position,
  size,
  closeByClick = true,
  CloseByOutsideAction = false,
  CloseButton
}) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideAction = (event: Event) => {
      if (
        CloseByOutsideAction &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (closeByClick || CloseByOutsideAction) {
      document.addEventListener('mousedown', handleOutsideAction);
      document.addEventListener('scroll', handleOutsideAction, true);
    }

    return () => {
      if (closeByClick || CloseByOutsideAction) {
        document.removeEventListener('mousedown', handleOutsideAction);
        document.removeEventListener('scroll', handleOutsideAction, true);
      }
    };
  }, [isOpen, onClose, closeByClick, CloseByOutsideAction]);

  if (!isOpen) return null;

  const positionStyles: React.CSSProperties = {};
  position.split(',').forEach(pair => {
    const [key, value] = pair.split(':').map(s => s.trim());
    if (key && value) positionStyles[key as keyof React.CSSProperties] = value;
  });

  const sizeParts = size.split(',').map(s => s.trim());
  if (sizeParts.length === 2) {
    positionStyles.width = sizeParts[0];
    positionStyles.height = sizeParts[1];
  }

  const finalBtn = {
    html: CloseButton?.html || defaultCloseButtonHTML,
    size: CloseButton?.size || '20px, 20px',
    position: CloseButton?.position || 'top: 10px, right: 10px'
  };

  let closeBtnStyles: React.CSSProperties = {};
  finalBtn.position.split(',').forEach(pair => {
    const [key, value] = pair.split(':').map(s => s.trim());
    if (key && value) closeBtnStyles[key as keyof React.CSSProperties] = value;
  });

  const sizePartsBtn = finalBtn.size.split(',').map(s => s.trim());
  if (sizePartsBtn.length === 2) {
    closeBtnStyles.width = sizePartsBtn[0];
    closeBtnStyles.height = sizePartsBtn[1];
  }

  return (
    <div className="Sidebar_Outer">
      <div ref={sidebarRef} className="Sidebar_Field" style={positionStyles}>
        <div
          onClick={onClose}
          style={{ position: 'absolute', cursor: 'pointer', ...closeBtnStyles }}
          dangerouslySetInnerHTML={{ __html: finalBtn.html }}
        />
        {content}
      </div>
    </div>
  );
};

export default Sidebar;

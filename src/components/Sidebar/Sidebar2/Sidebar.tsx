import React, { useEffect, useRef, useState } from 'react';
import './Sidebar.css';

type CloseButtonProps = {
  html?: string;
  size?: string;
  position?: string;
};

type ExpandButtonProps = {
  html?: string;
  size?: string;
  position?: string;
  onExpand?: () => void;
};

type SidebarProps = {
  content: React.ReactNode;
  position?: string;
  size?: string;
  CloseButton?: CloseButtonProps;
  ExpandButton?: ExpandButtonProps;
  closeByClick?: boolean;
  CloseByOutsideAction?: boolean;
  expanded?: boolean;
};

const defaultCloseButtonHTML = `<div style="display:flex; align-items:center; justify-content:center; width:100%; height:100%; background:#333; border-radius:50%; font-size:14px; color:white;">×</div>`;
const defaultExpandButtonHTML = `<div style="display:flex; align-items:center; justify-content:center; width:100%; height:100%; background:#666; border-radius:50%; font-size:14px; color:white;">↔</div>`;

const Sidebar: React.FC<SidebarProps> = ({
  content,
  position = 'top:0, left:0',
  size = '300px, 100%',
  CloseButton,
  ExpandButton,
  closeByClick = true,
  CloseByOutsideAction = false,
  expanded = true
}) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(expanded);

  useEffect(() => {
    if (!CloseByOutsideAction && !closeByClick) return;
    const handleOutsideAction = (event: Event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideAction);
    document.addEventListener('scroll', handleOutsideAction, true);
    return () => {
      document.removeEventListener('mousedown', handleOutsideAction);
      document.removeEventListener('scroll', handleOutsideAction, true);
    };
  }, [closeByClick, CloseByOutsideAction]);

  const parsePosition = (posStr: string): React.CSSProperties => {
    const styles: React.CSSProperties = { position: 'absolute' };
    posStr.split(',').forEach(pair => {
      const [key, value] = pair.split(':').map(s => s.trim());
      if (key && value) styles[key as keyof React.CSSProperties] = value;
    });
    return styles;
  };

  const parseSize = (sizeStr: string): React.CSSProperties => {
    const [width, height] = sizeStr.split(',').map(s => s.trim());
    return { width, height };
  };

  const closeBtn = {
    html: CloseButton?.html || defaultCloseButtonHTML,
    ...parsePosition(CloseButton?.position || 'top:10px, right:10px'),
    ...parseSize(CloseButton?.size || '20px, 20px')
  };

  const expandBtn = {
    html: ExpandButton?.html || defaultExpandButtonHTML,
    ...parsePosition(ExpandButton?.position || 'top:10px, left:10px'),
    ...parseSize(ExpandButton?.size || '20px, 20px')
  };

  return (
    <div className="Sidebar_Outer" style={{ position: 'relative' }}>
      <div
        ref={sidebarRef}
        className="Sidebar_Field"
        style={{
          ...parsePosition(position),
          ...parseSize(size),
          transform: isExpanded ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s ease',
          position: 'absolute'
        }}
      >
        <div
          className="CloseButton"
          onClick={() => setIsExpanded(false)}
          style={{ cursor: 'pointer', ...closeBtn }}
          dangerouslySetInnerHTML={{ __html: closeBtn.html }}
        />
        {content}
      </div>
      <div
        className="ExpandButton"
        onClick={() => setIsExpanded(true)}
        style={{ position: 'absolute', cursor: 'pointer', ...expandBtn }}
        dangerouslySetInnerHTML={{ __html: expandBtn.html }}
      />
    </div>
  );
};

export default Sidebar;

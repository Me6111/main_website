import React from 'react';
import OptionItem from '../OptionItem/OptionItem';

interface OptionsListProps {
  items: { id: string; label: string; children?: any[] }[];
  activeId: string | null;
  onSelect: (id: string) => void;
  renderNested: (item: any) => React.ReactNode;
}

const OptionsList: React.FC<OptionsListProps> = ({ items, activeId, onSelect, renderNested }) => {
  return (
    <div className="OptionsList">
      {items.map(item => {
        const active = activeId === item.id;

        if (item.children && item.children.length > 0) {
          return renderNested(item);
        }

        return (
          <OptionItem
            key={item.id}
            content={item.label}
            active={active}
            onClick={() => onSelect(item.id)}
          />
        );
      })}
    </div>
  );
};

export default OptionsList;

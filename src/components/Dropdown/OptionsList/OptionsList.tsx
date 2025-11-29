import React, { createContext, useContext } from 'react';
import OptionItem from '../OptionItem/OptionItem';

interface OptionsListProps {
  items: any[];
  activeId?: string | null;
  onSelect?: (id: string) => void;
  renderNested?: (item: any) => React.ReactNode;
  [key: string]: any;
}

interface OptionsContextValue {
  activeId?: string | null;
  onSelect?: (id: string) => void;
  restProps?: Record<string, any>;
}

export const OptionsContext = createContext<OptionsContextValue>({
  activeId: null,
  onSelect: undefined,
  restProps: {}
});

export const useOptionsContext = () => useContext(OptionsContext);

const OptionsList: React.FC<OptionsListProps> = ({ items, activeId, onSelect, renderNested, ...rest }) => {
  return (
    <OptionsContext.Provider value={{ activeId, onSelect, restProps: rest }}>
      <div className="OptionsList">
        {items.map(item => {
          const active = activeId === item.id;
          if (item.children && item.children.length > 0 && renderNested) {
            return renderNested(item);
          }
          return (
            <OptionItem
              key={item.id}
              content={item.label}
              active={active}
              expandIcon={false}
              onClick={() => onSelect?.(item.id)}
              {...rest}
            />
          );
        })}
      </div>
    </OptionsContext.Provider>
  );
};

export default OptionsList;

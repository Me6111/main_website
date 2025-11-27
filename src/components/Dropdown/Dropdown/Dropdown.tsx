import React, { useState } from 'react';
import OptionItem from '../OptionItem/OptionItem';
import OptionsList from '../OptionsList/OptionsList';

export interface DropdownItem {
  id: string;
  label: string;
  children?: DropdownItem[];
}

interface DropdownProps {
  triggerItem: DropdownItem;
}

const Dropdown: React.FC<DropdownProps> = ({ triggerItem }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="Dropdown">
      <OptionItem
        content={triggerItem.label}
        expandIcon={!!triggerItem.children?.length}
        active={open}
        onClick={() => setOpen(v => !v)}
      />

      {open && triggerItem.children && (
        <OptionsList
          items={triggerItem.children}
          activeId={null}
          onSelect={() => {}}
          renderNested={item => (
            <Dropdown key={item.id} triggerItem={item} />
          )}
        />
      )}
    </div>
  );
};

export default Dropdown;

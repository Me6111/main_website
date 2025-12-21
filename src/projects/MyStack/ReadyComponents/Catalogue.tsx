import React from 'react';
import Label from '../../../components/Label/Label';

interface CategoryProps {
  title: string;
  items: string[];
  onItemClick: (item: string) => void;
}

const Category: React.FC<CategoryProps> = ({ title, items, onItemClick }) => {
  const baseStyle: React.CSSProperties = {
    margin: '5px 0',
    color: '#ccc',
    transition: 'color 0.3s, background-color 0.3s',
    padding: '5px 10px',
    cursor: 'pointer',
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>) => {
    e.currentTarget.style.color = '#fff';
    e.currentTarget.style.backgroundColor = '#333';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLLIElement>) => {
    e.currentTarget.style.color = '#ccc';
    e.currentTarget.style.backgroundColor = 'transparent';
  };

  return (
    <div style={{ marginBottom: '50px' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '10px', color: '#fff' }}>{title}</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {items.map((item, index) => (
          <Label
            key={index}
            content={item}
            style={{ ...baseStyle }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => onItemClick(item)}
          />
        ))}
      </ul>
    </div>
  );
};

interface CatalogueProps {
  items: string[];
  onItemClick: (item: string) => void;
}

const Catalogue: React.FC<CatalogueProps> = ({ items, onItemClick }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        overflowY: 'auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        color: '#fff',
        borderRadius: '8px',
      }}
    >
      <Category title="Items" items={items} onItemClick={onItemClick} />
    </div>
  );
};

export default Catalogue;

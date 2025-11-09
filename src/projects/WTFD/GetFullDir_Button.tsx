// File: GetFullDir_Button.tsx
import React from 'react';

const GetFullDir_Button: React.FC = () => {
  const handleClick = async () => {
    console.log('Button clicked — fetching directory data...');
    try {
      const res = await fetch('http://localhost:3000/GetFullDir');
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
      const data = await res.json();
      console.log('Server response:', data);
    } catch (err) {
      console.error('Failed to fetch directory data:', err);
    }
  };

  return (
    <div
      style={{
        position: 'absolute',
        zIndex: 1000,
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <button
        onClick={handleClick}
        style={{
          padding: '15px 30px',
          fontSize: '18px',
          cursor: 'pointer',
          borderRadius: '8px',
          backgroundColor: '#00000070',
          color: '#fff',
          border: '1px solid white',
        }}
      >
        Fetch Folder Tree
      </button>
    </div>
  );
};

export default GetFullDir_Button;

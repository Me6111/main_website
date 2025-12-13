import React from 'react'

const Footer = () => {
  return (
    <footer
      style={{
        width: '100%',
        height: '100px',
        padding: '20px',
        textAlign: 'center',
        backgroundColor: 'black',
        color: '#eee',
        position: 'relative',
        bottom: 0,
        zIndex: 1
      }}
    >
      <p style={{ margin: '5px 0', fontSize: '0.9em' }}>
        © {new Date().getFullYear()} John P2. All rights reserved.
      </p>
      <p style={{ margin: '5px 0', fontSize: '0.9em' }}>
        Built with React, Vite, and Tailwind CSS.
      </p>
    </footer>
  )
}

export default Footer

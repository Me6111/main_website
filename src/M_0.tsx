import React, { useState } from 'react'
import HamburgerButton from './components/Icons/HamburgerButton/HamburgerButton'

const M_0 = ({ m_fStyle, m_fStyleOpened, m_fStyleClosed, content, OpenButton = true, Opened = true }) => {
  const [opened, setOpened] = useState(Opened)
  const [hoverB, setHoverB] = useState(false)
  const [hoverF, setHoverF] = useState(false)

  return (
    <div className="sb" style={{ position: 'relative' }}>
      {OpenButton && (
        <div
          className="sb_b"
          style={{
            width: '50px',
            height: '50px',
            backgroundColor: hoverB ? 'red' : 'rgb(0, 113, 0)',
            position: 'relative',
            zIndex: 1000,
            pointerEvents: 'all',
            cursor: 'pointer',
          }}
          onClick={() => setOpened(!opened)}
          onMouseEnter={() => setHoverB(true)}
          onMouseLeave={() => setHoverB(false)}
        >
            <HamburgerButton isOpen={opened} />
        </div>
      )}

      <div
        className="sb_f"
        style={{
          ...m_fStyle,
          ...(opened ? m_fStyleOpened : m_fStyleClosed),
          backgroundColor: m_fStyle.backgroundColor
        }}
        onMouseEnter={() => setHoverF(true)}
        onMouseLeave={() => setHoverF(false)}
      >
        {content}
      </div>
    </div>
  )
}

export default M_0

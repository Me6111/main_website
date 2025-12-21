import React from 'react'

interface SliderProps {
  a_10: React.ReactNode
  a_11: React.ReactNode
  orientation?: 'horizontal' | 'vertical'
  a_10Style?: React.CSSProperties
}

const Slider: React.FC<SliderProps> = ({ a_10, a_11, orientation = 'vertical', a_10Style }) => {
  const isHorizontal = orientation === 'horizontal'

  return (
    <div className='Slider' style={{ height: '100%', overflow: 'hidden', overflowY: 'auto' }}>
      <div className="a_0" style={{ position: 'relative', display: 'flex', flexDirection: 'row' }}>

        <div className="a_10" style={{ position: 'absolute', width: '100%', height: '100%', pointerEvents: 'none', ...a_10Style }}>
          {a_10}
        </div>

        <div
          className="a_11"
          style={{
            display: 'flex',
            flexDirection: isHorizontal ? 'row' : 'column',
            width: '100%',
            height: isHorizontal ? '100vh' : 'auto',
            overflowX: isHorizontal ? 'auto' : 'hidden',
            overflowY: isHorizontal ? 'hidden' : 'auto',
          }}
        >
          {a_11}
        </div>

      </div>
    </div>
  )
}

export default Slider

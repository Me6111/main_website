import React from 'react'
import OptionItem from './components/Dropdown/OptionItem/OptionItem'
import M_0 from './components/Sidebar/M_0'
import Footer from './Footer'


const MainPage = () => {


  return (
          <div
            className="a_0"
            style={{
              width: '100%',
              height: '100%',
              overflow: 'hidden',
              overflowY: 'auto',
              position: 'relative',
            }}
          >

    <main style={{ position: 'relative' }}>
      
      
      
      
      <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
        <div style={{ position: 'sticky', width: '100%', height: '100vh', top: 0}}>
          <div style={{ position: 'absolute', width: '100%', height: '100%', top: 0 }}>
            <M_0
              m_fStyle={{
                backgroundColor: 'rgba(0, 26, 255, 0.46)',
                width: '100%',
                height: '100px',
                position: 'relative',
                top: 0,
                right: 0,
                zIndex: 11,
                transition: 'transform 0.3s ease'
              }}
              m_fStyleOpened={{ transform: 'translateX(0%)' }}
              m_fStyleClosed={{ transform: 'translateX(100%)' }}
              OpenButton={false}
              Opened={true}
              content={
                <div
                  className="menuHorizontal"
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'fixed',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    overflow: 'hidden'
                  }}
                >
                  <OptionItem content={<a href="/mystack">Stack</a>} />
                  <M_0
                    m_fStyle={{
                      backgroundColor: 'rgba(0,0,0,0.463)',
                      color: '#eee',
                      width: '300px',
                      height: '100vh',
                      position: 'fixed',
                      top: 0,
                      right: 0,
                      zIndex: 11,
                      transition: 'transform 0.3s ease'
                    }}
                    m_fStyleOpened={{ transform: 'translateX(0%)' }}
                    m_fStyleClosed={{ transform: 'translateX(101%)' }}
                    OpenButton={true}
                    Opened={false}
                    content={
                      <div>
                        <h1>Hello</h1>
                        <p>This can be any HTML or React component</p>
                      </div>
                    }
                  />
                </div>
              }
            />
          </div>
        </div>
      </div>


{[1, 2, 3, 4].map((i) => (
  <div
    key={i}
    style={{
      width: "100%",
      height: "100vh",
      background: "black",
      border: "1px solid white",
      boxSizing: "border-box"
    }}
  />
))}


      <Footer/>
    </main>


    </div>
  )
}

export default MainPage

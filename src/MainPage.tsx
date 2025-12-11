import React from 'react'
import SectionScreen from './components/SectionScreen/SectionScreen'
import OptionItem from './components/Dropdown/OptionItem/OptionItem'
import M_0 from './M_0'
import profileImage from './assets/images/Img_1.png'
import designImg from './assets/images/designImg.png'
import constructionImg from './assets/images/constructionImg.png'
import expandingImg from './assets/images/expandingImg.png'

const MainPage = () => {
  const sectionData = [
    {
      id: 'profileSection',
      Image: profileImage,
      header1: 'Maksym Pawlowski',
      p: 'Software Developer',
      buttonLabel: 'Learn More',
      href: '/DevBusinessCard'
    },
    {
      id: 'designSection',
      Image: designImg,
      header1: 'Perfect UI',
      p: 'Get beauty and functionality',
      buttonLabel: 'Learn More'
    },
    {
      id: 'constructionSection',
      Image: constructionImg,
      header1: 'Solid Construction',
      p: 'Make it strong like nature itself',
      buttonLabel: 'Learn More'
    },
    {
      id: 'expandingSection',
      Image: expandingImg,
      header1: 'Scalability',
      p: 'Make it ready to grow',
      buttonLabel: 'Learn More'
    }
  ]

  return (
    <main style={{ position: 'relative' }}>


      <div style={{position: 'absolute', width: '100%', height: '100%'}}>
      <div style={{position: 'sticky', width: '100%', height: '100vh', top: '0', zIndex: '10', }}>
      <div style={{position: 'absolute', width: '100%', height: '100px', top: '0'}}>



      <M_0
        m_fStyle={{
          backgroundColor: 'rgba(0,0,0,0.463)',
          border: '1px solid white',
          boxSizing: 'border-box',
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

          <div style={{position: 'sticky'}}>

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
                  border: '1px solid white',
                  boxSizing: 'border-box',
                  width: '200px',
                  height: '100vh',
                  position: 'fixed',
                  top: 0,
                  right: 0,
                  zIndex: 11,
                  transition: 'transform 0.3s ease'
                }}
                m_fStyleOpened={{ transform: 'translateX(0%)' }}
                m_fStyleClosed={{ transform: 'translateX(100%)' }}
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
          </div>
        }
      />





      </div>
      </div>
      </div>





      {sectionData.map(section => (
        <SectionScreen
          key={section.id}
          id={section.id}
          Image={{ item: section.Image, stagger: false }}
          header1={{ text: section.header1, stagger: true }}
          p={{ text: section.p, stagger: true }}
          buttonLabel={{ text: section.buttonLabel, stagger: true, href: section.href }}
        />
      ))}
      <footer
        style={{
          width: '100%',
          height: '100px',
          padding: '20px',
          textAlign: 'center',
          backgroundColor: 'black',
          color: '#eee',
          boxSizing: 'border-box',
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
    </main>
  )
}

export default MainPage

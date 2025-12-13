import React from 'react'
import SectionScreen from './components/SectionScreen/SectionScreen'
import OptionItem from './components/Dropdown/OptionItem/OptionItem'
import M_0 from './components/Sidebar/M_0'
import Footer from './Footer'

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
        <div style={{ position: 'sticky', width: '100%', height: '100vh', top: 0, zIndex: 10 }}>
          <div style={{ position: 'absolute', width: '100%', height: '100px', top: 0 }}>
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

      {sectionData.map(section => (
        <SectionScreen
          key={section.id}
          id={section.id}
          Image={{ item: section.Image, stagger: false }}
          header1={{ text: section.header1, stagger: true }}
          p={{ text: <p>{section.p}</p>, stagger: true }}
          buttonLabel={{ text: section.buttonLabel, stagger: true, href: section.href }}
        />
      ))}

      <Footer/>
    </main>


    </div>
  )
}

export default MainPage

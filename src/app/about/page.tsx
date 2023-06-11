import React from 'react'
import Container from '../components/Navbar/Container'
import Yinyang from '../components/Yinyang'
import Image from 'next/image'
import Stacks from './Stacks'
import PageWrapper from '../components/PageWrapper'

const page = () => {
  return (
    <PageWrapper>
      <div className='my-24 relative'>
          <Container>
            <Image src='https://sdk.bitmoji.com/me/sticker/IpzCRMKWnghYxodIdYxheCATyVeig0bGqzyNqTVZDdcGdEq9ZenXVA/20086416.png?p=dD1zO2w9ZW5fR0I.v1&size=thumbnaill' 
            width={200} height={200} alt='about' className='object-contain'/>
              <div className='mt-16 mb-8'>
                  <h1 className='text-4xl md:text-text-6xl capitalize'>
                      welcome to my portfolio
                  </h1>
              </div>
              <div>
                  <div className='text-lg md:text-xl'>
                      I&apos;m <strong>Eze Paschal</strong>, a passionate and dedicated Frontend Developer.
                      I believe that the power of technology lies in its ability to create meaningful and intuitive user experiences. 
                      With a combination of creativity and technical expertise, 
                      I strive to build visually stunning and user-friendly websites that leave a lasting impression.

                      <br />
                      <br />
                      My journey in the world of web development started several years ago when I discovered my fascination with transforming 
                      ideas into interactive digital experiences. 
                      Since then, I have honed my skills in HTML, CSS, JavaScript, and various frontend frameworks to bring designs to life. 
                      I am constantly exploring new technologies and staying up-to-date with the latest industry trends to
                      deliver cutting-edge solutions.
                      
                      <br />
                      <br />

                      Beyond the technical realm, I am a problem solver and a lifelong learner. 
                      I thrive on challenges and embrace every opportunity to expand my knowledge and skill set. 
                      I am dedicated to continuous growth, always seeking out new ways to improve my craft and stay 
                      ahead in this ever-evolving field.

                      <br />
                      <br />

                      Thank you for visiting my portfolio. 
                      I hope you enjoy exploring my work and seeing the passion and attention to detail that goes into each project. 
                      If you have any questions or would like to discuss potential collaborations, please don&apos;t hesitate to reach out.
                      I look forward to connecting with you!
                  </div>
                  <Stacks />
                  <div className='my-8 ext-lg md:text-xl'>
                    Regards,
                  </div>
                  <div className='mt-4 font-bold ext-lg md:text-xl'>
                      Eze Paschal ( DESCO ).
                  </div>
              </div>
          </Container>
          <Yinyang />
      </div>
    </PageWrapper>

  )
}

export default page
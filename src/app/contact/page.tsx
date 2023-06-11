import React from 'react'
import Container from '../components/Navbar/Container'
import ContactContainer from './ContactContainer'
import PageWrapper from '../components/PageWrapper'

const page = () => {
  return (
    <PageWrapper>

    <div className='py-24'>
        <Container>
            <ContactContainer />
        </Container>
    </div>
    </PageWrapper>

  )
}

export default page
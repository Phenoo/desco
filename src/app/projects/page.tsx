import React from 'react'
import {groq} from 'next-sanity'
import { client } from '../../../sanity/lib/client';
import Container from '../components/Navbar/Container';
import Image from 'next/image';

import Img1 from './painting.webp'
import ProjectContainer from './Container';
import PageWrapper from '../components/PageWrapper';


const Page = async () => {
  const query = groq`*[_type == 'project']{
    ...,
  }`

  const projects = await client.fetch(query);
  return (
    <PageWrapper>

    <div className='py-24 relative project'>
      <Container>
        <Image src={Img1} alt='painting' width='300' height='300' className='mt-8' />
        <h1 className='text-3xl md:text-5xl'>
          Behold most of my projects
        </h1>
        <br />
        <div>Take a look at my projects below and feel free to get in touch!</div>
        <div>
          <ProjectContainer posts={projects} />
        </div>
      </Container>
    </div>
    </PageWrapper>
  )
}

export default Page
import { client } from '../../sanity/lib/client'
import Hero from './components/hero/Hero'
import Projects from './components/Projects'
import {groq} from 'next-sanity'
import Video from './components/Video'
import PageWrapper from './components/PageWrapper'
import Overflow from './components/Overflow'

export default async function Home() {
  const query = groq`*[_type == 'project']{
    ...,
  }`

  const projects = await client.fetch(query);
  const filterposts = projects.filter((post: any, index: number) => index < 4)

  return (
    <PageWrapper>
      <main className="">
        <Hero />
        <Video />
        <Overflow />
        <Projects posts={filterposts} />
      </main>
    </PageWrapper>
  )
}

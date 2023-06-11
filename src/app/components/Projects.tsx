'use client'

import React, { Suspense } from "react";
import Container from './Navbar/Container'
import Link from 'next/link'
import { BsArrowUpRightCircle } from 'react-icons/bs'
import ProjectCard from './ProjectCard'


export interface PostsProps{
  _id: string;
  github: string;
  live: string;
  imageUrl: string;
  title: string;
  desc: string;
  stacks: Array<string>;
}

interface ProjectsProps {
  posts: PostsProps[]
}



const Projects:React.FC<ProjectsProps> = ({posts}) => {


  return (
    <div className='py-16 w-full relative' > 
      <Container>
        <div>
          <Link href='/projects' className='flex flex-row gap-2 items-center text-3xl md:text-5xl underline '>
            Projects <BsArrowUpRightCircle />
          </Link>
        </div>

        <div className='my-8 w-full'>
        <Suspense fallback={<div>loading...</div>}>
          {
            posts?.length >= 1 && posts?.map((item, index: number) => (
              <ProjectCard key={item._id} post={item} index={index} />
            ))
          }
        </Suspense>
        </div>

        <div className="flex justify-center items-center my-8">
          <Link href='/projects' className='flex flex-row gap-2 items-center text-3xl md:text-5xl underline transition-all hover:scale-95 hover:opacity-75 '>
             <span>see all works</span> <BsArrowUpRightCircle />
          </Link>        
        </div>
      </Container>
    </div>
  )
}

export default Projects
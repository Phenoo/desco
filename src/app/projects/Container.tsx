'use client'
import React, { Suspense } from 'react'
import Container from '@/app/components/Navbar/Container'
import Link from 'next/link'
import { BsArrowUpRightCircle } from 'react-icons/bs'
import ProjectCard from '@/app/components/ProjectCard'
import { motion } from 'framer-motion'

interface PostsProps{
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
  

const ProjectContainer = ({posts}: ProjectsProps) => {
    return (
        <div className='py-16 w-full relative'> 
          <Container>
            <div className='my-12 w-full'>
            <Suspense fallback={<div>loading...</div>}>
              {
                posts?.length >= 1 && posts?.map((item, index: number) => (
                  <ProjectCard key={item._id} post={item} index={index} />
                ))
              }
            </Suspense>
            </div>
    
          </Container>
        </div>
      )
    }

export default ProjectContainer

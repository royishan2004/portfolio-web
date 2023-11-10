import React from 'react'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import Contact from '@/components/Contact'
import { Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai'

const About = () => {
  return (
    <>
      <Head>
        <title>About | IshanRoy</title>
      </Head>
      <Navbar/>
      <motion.section 
          className='flex flex-row items-center justify-center w-full h-96 text-white  bg-black bg-opacity-40'
          variants={{
            hidden: {opacity: 0, y:75,},
            visible: {opacity: 1, y:0, },
          }}

          initial="hidden"
          whileInView="visible"
          transition={{duration: 0.3, ease: "easeOut"}}
          viewport={{once:true,amount: 0.8}}
        >
            <div className='flex flex-col items-center justify-center'>
                <p className='font-Raleway text-3xl font-semibold'>About ME</p>
                <p className='font-Onest text-lg font-extralight'>Get to know my Story</p>
            </div>
        </motion.section>
      <main className='flex flex-wrap items-center mx-4 min-h-screen py-2 relative text-white'>
        
        <motion.div 
          variants={{
            hidden: {opacity: 0, y:-75,},
            visible: {opacity: 1, y:0, },
          }}

          initial="hidden"
          whileInView="visible"
          transition={{duration: 0.3, ease: "easeOut"}}
          viewport={{once:true,amount: 0.8}}
          className='flex box3 md:max-w-xl justify-center items-center md:max-h-lg  rounded-lg '
        ><Image minW='sm' maxH='3xl'  position='relative' objectFit='cover' border='1px' borderColor='whiteAlpha.400' borderRadius='md' src='https://images.unsplash.com/photo-1589144669495-b5905b68ea9e?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='IshanRoy' /></motion.div>
        <motion.div 
          className='flex flex-col box3 justify-center items-stretch min-h-max p-2 mx-4 border rounded-lg border-transparent card_bg hover:border-2 hover:border-cyan-700 transition-all' 
          variants={{
            hidden: {opacity: 0, y:75,},
            visible: {opacity: 1, y:0, },
          }}

          initial="hidden"
          whileInView="visible"
          transition={{duration: 0.3, ease: "easeOut"}}
          viewport={{once:true,amount: 0.8}}
        >
          <h1 className=' mx-4 my-4 md:my-10 font-Onest text-4xl text-gray-200'>Hello, I&apos;m <span className=' font-Pixel text_grad'>Ishan Roy</span>, a <span className=' font-Dancing '>Student Developer</span> and a second year student at SRMIST.</h1>
          <h3 className=' my-4 md:my-12 font-Onest text-xl font-medium mx-4 text-gray-500 max-h-96 over'>
          I am a motivated and enthusiastic second-year B. Tech. CSE student with a strong interest in technical solutions and corporate affairs.<br/><br/>
          With an intermediate level of knowledge in various technical domains, such as programming languages, databases, software engineering principles and much more,<br/><br/>
          I am constantly seeking opportunities to expand my technical expertise.
          </h3>
          
          <div className='flex flex-row justify-evenly items-center my-12 md:my-20 mx-6'>
            
          </div>
        </motion.div>
        
      </main>

      <Contact/>
    </>
  )
}

export default About
import React from 'react'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import { Chrono } from 'react-chrono'
import { 
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter,
  Image,
  Box,
  Stack,
  StackDivider,
  Divider,
  Text,
  ButtonGroup,
  Button,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,

} from '@chakra-ui/react' 
import { motion } from 'framer-motion'


const Achievements = () => {
  return (
    <>
      <Head><title>Achievements | IshanRoy</title></Head>
      <Navbar/>
      <motion.section 
        className='flex flex-row items-center justify-center w-full h-48 text-white mt-2 mb-4 bg-black bg-opacity-40'
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
              <p className='font-Raleway text-3xl font-semibold'>Achievements</p>
              <p className='font-Onest text-lg font-extralight'>Some of my Proudest Moments</p>
          </div>
      </motion.section>
      <main className='flex flex-col items-center min-h-screen py-2 relative text-white'>
      <Chrono
        // items={items}
        mode="VERTICAL_ALTERNATING"
        // hideControls
        slideShow
        slideItemDuration={4000}
        theme={{
          cardBgColor: "transparent",
          cardForeColor: "violet",
          titleColor: "black",
          titleColorActive: "red",
          primary: "rgba(15,15,15,0.8)",
          secondary: "rgba(102, 102, 250,0.7)",
        }}
        itemWidth={150}
      >

        <>
          <Card maxW='sm' bgColor='rgba(0,0,0,0.9)' textColor='white'>
            <CardBody colorScheme='blackAlpha'>
              <Image
                src='https://i.postimg.cc/7h0P6c69/Ishan-Roy20230627-2472-q0f0e.jpg'
                alt='Great Learning'
                borderRadius='lg'
                colorScheme='blackAlpha'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Certificate of Completion</Heading>
                <Text>
                  Certificate of Completion for the course "Android App Development"
                </Text>
                
              </Stack>
            </CardBody>
            <Divider />
            
          </Card>
        </>

        <>
          <Card maxW='sm' bgColor='rgba(0,0,0,0.9)' textColor='white'>
            <CardBody colorScheme='blackAlpha'>
              <Image
                src='https://i.postimg.cc/yNMwdNZq/1688556723902-Ishan-Roy-Course-Excellence.jpg'
                alt='cisco thinqbuator'
                borderRadius='lg'
                colorScheme='blackAlpha'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Certificate of Excellence</Heading>
                <Text>
                  Certificate of Excellence for the course "Flutter App Development" as part of cisco thinQbator
                </Text>
                
              </Stack>
            </CardBody>
            <Divider />
            
          </Card>
        </>

        <>
          <Card maxW='sm' bgColor='rgba(0,0,0,0.9)' textColor='white'>
            <CardBody colorScheme='blackAlpha'>
              <Image
                src='https://i.postimg.cc/y6b0SSNS/6229901930.jpg'
                alt='Dart'
                borderRadius='lg'
                colorScheme='blackAlpha'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Certificate of Achievement</Heading>
                <Text>
                  Certificate of Achievement for the course "Dart Programming For Beginners" 
                </Text>
                
              </Stack>
            </CardBody>
            <Divider />
            
          </Card>
        </>

        <>
          <Card maxW='sm' bgColor='rgba(0,0,0,0.9)' textColor='white'>
            <CardBody colorScheme='blackAlpha'>
              <Image
                src='https://i.postimg.cc/sX84Ynrb/Hackerrank-Status-18-10-23.png'
                alt='Hackerrank'
                borderRadius='lg'
                colorScheme='blackAlpha'
              />
            </CardBody>
          
            
          </Card>
        </>

        <>
          <Card maxW='sm' bgColor='rgba(0,0,0,0.9)' textColor='white'>
            <CardBody colorScheme='blackAlpha'>
              <Image
                src='https://i.postimg.cc/J05GQqHR/Whats-App-Image-2023-11-11-at-18-05-27-714a5603.jpg'
                alt='oodp Hack'
                borderRadius='lg'
                colorScheme='blackAlpha'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Certificate of Participation</Heading>
                <Text>
                  Certificate of Participation for the event "Object Oriented Design Hack" 
                </Text>
                
              </Stack>
            </CardBody>
            <Divider />
            
          </Card>
        </>

        <>
          <Card maxW='sm' bgColor='rgba(0,0,0,0.9)' textColor='white'>
            <CardBody colorScheme='blackAlpha'>
              <Image
                src='https://i.postimg.cc/vBzsqSh2/Ishan-Roy-RA2211003010709-page-0001.jpg'
                alt='oodp Hack'
                borderRadius='lg'
                colorScheme='blackAlpha'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Certificate of Participation in Smart India Hackathon Internal</Heading>
                <Text>
                  Certificate of Participation for the event "Smart India Hackathon Internal software round"
                </Text>
                
              </Stack>
            </CardBody>
            <Divider />
            
          </Card>
        </>
      </Chrono>
      </main>
      <Contact/>
    </>
  )
}

export default Achievements
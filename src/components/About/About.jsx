import React from 'react'
import { Text, Heading, Button, Icon, Link } from '@chakra-ui/react'
import { FaGithubSquare, FaFileDownload, FaLinkedinIn } from 'react-icons/fa'
import backgroundImage from '../../images/photo_web_copy.jpg'
import resume from '../../images/resume.pdf'
import './About.css'

export default function About(props) {

    return (

        <div className='About' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className='about-me-text'>
                <Heading color='white' size='lg'>About Me</Heading>
                <br />
                <Text fontWeight='medium' width={{ base: '80vw', md: '400px' }} size='xl' color='white'>
                    Hey there, I'm Anchit. I'm a Junior at the University of Hong Kong,
                    studying Computer Science with a bit of Mathematics here and there.<br /><br />
                    My research interests lie in Human Computer Interaction and Artificial Intelligence,
                    and I enjoy working with large-scale distributed systems and low-level software.<br /><br />
                    Outside of work, you can find me watching the NBA, running, cooking, or playing video games.
                </Text>
                <a href={resume}>
                    <Button size='sm' borderRadius='15px' margin='15px' fontSize='sm'>
                        <FaFileDownload margin={5} /><Text fontSize='xs'>My Résumé</Text>
                    </Button>
                </a>
                <br />
                <div class='icons'>
                    <div class='icon-github'>
                        <Link href='https://www.github.com/anchit1729'>
                            <Icon color='white' focusable='true' w={6} h={6} margin='5px'>
                                <FaGithubSquare size='20px' />
                            </Icon>
                        </Link>
                    </div>
                    <div class='icon-linkedin'>
                        <Link href='https://www.linkedin.com/in/anchit-mishra-602aa8125/'>
                            <Icon color='white' focusable='true' w={6} h={6} margin='5px'>
                                <FaLinkedinIn size='19px' />
                            </Icon>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}
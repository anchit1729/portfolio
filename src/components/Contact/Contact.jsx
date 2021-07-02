import React from 'react'
import { Heading, Center, Text, Link, Icon } from '@chakra-ui/react'
import { FaGithubSquare, FaLinkedinIn } from 'react-icons/fa'
import './Contact.css'

export default function Projects(props) {
    return (
        <Center>
            <div className='Contact'>
                <div className='contact-intro-text'>
                    <Heading marginTop={30} marginLeft={5} textAlign='left' size='lg'>Contact Me</Heading>
                    <br />
                    <Text marginLeft={5} maxWidth={700} textAlign='left' fontWeight='medium' size='xl' color='black'>
                        Feel free to reach out to me to discuss interesting ideas for work, both in research and software engineering:
                        <br />
                        <br />
                        <br />
                        Email: <a href='anchit@connect.hku.hk'>anchit@connect.hku.hk</a>
                        <br />
                        Mobile: +852 5376 0021
                        <br />
                        <br />
                        <div class='icons'>
                            <div class='icon-github'>
                                <Link href='https://www.github.com/anchit1729'>
                                    <Icon color='black' focusable='true' w={6} h={6} margin='5px'>
                                        <FaGithubSquare size='20px' />
                                    </Icon>
                                </Link>
                            </div>
                            <div class='icon-linkedin'>
                                <Link href='https://www.linkedin.com/in/anchit-mishra-602aa8125/'>
                                    <Icon color='black' focusable='true' w={6} h={6} margin='5px'>
                                        <FaLinkedinIn size='19px' />
                                    </Icon>
                                </Link>
                            </div>
                        </div>
                    </Text>
                </div>
            </div>
        </Center>
    )
}
import React from 'react'
import { Heading, Center, Text, Image } from '@chakra-ui/react'
import haptiverseImage from '../../images/photo_haptiverse.jpg'
import bigTwoImage from '../../images/photo_bigtwo.jpg'
import astridCrisisImage from '../../images/photo_astrid.jpg'
import './Projects.css'

export default function Projects(props) {
    return (
        <Center>
            <div className='Projects'>
                <div className='projects-intro-text'>
                    <Heading marginTop={30} marginLeft={5} textAlign='left' size='lg'>Projects</Heading>
                    <br />
                    <Text marginLeft={5} maxWidth={700} textAlign='left' fontWeight='medium' size='xl' color='black'>
                        Here are a few projects that I have worked on to learn new things in software development.
                        Outside of school, I try to make time to learn new concepts on my own, and although I've recently
                        been focusing more on research-work, I still make it a point to learn something new that is purely
                        dev-related from time-to-time.
                    </Text>
                    <br />
                    <br />
                    <br />
                    <Heading marginLeft={55} textAlign='left' size='sm'>
                        <a href='https://haptiverse.herokuapp.com'>
                            1. Haptiverse
                        </a>
                    </Heading>
                    <br />
                    <Text marginLeft={55} textAlign='left' maxWidth={600} fontWeight='medium' size='xl' color='black'>
                        The Haptiverse project is a website that I am working on as part of my <b>Mitacs Globalink
                            Research Internship</b> at the <b>University of Waterloo</b>. It is built on the MERN stack. The eventual
                        aim for this project is to provide an open online platform for academic researchers and
                        developers to share haptic data with each other to accelerate development of new haptic
                        technologies.
                    </Text>
                    <br />
                    <br />
                    <Center>
                        <Image width={500} src={haptiverseImage} alt='The homepage for the Haptiverse website' />
                    </Center>
                    <br />
                    <br />
                    <br />
                    <Heading marginLeft={55} textAlign='left' size='sm'>
                        <a href='https://github.com/anchit1729/Big-Two-Java'>
                            2. Big Two
                        </a>
                    </Heading>
                    <br />
                    <Text marginLeft={55} textAlign='left' maxWidth={600} fontWeight='medium' size='xl' color='black'>
                        This project is a GUI-based online multiplayer game based on the popular Chinese card game 'Big Two',
                        built using Swing and Sockets in Java. It is designed using standard OOP practices such as
                        abstraction, inheritance and polymorphism. It allows four players to start a game, play over the
                        network, and communicate via an in-game chat.
                    </Text>
                    <br />
                    <br />
                    <Center>
                        <Image width={500} src={bigTwoImage} alt='A screenshot of the Big Two game' />
                    </Center>
                    <br />
                    <br />
                    <br />
                    <Heading marginLeft={55} textAlign='left' size='sm'>
                        <a href='https://github.com/anchit1729/Text-based-Adventure'>
                            3. Astrid Crisis
                        </a>
                    </Heading>
                    <br />
                    <Text marginLeft={55} textAlign='left' maxWidth={600} fontWeight='medium' size='xl' color='black'>
                        This project is a tiny text-based retro space-shooter game built as a throwback to Galaga. It is
                        completely written in C++ and utilises the <i>ncurses</i> library for terminal-based graphics rendering.
                        It also provides core gameplay functionality such as power-ups, high-score tracking and
                        saving game progress.
                    </Text>
                    <br />
                    <br />
                    <Center>
                        <Image width={500} src={astridCrisisImage} alt='A screenshot of the Astrid Crisis game' />
                    </Center>
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        </Center>
    )
}
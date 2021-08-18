import React from 'react'
import { Heading, Center, Text, Image } from '@chakra-ui/react'
import haptiverseImage from '../../images/photo_haptiverse.jpg'
import bigTwoImage from '../../images/photo_bigtwo.jpg'
import astridCrisisImage from '../../images/photo_astrid.jpg'
import blockchainImage from '../../images/photo_blockchain.png'
import atariPhoto from '../../images/photo_atari.png'
import onionsPhoto from '../../images/photo_onions.png'
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
                    <Heading marginLeft={5} textAlign='left' size='sm'>
                        <a href='https://haptiverse.herokuapp.com'>
                            1. Haptiverse
                        </a>
                    </Heading>
                    <br />
                    <Text marginLeft={5} textAlign='left' maxWidth={600} fontWeight='medium' size='xl' color='black'>
                        The Haptiverse project is a website that I am working on as part of my <b>Mitacs Globalink
                            Research Internship</b> at the <b>University of Waterloo</b>. It is built on the MERN stack. The eventual
                        aim for this project is to provide an open online platform for academic researchers and
                        developers to share haptic data with each other to accelerate development of new haptic
                        technologies.
                    </Text>
                    <br />
                    <br />
                    <Image marginLeft={35} width={500} src={haptiverseImage} alt='The homepage for the Haptiverse website' />
                    <br />
                    <br />
                    <br />
                    <Heading marginLeft={5} textAlign='left' size='sm'>
                        <a href='https://github.com/anchit1729/Transfer-Reinforcement-Learning'>
                            2. Transfer Reinforcement Learning - An Atari Experiment
                        </a>
                    </Heading>
                    <br />
                    <Text marginLeft={5} textAlign='left' maxWidth={600} fontWeight='medium' size='xl' color='black'>
                        This project is an implementation of a DQN model used to train on the Atari environments in Python.
                        It uses the Dueling architecture with Experience Replay in order to obtain noticeable improvements over the vanilla
                        DQN architecture. In particular, this project was an exploratory attempt to see if transfer learning techniques
                        used in traditional Deep Learning can translate directly to Reinforcement Learning or not (hint: they cannot). In short,
                        the conclusion from the project was that domain transfer is a hard task to perform due to a significant amount of negative transfer,
                        i.e. learning features that are specifically seen in the original environment, and thus have to be un-learnt before the model can
                        pick up new knowledge from the new domain. Despite the seemingly letdown conclusions, it was an enjoyable project to pursue
                        and taught me more about analysing performance and inferring from observations in the field of AI.
                    </Text>
                    <br />
                    <br />
                    <Image marginLeft={35} width={500} src={atariPhoto} alt='A screenshot of the Pong environment used to train a reinforcement learning agent' />
                    <br />
                    <br />
                    <br />
                    <Heading marginLeft={5} textAlign='left' size='sm'>
                        <a href='https://github.com/anchit1729/CuseHacks2021'>
                            3. Fried Onions Classifier - A Fun Hackathon Project
                        </a>
                    </Heading>
                    <br />
                    <Text marginLeft={5} textAlign='left' maxWidth={600} fontWeight='medium' size='xl' color='black'>
                        This project was a fun little hackathon idea implemented by me during CuseHacks 2021, for which we even won a prize.
                        The theme of the hackathon was broad in that it allowed participants to work on any problem area for 24 hours. I decided to
                        work on something related to my experiences during COVID - a machine learning classifier that can help people check whether the
                        food they've cooked is properly cooked yet or if it still needs to be left on the stove. This proof-of-concept simply implements
                        a convolutional neural-network trained on a dataset of ~1000 images of onions and is able to classify with 80% accuracy whether or not
                        the onions have been properly cooked yet.
                    </Text>
                    <br />
                    <br />
                    <Image marginLeft={35} width={500} src={onionsPhoto} alt='A screenshot of the fried onion classifier prototype' />
                    <br />
                    <br />
                    <br />
                    <Heading marginLeft={5} textAlign='left' size='sm'>
                        <a href='https://github.com/anchit1729/distributed-ledger-raft-consensus'>
                            4. Distributed Ledger Prototype - Raft Distributed Consensus
                        </a>
                    </Heading>
                    <br />
                    <Text marginLeft={5} textAlign='left' maxWidth={600} fontWeight='medium' size='xl' color='black'>
                        This project is a bare-bones implementation of a distributed ledger system (popularly known as a 'blockchain') in Java.
                        Instead of focusing simply on the idea of chaining transactions on a single computer, this project is aimed towards
                        implementing a distributed version of a blockchain that can consistently order transactions and follows ACID properties.
                        It uses Raft distributed consensus to achieve this, and is built on top of Google's etcd distributed key-value store
                    </Text>
                    <br />
                    <br />
                    <Image marginLeft={35} width={500} src={blockchainImage} alt='A screenshot of the distributed ledger prototype' />
                    <br />
                    <br />
                    <br />
                    <Heading marginLeft={5} textAlign='left' size='sm'>
                        <a href='https://github.com/anchit1729/Big-Two-Java'>
                            5. Big Two
                        </a>
                    </Heading>
                    <br />
                    <Text marginLeft={5} textAlign='left' maxWidth={600} fontWeight='medium' size='xl' color='black'>
                        This project is a GUI-based online multiplayer game based on the popular Chinese card game 'Big Two',
                        built using Swing and Sockets in Java. It is designed using standard OOP practices such as
                        abstraction, inheritance and polymorphism. It allows four players to start a game, play over the
                        network, and communicate via an in-game chat.
                    </Text>
                    <br />
                    <br />
                    <Image marginLeft={35} width={500} src={bigTwoImage} alt='A screenshot of the Big Two game' />
                    <br />
                    <br />
                    <br />
                    <Heading marginLeft={5} textAlign='left' size='sm'>
                        <a href='https://github.com/anchit1729/Text-based-Adventure'>
                            6. Astrid Crisis
                        </a>
                    </Heading>
                    <br />
                    <Text marginLeft={5} textAlign='left' maxWidth={600} fontWeight='medium' size='xl' color='black'>
                        This project is a tiny text-based retro space-shooter game built as a throwback to Galaga. It is
                        completely written in C++ and utilises the <i>ncurses</i> library for terminal-based graphics rendering.
                        It also provides core gameplay functionality such as power-ups, high-score tracking and
                        saving game progress.
                    </Text>
                    <br />
                    <br />
                    <Image marginLeft={35} width={500} src={astridCrisisImage} alt='A screenshot of the Astrid Crisis game' />
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        </Center >
    )
}
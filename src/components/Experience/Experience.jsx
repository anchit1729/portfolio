import React from 'react'
import { Heading, Center, Text, /*Image*/ } from '@chakra-ui/react'
/*import waterlooImage from '../../images/photo_waterloo.png'
import hkuImage from '../../images/photo_hku.png'
import quantumImage from '../../images/photo_quantum.png'
import oliveXImage from '../../images/photo_olivex.png'*/
import './Experience.css'

export default function Experience(props) {
    return (
        <div className='Experience'>
            <Center>
                <div className='experience-intro-text'>
                    <Heading marginTop={30} marginLeft={5} textAlign='left' size='lg'>Experience</Heading>
                    <br />
                    <Text marginLeft={5} maxWidth={700} textAlign='left' fontWeight='medium' size='xl' color='black'>
                        My work includes both research/academic-oriented positions as well
                        as industrial experience. I find both aspects of work to be equally fulfilling - while academia has
                        the thrill of working on something completely new, industry allows me to see how every cog turns in
                        the complex products that are finally shipped to consumers.
                    </Text>
                    <br />
                    <br />
                    <br />

                    <Heading marginLeft={55} textAlign='left' maxWidth={600} size='sm'>
                        <a href='https://uwaterloo.ca/haptic-computing-lab/people-profiles/anchit-mishra'>
                            1. MITACS Globalink Research Internship 2021 - The University of Waterloo (June 2021 - <i>Present</i>)
                        </a>
                    </Heading>
                    <br />
                    <Text marginLeft={55} textAlign='left' maxWidth={600} fontWeight='medium' size='xl' color='black'>
                        I am currently a research intern working in the Haptic Computing Lab (Human-Computer Interaction group)
                        at the University of Waterloo as part of the MITACS Globalink Research Internship. My work here includes
                        developing a web-based platform to further improve and accelerate research and development in haptics,
                        as well as applying Artificial Intelligence techniques in order to both study and develop new haptics.
                        <br />
                        <br />
                        Supervisor - <a href='http://oliverschneider.ca'>Dr. Oliver Schneider</a>
                    </Text>
                    <br />
                    <br />
                    <br />
                    {/*<Center>
                        <Image width={500} src={waterlooImage} alt='Waterloo Logo' />
                    </Center>*/}
                    <Heading marginLeft={55} textAlign='left' maxWidth={600} size='sm'>
                        <a href='https://qift.weebly.com'>
                            2. Undergraduate Research Assistant in Quantum Information, HKU <br />(Jan 2021-<i>Present</i>)
                        </a>
                    </Heading>
                    <br />
                    <Text marginLeft={55} textAlign='left' maxWidth={600} fontWeight='medium' size='xl' color='black'>
                        I have been participating as an undergraduate research assistant in the Foundations of Computer Science (Theoretical
                        Computer Science) group at The University of Hong Kong, working in the domain of Quantum Information.
                        My work involves the notion of Quantum Incompatibility, and techniques/algorithms that can be used to efficiently
                        compute this quantity in the case of rank-one projective measurements.
                        <br />
                        <br />
                        Supervisor - <a href='https://i.cs.hku.hk/~giulio/'>Prof. Giulio Chiribella</a>
                    </Text>
                    <br />
                    <br />
                    <br />
                    {/*<Center>
                        <Image width={300} src={quantumImage} alt='HKU Logo' />
                    </Center>*/}
                    <Heading marginLeft={55} textAlign='left' size='sm'>
                        <a href='https://www.cs.hku.hk/index.php/programmes/course-offered?infile=2020/engg1340.html'>
                            3. Teaching Assistant, HKU <br />(Sept 2020-May 2021)
                        </a>
                    </Heading>
                    <br />
                    <Text marginLeft={55} textAlign='left' maxWidth={600} fontWeight='medium' size='xl' color='black'>
                        I worked as a Student Teaching Assistant for the course ENGG1340 - Computer Programming II. As part of my duties as
                        a TA, I worked with a group of 15-20 students throughout the year and tutored them on concepts related to C++, programming
                        methodologies, version control, object-oriented design and basic data structures/algorithms.
                    </Text>
                    <br />
                    <br />
                    <br />
                    {/*<Center>
                        <Image width={500} src={hkuImage} alt='HKU Logo' />
                    </Center>*/}
                    <Heading marginLeft={55} textAlign='left' maxWidth={600} size='sm'>
                        <a href='https://olivex.ai'>
                            4. Machine Learning Intern, OliveX <br />(Dec 2020-Jan 2021)
                        </a>
                    </Heading>
                    <br />
                    <Text marginLeft={55} textAlign='left' maxWidth={600} fontWeight='medium' size='xl' color='black'>
                        I worked on developing machine learning pipelines for rapid prototyping and testing of machine learning models
                        for the Kara fitness mirror. I implemented a web scraper in python to obtain images from the internet used technologies
                        such as Gitlab, AWS S3, Lambda and Sagemaker to design posture recognition models for yoga workouts.
                    </Text>
                    <br />
                    <br />
                    <br />
                    {/*<Center>
                        <Image width={500} src={oliveXImage} alt='OliveX Logo' />
                    </Center>*/}
                    <Heading marginLeft={55} textAlign='left' maxWidth={600} size='sm'>5. Software Engineering Intern, Thabit Technologies <br />(June 2019-Sept 2019)</Heading>
                    <br />
                    <Text marginLeft={55} textAlign='left' maxWidth={600} fontWeight='medium' size='xl' color='black'>
                        I worked on optimising the rendering of detailed 3D assets from DAZ Studio in web-browser viewports.
                        Used three.js and Blender throughout the project, and was able to speed up performance by more than
                        3 times.
                    </Text>
                    <br />
                    <br />
                    <br />
                </div>
            </Center>
        </div>
    )
}




import React, { useState } from 'react'
import { Heading } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { MenuItems } from './MenuItems'
import './Navbar.css'

/*
    This components renders the responsive navigation bar throughout the Haptiverse website.

    @author Anchit Mishra
*/

export default function Navbar(props) {
    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => setIsOpen(!isOpen)

    return (
        <nav className='Navbar'>

            {/*The title/logo for the header*/}
            <div className='navbar-logo'>
                <Heading fontFamily='Fira Sans Condensed'><a href='#/'>Anchit Mishra</a></Heading>
            </div>

            {/*To handle responsive changes between full navbar and hamburger menu*/}
            <div className='menu-icon' onClick={handleToggle}>
                {isOpen ? <CloseIcon fontSize='1.5rem' /> : <HamburgerIcon fontSize='1.5rem' />}
            </div>

            {/*Render each of the items to be displayed in the navbar*/}
            <ul className={isOpen ? 'menu-list active' : 'menu-list'}>
                {MenuItems.map((item, index) => {
                    return (<li key={index}><a href={item.url} className={item.category}>{item.title}</a></li>)
                })}
            </ul>


        </nav>
    )
}
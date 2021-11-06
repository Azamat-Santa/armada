import React, { useState } from 'react'
import './header.css'


import Button from '../../utils/Button'
import { Link } from 'react-router-dom'
import { navMenu } from '../dataImg'

export default function Header() {

   const[ menuItemActive,setMenuItemActiv]=useState(0)
   const toggleMenuItem = (index)=>{
    setMenuItemActiv(index)
   }
    
    return (
        
        <div className='headerwrapper'>
            <div className="headerFirstCollumn">
                <div className='headerFeedback'>
                    Наша сила в вашем успехе !
                </div>
                <div className="headerNav">
                    <span>Нужна помощь? Свяжитесь с нашим экспретом</span>
                    <span className='navSecondSpan'>+996 (553) 993 342</span>
                </div>
            </div>
            <div className="headerSecondColumn">
                <div className="headerLogo">
                    <img src='/img/армада 2.png' alt="logo" />
                </div>
                <div className="navMenu">
                    <ul>
                    {
                        navMenu.map((li,index)=> <Link to={li.path} onClick={()=>toggleMenuItem(index)} key={index}><li className={menuItemActive===index?'menuItem menuItemActiv':'menuItem'}>{li.name} </li></Link>)
                    }
                        
                    </ul>
                </div>
                <Button text={'Скачать прайс'}/>
            </div>


        </div>
    )
}

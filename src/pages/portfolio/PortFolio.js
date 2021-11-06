import React from 'react'
import Title from '../../utils/Title'
import './portfolio.css'
import { dataPortfolio } from './../../components/dataImg';

export default function PortFolio() {
  
    return (
        <div className='homeWrapper'>
        <Title title={'Портфолио'}/>

        <div className='portfolio'>
          
          {
            dataPortfolio.map((img,index)=>
            <div key={index} className={`portfolioItem${index}`}><img src={img} alt="" className='portfolioItemImg'/></div>)
          }


        </div>

        
    </div>
    )
}

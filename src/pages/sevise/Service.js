import React from 'react'
import {  dataService } from '../../components/dataImg'
import Form from '../../components/form/Form'
import Title from '../../utils/Title'
import './service.css'

export default function Service() {
    return (
        <div className='homeWrapper'>
            <section className='homeContentSecOne'>
                <Title title={'Наши услуги'} />
                <div className='serviceBlock'>
                    {
                        dataService.map((serviseImg, idx) =>
                            <div className={'areaService' + idx} key={idx}>
                                <img src={serviseImg.img} alt={serviseImg.typeWork} />
                                <p >{serviseImg.typeWork}</p>
                            </div>)
                    }
                </div>
            </section>
            
            <Form/>

            
        </div>
    )
}

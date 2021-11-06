import React from 'react'
import Title from '../utils/Title'
import { dataBlockAdvantage } from './dataImg'

export default function BlockAdvantage() {
    return (
        <section className='homeContentSecOne'>
                <Title title={'Наши преимущества'} />
                <div className="blockAdvantage">
                    {
                        dataBlockAdvantage.map(advantage=>
                        <div className='serviceAdvantage' key={advantage.name}>
                            <img src={advantage.img} alt={advantage.name} />
                            <div>{advantage.name}</div>
                        </div>
                        )
                    }
                </div>
                
            </section>
    )
}

import React from 'react'
import Title from '../utils/Title'
import { dataHomeNike } from './dataImg';

export default function BlockNikeClient() {
    return (
        <section className=" homeContentSecOne homeContentSecTwo">
                <Title title={'Наши клиенты  '} />
                <div className='h_c_sec_One_cart h_c_sec_home_nike'>
                    {
                        dataHomeNike.map((img,index) => <div key={index}><img src={img} alt="" /></div>)
                    }
                </div>

            </section>
    )
}

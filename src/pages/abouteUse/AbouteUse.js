import React from 'react'
import BlockAdvantage from '../../components/BlockAdvantage'
import BlockNikeClient from '../../components/BlockNikeClient'
import { dataBlockMacking } from '../../components/dataImg'
import Form from '../../components/form/Form'
import Slides from '../../components/slides/Slides'
import Title from '../../utils/Title'
import './aboute.css'
export default function AbouteUse() {
    return (
        <div>
            <div className="homeWrapper">
                <section className='homeContentSecOne' >
                    <div className='abouteBanner'>
                        <img src="/img/Rectangle 141.png" alt="" />
                    </div>
                </section>
                <section className='homeContentSecOne'>
                    <Title title={'О компании'} />
                    <div className='abouteDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa</div>
                </section>
                <section className='homeContentSecOne'>
                    <Title title={'Чем мы занимаемся ?'} />
                    <div className="blockAdvantage">
                        {
                            dataBlockMacking.map(advantage =>
                                <div className='serviceAdvantage abouteMacking' key={advantage.title}>
                                    <img src={advantage.img} alt={advantage.title} />
                                    <div>{advantage.title}</div>
                                </div>
                            )
                        }
                    </div>
                </section>
            </div>

            <Slides />
            <div className='homeWrapper'>
                <BlockAdvantage />
                <BlockNikeClient />
                <Form />
            </div>
        </div>
    )
}

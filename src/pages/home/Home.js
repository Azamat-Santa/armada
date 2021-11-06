import React from 'react'
import './home.css'
import Title from '../../utils/Title';
import Button from '../../utils/Button';
import Banner from './../../components/banner/Banner';
import { dataHomeServise, dataHomeWorks, dataHomeProduction, dataHomePrice,  dataHomeTeam } from './../../components/dataImg';
import Card from '../../utils/Card';
import Form from '../../components/form/Form';


export default function Home() {


    return (
        <div>
            <Banner />
            <div className="homeWrapper">
            <section className='homeContentSecOne'>
                <Title title={'Наши услуги'} />
                <div className='h_c_sec_One_cart'>
                    {
                        dataHomeServise.map((img , index) => <div key={index}><img src={img} alt="" /></div>)
                    }
                </div>
            </section>
            <section className=" homeContentSecOne homeContentSecTwo">
                <Title title={'Наши работы '} />
                <div className='h_c_sec_One_cart h_c_sec_One_cartTwo'>
                    {
                        dataHomeWorks.map((img , index) => <div key={index}><img src={img} alt="" /></div>)
                    }

                </div>

                <div style={{ width: '200px', margin: '0 auto' }}> <Button text={'Все работы '} /></div>

            </section>
            <section className=" homeContentSecOne homeContentSecTwo">
                <Title title={'Производство '} />

                <div className='h_c_sec_One_cart h_c_sec_One_cartTwo'>

                    {
                        dataHomeProduction.map((img, index) => <div key={index}><img src={img} alt="" /></div>)
                    }
                </div>

            </section>
            <section className=" homeContentSecOne homeContentSecTwo">
                <Title title={'Наш прайс  '} />
                <div className="homeCardWrapper">
                    {dataHomePrice.map((cardImg,index) =><Card key={index} cardImg={cardImg} text={'Фасадная вывеска (подсветка внутреняя, железный короб, флекс)'} textTwo={'1990 сом'}/>)}

                </div>
                
            </section>

            
             <section className=" homeContentSecOne homeContentSecTwo">
                <Title title={'Наш прайс  '} />
                <div className="homeCardWrapper homeCardWrapperTeam">
                    {dataHomeTeam.map((card,index) =><Card key={index} cardImg={card.img} text={card.name} textTwo={card.position}/>)}

                </div>
             
            </section>

            <Form/>
            </div>
            

        

        </div>
    )
}
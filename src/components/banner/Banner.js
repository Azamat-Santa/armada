import React from 'react'
import './banner.css'


export default function Banner(){
    return (
        <div className='bannerWrapper'>
        <img src="/img/Rectangle 70" alt="" className='bannerImg' />
            <div className="bannercontent">
                <div className="bannercontentTitle ">Наружная  реклама в Бишкеке </div>
                <div className="bannercontentTitleTwo">Произдводство наружной рекламы и создание проектов под ключ</div>
                <div className="bannercontentBtn">Оставить заявку</div>
                <div className="socialNetworks">
                    <img src='/img/Vector.png' alt="whatsApp" />
                    <img src='/img/instagram-sketched.png' alt="insta" />
                    <img src='/img/Vector (1).png' alt="facebook" />
                </div>
            </div>

        </div>
    )
}

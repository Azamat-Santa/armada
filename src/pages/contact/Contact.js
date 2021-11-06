import React from 'react'
// import { YMaps, Map, Placemark } from "react-yandex-maps";
import './contact.css'

// const mapData = {
//     center: [42.853172, 74.610094],
//     zoom: 13,
// };

// const coordinates = [

//     [42.853172, 74.610094]
// ];

export default function Contact() {
    return (
        <div className='wrapperContact'>
            <div className='contactContent'>
                <div className="contactContentLeft">
                    <h4 >Контакты</h4>
                    <div className="contactClock">
                        <h5 className='contactItemTitle'>Режим работы</h5>
                        <p className='contactItemTitleItem'>
                            c 10:00 до 20:00 <br />
                            Сб, Вс - выходной.
                        </p>
                    </div>
                    <div className="contactTelefone">
                        <h5 className='contactItemTitle'>Телефон</h5>
                        <p className='contactItemTitleItem'>+996 (0553) 577-575, +996 (0773) 577-575</p>
                    </div>
                    <div className="contactAddres">
                        <h5 className='contactItemTitle'>Адрес</h5>
                        <p className='contactItemTitleItem'>Байтик Баатыра 23А Бишкек</p>
                    </div>

                </div>
                {/* <YMaps className='yandexMapWrapper'>
                    <Map defaultState={mapData} className='yandexMap'>
                        {coordinates.map((coordinate,index) => <Placemark geometry={coordinate} key={index}/>)}
                    </Map>
                </YMaps> */}
            </div>
        </div>



    )
}

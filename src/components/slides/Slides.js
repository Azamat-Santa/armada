import React, { useState } from 'react'
import { dataSlideAboute } from '../dataImg'
import './slide.css'

export default function Slides(props) {
    const [slidePage, setSlidePage] = useState(2)

    const prevSlide = () => {
        if (slidePage !== 1) {
            setSlidePage(slidePage - 1)
        } else {
            setSlidePage(dataSlideAboute.length)
        }
    }

    const nextSlide = () => {
        if (slidePage !== dataSlideAboute.length) {
            setSlidePage(slidePage + 1)
        } else {
            setSlidePage(1)
        }
    }

    const dotClick = (pageIndex) => {
        setSlidePage(pageIndex)
    }
    return (
        <div className='slideWrapper'>
            

            {
                dataSlideAboute.map((slide, index) =>
                    <div  className={slidePage === index + 1 ? 'slideItemActive slideItem' : 'slideItem'} key={index}>
                        <img src={slide.img} className='slideImg' />
                    </div>
                )
            }
            <div className='slideBtnPrev'
                onClick={prevSlide}
            >{'<'}</div>


            <div className='slideBtnNext'
                onClick={nextSlide}
            >{'>'}
            </div>

            <div className="dotWrapper">
                {
                    dataSlideAboute.map((slideDote, index) =>
                        <div className={slidePage === index + 1 ? 'dotActive dot' : 'dot'}
                            onClick={() => dotClick(index + 1)} 
                            key={index} 
                        ></div>
                    )
                }
            </div>
        </div>
    )
}

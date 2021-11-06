import React from 'react'
import './footer.css'

export default function Footer() {
    return (
        <div className="footerWrapper">
            <div className="footerContent">
               <div className="footerContentItem">
                   <h4>О компании</h4>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus
                   sit amet luctus venenatis, lectus magna fringilla urna, porttitor 
                   rhoncus dolor purus non enim
               </div>
               <div className="footerContentItem">
                   <h4>Информация </h4>
                   <p>Услуги </p>
                   <p>О нас  </p>
                   <p>Контакты </p>
                   <p>Портфолио  </p>
                   <p>Производство  </p>
               </div>
               <div className="footerContentItem">
                   <h4>Контактная информация </h4>
                   <p>Бишкек, ул. Калык Акиева 66, ТЦ Весна, 3 этаж, офис №37 </p>
                   <p>+996 (0553) 577-575  </p>
                   <p>Email@gmail.com </p>
                   
               </div>
               <div className="footerContentItem">
                   <h4> Мы в социальных сетях  </h4>
                   <p>Instagram  </p>
                   <p>Facebook </p> 
               </div>

            </div>
        </div>
    )
}

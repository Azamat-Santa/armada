import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import './form.css'
import { useEffect } from 'react'
export default function Form() {

    const [name, setName] = useState('')
    const [telefone, setTelefone] = useState('')
    const [nameDirty, setNameDirty] = useState(false)
    const [telefoneDirty, setTelefoneDirty] = useState(false)
    const [errorName, setErrorName] = useState('Имя не может быть пустым')
    const [errorTel, setErrorTelefone] = useState('введите номер телефона')
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (errorName || errorTel) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [errorName, errorTel])


    const sendToMail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yo9d5gt',
            'template_v74ipta',
            e.target,
            'user_e84Z4XRyzQc72DOGXHbsc')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
        console.log(e.target);

    }


    const blurToggle = (e) => {

        if (e.target.name === 'name') {
            setNameDirty(true)
        }
        else if (e.target.name === 'telefone') {
            setTelefoneDirty(true)
        }

    }

    const changeName = (e) => {

        setName(e.target.value)

        if (!e.target.value) {
            setErrorName('Имя не может быть пустым')
        } else {
            setErrorName('')

        }

    }

    const changeTelefone = (e) => {
        setTelefone(e.target.value)
        const regKG = /^\+\s?996\s?\d{3}\s?\d{3}\s?\d{3}$/g

        if (!e.target.value) {
            setErrorTelefone('Введите номер телефона')

        } else if (!regKG.test(e.target.value)) {
            setErrorTelefone('корректный номер +996 XXX XXX XXX')
        } else if (regKG.test(e.target.value)) {
            setErrorTelefone('')

        } else {
            setErrorTelefone('')
        }





    }

    return (
        <div className="form">
            <h1>Оставьте бесплатную заявку</h1>
            <p>и менеджер по работе с клиентами свяжется с вами и проконсультирует</p>
            <form
                onSubmit={sendToMail}>
                <div className='nameInpute'>
                    {(errorName && nameDirty) && <div className='errorTelefone' >{errorName}</div>}
                    <input
                        type="text"
                        placeholder='Ваше имя'
                        name='name'
                        value={name}
                        onChange={(e) => changeName(e)}
                        onBlur={(e) => blurToggle(e)}
                    />
                </div>
                <div className='phoneInput'>
                    {(errorTel && telefoneDirty) && <div className='errorTelefone'>{errorTel}</div>}
                    <input
                        placeholder='Телефон +996 ...'
                        type="tel"
                        name='telefone'
                        autoComplete='tel'
                        value={telefone}
                        onChange={(e) => changeTelefone(e)}
                        onBlur={(e) => blurToggle(e)}

                    />

                </div>
                <button
                    type='submit'

                    className='formBtn'
                    onSubmit={sendToMail}
                    disabled={!formValid}
                >Отправить</button>

            </form>


        </div>

    )
}

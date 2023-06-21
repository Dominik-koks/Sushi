import React from 'react'
import del1 from '../assets/delivery/del1.png'
import del2 from '../assets/delivery/del2.png'
import del3 from '../assets/delivery/del3.png'


const Delivery = () => {
    return (
        <div className='dos'>
            <div className="dos-container">
                <div className="dos-block">
                    <div className="dos-title">
                        <h2>Как сделать заказ?</h2>
                        <p>Выберите наиболее удобный для вас способ</p>
                    </div>
                    <div className="block-info">
                        <div className="block-info1">
                            <img src={del1} alt="del1" />
                            <p>На сайте</p>
                        </div>
                        <div className="block-info1">
                            <img src={del2} alt="del2" />
                            <p>В мобильном приложении</p>
                        </div>
                        <div className="block-info1">
                            <img src={del3} alt="del3" />
                            <h3>По телефону</h3>
                            <p className="p1">+38 (099) 0077-313</p>
                            <p className="p2">+38 (099) 0077-313</p>
                            <p className="p3">+38 (099) 0077-313</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Delivery

import React from 'react'
import logo from './../assets/header/logotip.png'
import icon5 from './../assets/footer/icon5.png'
import icon6 from './../assets/footer/icon6.png'
import icon7 from './../assets/footer/icon7.png'
import icon8 from './../assets/footer/icon8.png'
import icon9 from './../assets/footer/icon9.png'
import icon10 from './../assets/footer/icon10.png'

export default function Footer() {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="footer-box">
                    <div className="footer-box1">
                        <div className='footer-box1-logo'>
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="footer-box1-icons">
                            <img src={icon5} alt="icon5" />
                            <img src={icon6} alt="icon6" />
                        </div>
                        <p>© Ninja Sushi. All rights reserved.</p>
                    </div>
                    <div className="footer-box2">
                        <h5>Навигация:</h5>
                        <p>Главная</p>
                        <p>Меню</p>
                        <p>Доставка</p>
                        <p>Вакансии</p>
                        <p>Новости</p>
                    </div>
                    <div className="footer-box3">
                        <h5>Оформить заказ:</h5>
                        <p>+38 (067) 436 61 27</p>
                        <p>+38 (066) 031 76 30</p>
                        <p>+38 (093) 924 98 28</p>
                    </div>
                    <div className="footer-box4">
                        <h5>Время работы:</h5>
                        <p>с 11:00 до 22:45</p>
                        <p>с 22.45 до 06.00</p>
                        <h5>Ночная доставка</h5>
                    </div>
                    <div className="footer-box5">
                        <h5>Мы в соц. сетях:</h5>
                        <div className="footer-box5-icons">
                            <img src={icon7} alt="icon7" />
                            <img src={icon8} alt="icon8" />
                        </div>
                        <div className='footer-box5-box'>
                            <img src={icon9} alt="icon9" />
                            <p>Техподдержка</p>
                        </div>
                    </div>
                    <div className="footer-box6">
                        <h5>#NinjaSushi</h5>
                        <p>Ninja Sushi в фотографиях <br /> наших клиентов</p>
                        <h6>Перейти в instagram</h6>
                    </div>
                </div>
                <div className="footer-footer">
                    <p>Политика конфиденциальности</p>
                    <img src={icon10} alt="icon10" />
                </div>
            </div>
        </div>
    )
}

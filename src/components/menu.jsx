import React from 'react'
import item1 from './../assets/menu/items/item1.png'
import item2 from './../assets/menu/items/item2.png'
import item3 from './../assets/menu/items/item3.png'
import item4 from './../assets/menu/items/item4.png'
import item5 from './../assets/menu/items/item5.png'
import item6 from './../assets/menu/items/item6.png'
import icon1 from './../assets/menu/icons/icon1.png'
import icon2 from './../assets/menu/icons/icon2.png'
import icon3 from './../assets/menu/icons/icon3.png'
import icon4 from './../assets/menu/icons/icon4.png'




export default function Menu() {
    return (
        <div className='menu'>
            <div className='menu-container'>
                <div className='menu-title'>
                    <h1>Суши</h1>
                </div>
                <div className="menu-items">
                    <div className="item">
                        <div className="foto-block">
                            <div className="foto-title">
                                <p>Hit</p>
                                <p>New</p>
                            </div>
                            <div className='foto'>
                                <img src={item1} alt="item1" />
                            </div>
                            <div className='icons'>
                                <img src={icon1} alt="icon1" />
                                <img src={icon2} alt="icon2" />
                                <img src={icon3} alt="icon3" />
                            </div>
                        </div>
                        <div className="item-title">
                            <h2>Гункан лосось</h2>
                            <p className='item-ves'>Вес: 40г</p>
                            <p>
                                Нори, рис, японский майонез, бальзамик,<br />
                                трюфельная сальса, кунжутное масло
                            </p>
                        </div>
                        <div className='item-func'>
                            <div className="item-price">
                                <h3>190</h3>
                                <p>грн</p>
                            </div>
                            <div className="item-action">
                                <img src={icon4} alt="icon4" />
                                <p>+</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

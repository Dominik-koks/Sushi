import React from 'react'
import c1 from './../assets/category/c1.png'
import c2 from './../assets/category/c2.png'
import c3 from './../assets/category/c3.png'
import c4 from './../assets/category/c4.png'
import c5 from './../assets/category/c5.png'
import c6 from './../assets/category/c6.png'





export default function Category() {
    return (
        <div className='category'>
            <div className="category-container">
                <div className="category-box">
                    <div className="category-icons">
                        <img src={c1} alt="c1" />
                    </div>
                    <p>Роллы</p>
                </div>
                <div className="category-box">
                    <div className="category-icons">
                        <img src={c2} alt="c2" />
                    </div>
                    <p>Суши</p>
                </div>
                <div className="category-box">
                    <div className="category-icons">
                        <img src={c3} alt="c3" />
                    </div>
                    <p>Сеты</p>
                </div>
                <div className="category-box">
                    <div className="category-icons">
                        <img src={c4} alt="c4" />
                    </div>
                    <p>Боулы</p>
                </div>
                <div className="category-box">
                    <div className="category-icons">
                        <img src={c5} alt="c5" />
                    </div>
                    <p>Напитки</p>
                </div>
                <div className="category-box">
                    <div className="categoty-icons">
                        <img src={c6} alt="c6" />
                    </div>
                    <p>Соусы</p>
                </div>
            </div>
        </div>
    )
}

import React, { useState } from 'react'
import c1 from './../assets/category/c1.png'
import c2 from './../assets/category/c2.png'
import c3 from './../assets/category/c3.png'
import c4 from './../assets/category/c4.png'
import c5 from './../assets/category/c5.png'
import c6 from './../assets/category/c6.png'
import { useSelector } from 'react-redux'




const category = ['Суши', 'Роллы', 'Сеты', 'Закуски', 'Напитки',]
const icons = [c1, c2, c3, c4, c5, c6]



export default function Category() {
    const ref = useSelector(state => state.home.offsetHeight)


    const [act, setAct] = useState(0)


    return (
        <div className='category'>
            <div className="category-container">
                {category.map((cat, i) =>
                    <div key={i} onClick={() => {
                        setAct(i)
                        window.scrollTo(0, ref[i].current.offsetTop - 70)
                    }} className={`category-box ${act === i ? 'active' : ''}`}>
                        <div className="category-icons">
                            <img src={icons[i]} alt="c2" />
                        </div>
                        <p>{cat}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

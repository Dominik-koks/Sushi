import React, { useRef, useState } from 'react'
import c1 from './../assets/category/c1.png'
import c2 from './../assets/category/c2.png'
import c3 from './../assets/category/c3.png'
import c4 from './../assets/category/c4.png'
import c5 from './../assets/category/c5.png'
import c6 from './../assets/category/c6.png'


const category = ['Суши', 'Роллы', 'Сеты', 'Закуски', 'Напитки', 'Соусы']
const icons = [c1, c2, c3, c4, c5, c6]


export default function Category() {

    const [id, setId] = useState('1')
    const scollToRef = useRef(null)

    const goToFilterData = (uniqueIdentifier) => {
        const element = document.getElementById('cat_' + uniqueIdentifier);
        element.scrollIntoView()
    };

    return (
        <div className='category'>
            <div className="category-container">
                {category.map((cat, i) =>
                    <div id={`cat_${cat.someUniqueIdentifier}`} onClick={() => goToFilterData(cat.data.someUniqueIdentifier)} className="category-box">
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

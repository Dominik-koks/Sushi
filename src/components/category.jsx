import React from 'react'
import c1 from './../assets/category/c1.png'
import c2 from './../assets/category/c2.png'
import c3 from './../assets/category/c3.png'
import c4 from './../assets/category/c4.png'
import c5 from './../assets/category/c5.png'
import c6 from './../assets/category/c6.png'
import { useDispatch, useSelector } from 'react-redux'
import { setAct } from '../redux/slices/homeSlice'




const category = ['Суши', 'Роллы', 'Сеты', 'Закуски', 'Напитки',]
const icons = [c1, c2, c3, c4, c5, c6]



export default function Category() {
    const offsetTop = useSelector(state => state.home.offsetTop)
    const act = useSelector((state) => state.home.act);
    const dispatch = useDispatch()

    const handleCategoryClick = (index) => {
        dispatch(setAct(index));
        const hi = offsetTop[index];
        window.scrollTo(0, hi - 70);
    };


    return (
        <div className='category'>
            <div className="category-container">
                {category.map((cat, i) =>
                    <div key={i} onClick={() => handleCategoryClick(i)} className={`category-box ${act === i ? 'active' : ''}`}>
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

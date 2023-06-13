import axios from 'axios'
import React, { useEffect } from 'react'
import Menu from './menu'
import { useDispatch, useSelector } from 'react-redux'
import { setMenu } from '../redux/slices/sushisSlice'

export default function Unite() {

    const menu = useSelector(state => state.sushi.menu)
    const dispatch = useDispatch()


    useEffect(() => {

        axios.get('http://localhost:3000/db.json').then(({ data }) => {
            dispatch(setMenu(data.menu))
        })
    }, [dispatch])

    const category = ['Суши', 'Роллы', 'Сеты', 'Закуски', 'Напитки',]
    return (
        <div>
            {category.map((id, i) =>
                <div key={i} className='menu-box'>
                    <div className='menu-title'>{id}</div>
                    {menu.filter((o) => o.category === i).map(a => <Menu key={a.id} {...a} />)}
                </div>)
            }
        </div>
    )
}

import axios from 'axios'
import React, { useEffect, useRef } from 'react'
import Menu from './menu'
import { useDispatch, useSelector } from 'react-redux'
import { setMenu } from '../redux/slices/sushisSlice'
import { addCoor } from '../redux/slices/homeSlice'




// const Unite = () => {

//     const menu = useSelector(state => state.sushi.menu)
//     const dispatch = useDispatch()

//     const ref0 = useRef(null)
//     const ref1 = useRef(null)
//     const ref2 = useRef(null)
//     const ref3 = useRef(null)
//     const ref4 = useRef(null)

//     const ref = [ref0, ref1, ref2, ref3, ref4]

//     useEffect(() => {

//         axios.get('http://localhost:3000/db.json').then(({ data }) => {
//             dispatch(setMenu(data.menu))
//         })
//         dispatch(addCoor(ref))
//         console.log(ref)
//     }, [dispatch,])

//     const category = ['Суши', 'Роллы', 'Сеты', 'Закуски', 'Напитки',]


//     return (
//         <div>
//             {category.map((id, i) =>
//                 <div ref={ref[i]} key={i} className='menu-box'>
//                     <div className='menu-title'>{id}</div>
//                     {menu.filter((o) => o.category === i).map(a => <Menu key={a.id} {...a} />)}
//                 </div>
//             )
//             }
//         </div>
//     )
// }

// export default Unite

const Unite = () => {
    const menu = useSelector(state => state.sushi.menu)
    const dispatch = useDispatch()

    const ref0 = useRef(null)
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const ref4 = useRef(null)

    const ref = [ref0, ref1, ref2, ref3, ref4]

    useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({ data }) => {
            dispatch(setMenu(data.menu))
        })
        dispatch(addCoor(ref.map(item => item.current.offsetHeight))) // Исправлено здесь
        console.log(ref.map(item => item.current.offsetHeight)) // Исправлено здесь
    }, [dispatch])

    const category = ['Суши', 'Роллы', 'Сеты', 'Закуски', 'Напитки']

    return (
        <div>
            {category.map((id, i) =>
                <div ref={ref[i]} key={i} className='menu-box'>
                    <div className='menu-title'>{id}</div>
                    {menu.filter((o) => o.category === i).map(a => <Menu key={a.id} {...a} />)}
                </div>
            )}
        </div>
    )
}

export default Unite


import React, { useEffect } from 'react'
import strelka1 from './../assets/menu/foolitems/strelka1.png'
import strelka2 from './../assets/menu/foolitems/strelka2.png'
import icon1 from './../assets/menu/icons/icon1.png'
import icon2 from './../assets/menu/icons/icon2.png'
import serdce from './../assets/menu/foolitems/serdce.png'
import cart1 from './../assets/menu/foolitems/cart.png'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setFoolItem, slide } from '../redux/slices/foolSlice'
import axios from 'axios'



export default function FoolItem() {

    const slides = useSelector(state => state.slide.slide)
    const items = useSelector(state => state.slide.foolItems)
    const dispatch = useDispatch()
    const { id } = useParams()

    let item = items[slides]

    useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({ data }) => {
            dispatch(setFoolItem(data.menu))
            console.log(data.menu)
        })
        dispatch(slide(id))
    }, [dispatch,])

    const changeSlide = (id) => {
        id -= 1
        dispatch(slide(id))
    }

    console.log(items)


    return (
        <div className='foolitem'>
            <div className="foolitem-container">
                <div className="foolitem-blocks">
                    <button onClick={() => changeSlide(+slides)} className="foolitem-slide1">
                        <img src={strelka1} alt="strelka1" />
                    </button>
                    <div className="foolitem-block">
                        <div className="foolitem-block1">
                            <div className="block1-spec">
                                <div className='spec1'>
                                    <img src={icon2} alt="icon1" />
                                    <p>Вегеторианское</p>
                                </div>
                                <div className='spec2'>
                                    <img src={icon1} alt="icon2" />
                                    <p>Острое</p>
                                </div>
                            </div>
                            <div className="footitem-foto">
                                <img src={item.imageUrl} alt="foto" />
                            </div>
                        </div>
                        <div className="foolitem-block2">
                            <div className="block2-spec">
                                <p>Hit</p>
                                <p>New</p>
                            </div>
                            <h3>{item.name}</h3>
                            <div className='ves'>Вес:{item.mas}г</div>
                            <div className="block2-info">
                                <div className="block2-price">
                                    <p>{item.price}</p>
                                    <p>грн</p>
                                </div>
                                <div className="block2-buttons">
                                    <button className="button1">
                                        <p>В корзину</p>
                                        <img src={cart1} alt="cart1" />
                                    </button>
                                    <button className='button2'>
                                        <img src={serdce} alt="serdce" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="foolitem-slide1">
                        <img src={strelka2} alt="strelka2" />
                    </button>
                </div>
            </div>
        </div>
    )
}

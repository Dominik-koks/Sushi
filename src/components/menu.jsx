import { useDispatch } from 'react-redux'
import icon1 from './../assets/menu/icons/icon1.png'
import icon2 from './../assets/menu/icons/icon2.png'
import icon3 from './../assets/menu/icons/icon3.png'
import icon4 from './../assets/menu/icons/icon4.png'
import { setInCart } from '../redux/slices/cartSlice'





export default function Menu({ id, imageUrl, name, mas, compound, price, hit, now, count }) {


    const dispatch = useDispatch()


    const addInCart = () => {
        const item = {
            id,
            imageUrl,
            name,
            mas,
            compound,
            price,
            hit,
            now,
            count,
        }
        dispatch(setInCart(item))
    }


    return (
        <div className='menu'>
            <div className='menu-container'>
                <div className="menu-items">
                    <div className="item">
                        <div className="foto-block">
                            <div className="foto-title">
                                {hit ? <p className="foto-title1">Hit</p> : ''}
                                {now ? <p className="foto-title2">New</p> : ''}
                            </div>
                            <div className='foto'>
                                <img src={imageUrl} alt="item1" />
                            </div>
                            <div className='icons'>
                                <img className='icons1' src={icon1} alt="icon1" />
                                <img className='icons2' src={icon2} alt="icon2" />
                                <img className='icons3' src={icon3} alt="icon3" />
                            </div>
                        </div>
                        <div className="item-title">
                            <h2>{name}</h2>
                            <p className='item-ves'>Вес: {mas}г</p>
                            <p>
                                {compound}
                            </p>
                        </div>
                        <div className='item-func'>
                            <div className="item-price">
                                <h3>{price}</h3>
                                <p>грн</p>
                            </div>
                            <div className="item-action">
                                <img src={icon4} alt="icon4" />
                                <button onClick={addInCart}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

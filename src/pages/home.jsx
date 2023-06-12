import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import Category from '../components/category'
import Menu from '../components/menu'
import Map from '../components/map'
import strelka from './../assets/header/Vector.png'
import Footer from '../components/footer'
import axios from 'axios'

export default function Home() {



    const [menu, setMenu] = useState([])


    useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({ data }) => {
            setMenu(data.menu)
        })
    }, [])

    const category = ['Суши', 'Роллы', 'Сеты', 'Закуски', 'Напитки']

    return (
        <div>
            <Header />
            <Category />
            {category.map((id, i) => <div className='menu-box'>
                <div className='menu-title'>{id}</div> <br />
                {menu[i].map((o) => <Menu key={o.id} {...o} />)}
            </div>
            )}

            <Map />
            <div className="info-title">
                <h6>
                    В Сети полно всевозможных сервисов учета, начиная от учета времени или калорий, заканчивая <br />
                    учетом финансов. А вот сервиса учета инструментов до сих пор не было. Теперь – есть. Вообще, <br />
                    конечно, идея учета рабочего инструмента, расходных материалов и комплект... Теперь – есть.
                </h6>
                <p>Читать больше <img src={strelka} alt="strelka" /></p>
            </div>
            <Footer />
        </div>
    )
}

import React from 'react'
import Header from '../components/header'
import Category from '../components/category'
import Menu from '../components/menu'
import Map from '../components/map'
import strelka from './../assets/header/Vector.png'
import Footer from '../components/footer'

export default function Home() {
    return (
        <div>
            <Header />
            <Category />
            <Menu />
            <Map />
            <div className="info-title">
                <h6>
                    В Сети полно всевозможных сервисов учета, начиная от учета времени или калорий, заканчивая <br />
                    учетом финансов. А вот сервиса учета инструментов до сих пор не было. Теперь – есть. Вообще, <br />
                    конечно, идея учета рабочего инструмента, расходных материалов и комплект... Теперь – есть.
                </h6>
                <p>Читать больше <img src={strelka} alt="" /></p>
            </div>
            <Footer />
        </div>
    )
}

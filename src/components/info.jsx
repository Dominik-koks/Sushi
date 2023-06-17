import React from 'react'
import strelka from './../assets/header/Vector.png'


export default function Info() {
    return (
        <div>
            <div className="info-title">
                <div>
                    <h6>
                        В Сети полно всевозможных сервисов учета, начиная от учета времени или калорий, заканчивая <br />
                        учетом финансов. А вот сервиса учета инструментов до сих пор не было. Теперь – есть. Вообще, <br />
                        конечно, идея учета рабочего инструмента, расходных материалов и комплект... Теперь – есть.
                    </h6>
                    <p>Читать больше <img src={strelka} alt="strelka" /></p>
                </div>
            </div>
        </div>
    )
}

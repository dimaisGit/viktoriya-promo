import React from 'react'

import tel from '../img/prices-main/tel.png'
import coffe from '../img/prices-main/coffePrize.png'
import fitnes2 from '../img/prices-main/fitnes2.png'
import salute from '../img/prices-main/salute.png'
import mandarin from '../img/prices-main/mandarin.png'
import fitnes1 from '../img/prices-main/fitnes1.png'

export default class MainComponent extends React.Component {
    render() {
        const { region, handleChangeRegion } = this.props
        return (
            <main className="oranged ">
                <div className="container flexing">
                    <select className='geoSelect' value={region} onChange={e => handleChangeRegion(e.target.value)}>
                        <option value='Москва, Россия'>Москва и Московская область</option>
                        <option value='Калининград, Россия'>Калининград и Калининградская область</option>
                    </select>
                    <div className="col">
                        <a href="http://dixy.ru/" target="_blank" className="logo">
                            <div className="logo-inner"></div>
                        </a>
                        <span className="dating">с 16 декабря 2019 по 31 января 2020</span>
                        <h1>Мандарим в "виктории"</h1>
                        <div className="sales-block">
                            <div className="heading">скидки до 20%
                            </div>
                            <div className="additional">и суперпризы</div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="mandarin-img">
                            <img className="plane" src={salute} alt="salute"
                                 srcSet=""/>
                            <img className="tour" src={tel} alt="tel" srcSet=""/>
                                <img className="tel" src={coffe} alt="coffe" srcSet=""/>
                                    <img className="card" src={fitnes2} alt="fitnes2" srcSet=""/>
                                        <img className="list" src={fitnes1} alt="fitnes1"
                                             srcSet=""/>
                                        <img className="mandarin" src={mandarin} alt="mandarin"
                                             srcSet=""/>
                        </div>
                        <div className="code">
                            <div className="btn register">
                                зарегистрировать код 2020
                            </div></div>
                    </div>
                </div>
                <div className="sky"></div>
            </main>
        )
    }
}
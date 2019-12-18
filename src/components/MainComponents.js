import React from 'react'

import tel from '../img/prices-main/tel.png'
import coffe from '../img/prices-main/coffePrize.png'
import fitnes2 from '../img/prices-main/fitnes2.png'
import salute from '../img/prices-main/salute.png'
import mandarin from '../img/prices-main/mandarin.png'
import fitnes1 from '../img/prices-main/fitnes1.png'
import placemark from '../img/placemark.svg'

export default class MainComponent extends React.Component {
    componentDidMount () {
        // document.getElementsByClassName('geoSelect')[0]
    }
    render() {
        const { region, handleChangeRegion } = this.props
        return (
            <main className="oranged ">
                <div className="container flexing">
                    <select className='geoSelect' value={region} onChange={e => handleChangeRegion(e.target.value)} onClick="return false;" id="">
                        <option value='Москва, Россия'> Москва и МO</option>
                        <option value='Калининград, Россия'> Калининград и КO</option>
                    </select>
                    <div className="col">
                        <a href="http://dixy.ru/" target="_blank" className="logo">
                            <div className="logo-inner"></div>
                        </a>
                        <span className="dating">с 16 декабря 2019 по 31 января 2020</span>
                        <h1>Мандарим в «Виктории»</h1>
                        <div className="sales-block">
                            <div className="heading">скидки
                            </div>
                            <div className="additional">и суперпризы***</div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="mandarin-img">
                            <img className="mandarin" src={mandarin} alt="mandarin"
                                 srcSet=""/>
                        </div>
                        <div className="code">
                            <div className="btn register">
                                зарегистрировать код «2020»
                            </div></div>
                    </div>
                </div>
                <div className="sky"></div>
            </main>
        )
    }
}
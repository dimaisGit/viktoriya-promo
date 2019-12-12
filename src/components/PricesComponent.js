import React from 'react'
import tv from '../img/tvPrize.png'
import tel from '../img/phonePrize.png'
import coffee from '../img/coffeePrize.png'
import fitnes from '../img/fitnesPrize.png'


export default class PricesComponent extends React.Component {
    render() {
        return (
            <section className="prices oranged">
                <div className="container">
                    <h2>суперпризы</h2>
                    <div className="prices-blocks flexing owl-carousel">
                        <div className="price-box">
                            <div className="box">
                                <img src={tel} alt="tel" />
                            </div>
                            <p>Смартфон</p>
                        </div>
                        <div className="price-box">
                            <div className="box">
                                <img src={coffee} alt="card" />
                            </div>
                            <p>Кофемашина</p>
                        </div>
                        <div className="price-box">
                            <div className="box">
                                <img src={tv} alt="tv" />
                            </div>
                            <p>Телевизор</p>
                        </div>
                        <div className="price-box">
                            <div className="box">
                                <img src={fitnes} alt="fitnes" />
                            </div>
                            <p>Фитнес браслеты</p>
                        </div>
                    </div>
                    <div className="userNav">
                        <div className="prev">{'<'}
                        </div>
                        <div className="next">{'>'}</div>
                    </div>
                    <div className="btn">Зарегистрировать код «2020»</div>
                </div>
            </section>
        )
    }
}
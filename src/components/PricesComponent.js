import React from 'react'
import tour from '../img/tour.png'
import tel from '../img/tel.png'
import card from '../img/card.png'


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
                            <p>iPad или iPhone 11</p>
                        </div>
                        <div className="price-box">
                            <div className="box">
                                <img src={card} alt="card" />
                            </div>
                            <p>Сертификат на покупку бытовой техники</p>
                        </div>
                        <div className="price-box">
                            <div className="box">
                                <img src={tour} alt="tour" />
                            </div>
                            <p>Одно из трех путешествий</p>
                        </div>
                    </div>
                    <div className="userNav">
                        <div className="prev">{'<'}
                        </div>
                        <div className="next">{'>'}</div>
                    </div>
                    <a href="#" className="btn">Зарегистрировать код «2020»</a>
                </div>
            </section>
        )
    }
}
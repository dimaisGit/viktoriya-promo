import React from 'react'
import mandarinRaffle from '../img/mandarin-raffle.svg'


export default class RaffleComponent extends React.Component {
    render() {
        return (
            <section className="raffle oranged">
                <div className="container">
                    <div className="content-raffle">
                        <img src={mandarinRaffle} alt="mandarin-raffle" srcSet=""/>
                            <div className="info">
                                <h2>Розыгрыш</h2>
                                <p>Розыгрыш призов вы сможете увидеть в прямом эфире тогда-то</p>
                            </div>
                    </div>
                </div>
            </section>
        )
    }
}
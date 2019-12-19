import React from 'react'
import mandarinRaffle from '../img/mandarin-raffle.svg'
import { Mandarin } from './Mandarin'

export default class RaffleComponent extends React.Component {
    render() {
        return (
            <section className="raffle oranged">
                <div className="container">
                    <div className="content-raffle flexing">
                        <Mandarin />
                        <div className="info">
                            <h2>7 февраля 2020 года</h2>
                            <p>Подведение итогов и объявление победителей </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
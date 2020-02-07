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
                        <iframe width="100%" height="296px" src="https://www.youtube.com/embed/wPw6zB7sCpY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
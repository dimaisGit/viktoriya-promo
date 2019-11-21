import React from 'react'
import mandarinRaffle from '../img/mandarin-raffle.svg'


export default class RaffleComponent extends React.Component {
    render() {
        return (
            <section className="raffle oranged">
                <div className="container">
                    <div className="content-raffle flexing">
                        {/* <img src={mandarinRaffle} alt="mandarin-raffle" srcSet=""/> */}
                        <div className="orange-animated">
                            <div className="tail"></div>
                            <div className="leave"></div>
                            <div class="mandarinMain"> </div>
                            <div className="leftHand"></div>
                            <div className="rightHand"></div>
                            <div className="leftBrow"></div>
                            <div className="rightBrow"></div>
                            <div className="leftEye"></div>
                            <div className="rightEye"></div>
                            <div className="mouth"></div>
                        </div>
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
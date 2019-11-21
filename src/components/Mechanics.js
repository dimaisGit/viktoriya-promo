import React from 'react'

export default class MechanicsComponent extends React.Component {
    render () {
        return (
            <section className="mechanics mandarined">
                <div className="container">
                    <div className="blocks flexing">
                        <div className="block first">
                            <p>С <b>16.12.2019</b> ПО <b>31.01.2020</b> СОВЕРШИТЕ ПОКУПКУ
                                НА СУММУ ОТ 700Р*</p>
                        </div>
                        <div className="block second">
                            <p>ПОЛУЧИТЕ <b>КУПОН</b> НА КАССЕ
                                И СТЕРЕВ ЗАЩИТНЫЙ СЛОЙ вы получите...</p>
                        </div>
                    </div>
                    <div className="blocks flexing">
                        <div className="block no-bg">
                            <h4>скидку до 20%</h4>
                            <p>Используйте купон
                                при следующей покупке
                                от 700 руб.</p>
                        </div>
                        <div className="block no-bg">
                            <h4>код «2020»</h4>
                            <p>с шансом поучаствовать
                                в розыгрыше призов</p>
                        </div>
                    </div>
                </div>
                <div className="orangesAll"></div>
            </section>
        )
    }
}
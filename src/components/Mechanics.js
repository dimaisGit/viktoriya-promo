import React from 'react'
import MainModalContainer from "../containers/MainModalContainer";
import toolt from '../img/tooltip.png'
import 'react-tippy/dist/tippy.css';
import { Tooltip } from 'react-tippy';
import mandarin from '../img/mandar.gif'
import $ from 'jquery'
import {Mandarin} from './Mandarin'


export default class MechanicsComponent extends React.Component {
    render () {
        return (
            <section className="mechanics mandarined">
                <MainModalContainer/>
                    <div className="ramka">
                        <div className="container">
                            <div className="blocks flexing">
                                <div className="block first">
                                    <p>с <b>16.12.2019</b> по <b>31.01.2020</b> совершите покупку от 1000руб*</p>
                            </div>
                                <div className="block second">
                                    <p>получите <b>карту</b> на кассе, сотрите защитный слой и получите...</p>
                                </div>
                            </div>
                            <div className="blocks flexing">
                                <div className="block no-bg">
                                    <h4>скидку до 20%</h4>
                                    <p>
                                        Используйте купон
                                        при следующей покупке
                                    </p>
                                </div>
                                <div className="block no-bg">
                                    <h4>код «2020»</h4>
                                    <p>Для участия в новогоднем розыгрыше <b>СУПЕРПРИЗОВ</b>!</p>
                                </div>
                            </div>
                        </div>
                        <div className="orangesAll">
                            <img src={mandarin} />
                            {/* <Mandarin /> */}
                        </div>
                    </div>
            </section>
        )
    }
}
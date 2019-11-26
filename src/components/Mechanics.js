import React from 'react'
import MainModal from "./MainModal";
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
                <MainModal/>
                    <div className="ramka">
                        <div className="container">
                            <h2>Встречай Новый год вместе с нами!</h2>
                            <div className="blocks flexing">
                                <div className="block first">
                                    <p>Соверши покупку ОТ 700<small>₽</small> и получи купон (скретч-карту)</p>
                            </div>
                                <div className="block second">
                                    <p>Под защитным слоем ты найдешь один из подарков:</p>
                                </div>
                            </div>
                            <div className="blocks flexing">
                                <div className="block no-bg">
                                    <h4>скидку до 20%</h4>
                                    <p>На следующую покупку от 700<small>₽</small> в <b>«ДИКСИ»</b>
                                        <Tooltip
                                            title="Без учета табака, табачной продукции, табачных изделий, курительных принадлежностей, алкогольной продукции с установленной минимальной розничной ценой"
                                            position="top"
                                            trigger="click" >
                                            <img className="tooltip-min" src={toolt} />
                                        </Tooltip>
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
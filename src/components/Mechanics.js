import React from 'react'
import MainModal from "./MainModal";
import toolt from '../img/tooltip.png'
import 'react-tippy/dist/tippy.css';
import { Tooltip } from 'react-tippy';
import mandarin from '../img/mandar.gif'
import $ from 'jquery'
import {Mandarin} from './Mandarin'


export default class MechanicsComponent extends React.Component {
<<<<<<< HEAD
    componentDidMount() {
        let pos = $('.oranged').position().top + $(window).height();
        let headerPos = $('.mechanics').find('h2').position().top;
        $(document).on('scroll', function (e) {
            console.log(pos + ", " + $(this).scrollTop(), headerPos)
            if ($(this).scrollTop() >= headerPos) {
                console.log('ready', $(this).scrollTop())
            }
        })
    }
    render() {
=======
    render () {
>>>>>>> e17350346ba022d3d8eca252e663737e6672d5c9
        return (
            <section className="mechanics mandarined">
                <MainModal/>
                <div className="container">
                    <div className="blocks flexing">
                        <div className="block first">
                            <p>С <b>16.12.2019</b> ПО <b>31.01.2020</b> СОВЕРШИТЕ ПОКУПКУ
                                НА СУММУ ОТ 700Р*</p>
                        </div>
                    </div>
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
                </div>
            </section>
        )
    }
}
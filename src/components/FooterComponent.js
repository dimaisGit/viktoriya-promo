import React from 'react'


export default class FooterComponent extends React.Component {

    render() {
        return (
            <footer className="darkTh">
                <div className="contentSnow"></div>
                <div className="container">
                    <h2>Сотрите защитный слой и узнайте, какой подарок вы получите</h2>
                    <p>Организатор акции ООО "Топ-Медиа". Подарком может быть скидка или право участия в розыгрыше (при наличии кода 2020 под защитным кодом).
Срок Акции с 16.12.2019 года по 31.01.2020 года.
Подарок скидка предоставляется на последующую покупку от 1000* рублей в супермаркете "Виктория" {this.props.region === 'Калининград, Россия' && '(для магазинов "Виктория Квартал" и "Дешево" сумма покупки составляет от 700р)'}и рассчитывается от цены, действующей в магазине на момент покупки.  Для участия в розыгрыше необходимо зарегистрироваться на сайте www.dixy.ru.
<br />
                        К участию допускаются дееспособные лица, достигшие возраста 18 лет. Информацию об
                                               организаторе акции, правилах ее проведения, призовом фонде, сроках, месте и порядке их получения
                                               можно узнать
                        по телефону <a href="tel:88003330201">8(800) 333-02-01</a> и на сайте <a href="https://www.victoria-group.ru/"
                            target="_blank">www.victoria-group.ru/</a>.
                                                                                                 <br />
                        <br />
                        *700 руб. без учета табака, табачной продукции, табачных изделий, курительных принадлежностей, алкогольной продукции с установленной минимальной розничной ценой.
                        <br />**Скидка не распространяется на табак, табачную продукции, табачные изделия, курительные принадлежности и алкогольную продукцию с установленной минимальной розничной ценой.


                    </p>
                </div>
            </footer>
        )
    }
}
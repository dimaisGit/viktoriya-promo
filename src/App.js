import React from 'react';
import logo from './logo.svg';
import { initSnowFlakesNew } from "./js/season";
import { initSnowFlakes } from "./js/snowflakes";
import { initOwl } from "./js/main";
import MainComponent from "./components/MainComponents";
import MechanicsComponent from "./components/Mechanics";
import PricesComponent from "./components/PricesComponent";
import RaffleComponent from "./components/RaffleComponent";
import MapComponent from "./components/MapComponent";
import FooterComponent from "./components/FooterComponent";
import $ from 'jquery'
import './css/main.css'
import './css/animations.css'
import './css/mobile.css'
import leImg from './img/agree.png'
export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            latitude: 0,
            longitude: 0,
            region: 'Москва, Россия'
        }
    }

    handleChangeRegion = region => {
        this.setState({
            region: region
        })
    }

    componentDidMount() {
        initSnowFlakesNew();
        initOwl()
        $('.btn').click(function(){
            initSnowFlakesNew();

        })
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords
            this.setState({
                latitude: latitude,
                longitude: longitude
            })
            console.log(latitude, longitude)
        }, error => {
            console.log(error)
        })
    }

    render() {
        const { longitude, latitude } = this.state
        return (
          <>
              <MainComponent
                region={this.state.region}
                handleChangeRegion={this.handleChangeRegion}
              />
              <MechanicsComponent />
              <PricesComponent />
              <RaffleComponent />
              <MapComponent
                longitude={longitude}
                latitude={latitude}
                handleChangeRegion={this.handleChangeRegion}
                region={this.state.region}
              />
              <FooterComponent
                region={this.state.region}
              />
          </>
      );
    }
}

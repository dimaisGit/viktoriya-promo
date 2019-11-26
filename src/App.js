import React from 'react';
import logo from './logo.svg';
import { initSnowFlakes } from "./js/snowflakes";
import { initOwl } from "./js/main";
import MainComponent from "./components/MainComponents";
import MechanicsComponent from "./components/Mechanics";
import PricesComponent from "./components/PricesComponent";
import RaffleComponent from "./components/RaffleComponent";
import MapComponent from "./components/MapComponent";
import FooterComponent from "./components/FooterComponent";
import './css/animations.css'
import './css/main.css'
import './css/mobile.css'

export default class App extends React.Component {
    componentDidMount() {
        initSnowFlakes();
        initOwl()
    }

    render() {
        return (
          <>
              <MainComponent />
              <MechanicsComponent />
              <PricesComponent />
              <RaffleComponent />
              <MapComponent />
              <FooterComponent />
          </>
      );
    }
}

import React from 'react'
import { data } from "../js/map";
import placemark from '../img/placemark.png'
import cluster from '../img/cluster.png'

export default class MapComponent extends React.Component {
    componentDidMount = () => {
        window.ymaps.ready(this.setInit);
    }

    setInit = () => {
        setTimeout(this.init, 100)
    }
    init = async () => {
        let zoomControl = new window.ymaps.control.ZoomControl({
            options: {
                position: {
                    left: 10,
                    top: 10
                },
                size: 'large'
            }
        });
        this.myMap = new window.ymaps.Map('map',
            {
                center: [55.76, 37.64],
                zoom: 12.2,
                controls: [zoomControl]
            }
        )

        let objectManager = new window.ymaps.ObjectManager({
            clusterize: true,
            gridSize: 64,
            clusterDisableClickZoom: true
        });
        let  MyIconContentLayout = window.ymaps.templateLayoutFactory.createClass(
            '<div style="color: #fff; font-weight:bold;width:46px;vertical-align:middle;line-height:46px;">$[properties.iconContent]</div>'
        );
        // Чтобы задать опции одиночным объектам и кластерам,
        // обратимся к дочерним коллекциям ObjectManager.
        objectManager.objects.options.set(
            {
                iconLayout: 'default#image',
                iconImageHref: placemark,
                iconImageSize: [23, 36]
            });
        objectManager.clusters.options.set({
            clusterIconLayout: 'default#imageWithContent',
            clusterIconImageHref: cluster,
            clusterIconImageSize: [46, 46],
            clusterIconImageOffset: [-23, -23],
            clusterIconContentLayout: MyIconContentLayout,
            clusterHideIconOnBalloonOpen: false,
            clusterDisableClickZoom: false
        });
        this.myMap.geoObjects.add(objectManager);
        this.myMap.behaviors.disable('scrollZoom');
        let center;
        let getGeocode = new window.ymaps.geocode('Moscow', {
            results: 1
        }).then(function (res) {
            center = res.geoObjects.get(0).geometry.getCoordinates();

            this.myMap.setCenter(center);
        });
        let resultingObjects = data.map(async (item, index) => {
            console.log(item)
            return {
                type: 'Feature',
                id: index,
                geometry: {
                    type: 'Point',
                    coordinates: [item[1], item[2]]
                },
                properties: {
                    balloonContent: [item[0]]
                }
            }
        })
        let resultingData
        Promise.all(resultingObjects).then((completed) => {
            console.log(completed)
            resultingData = {
                "type": "FeatureCollection",
                "features": completed
            }
            objectManager.add(resultingData);
        });
    }
    componentDidMount() {
        window.ymaps.ready(this.init);
    }

    render() {
        return (
            <section className="map oranged">
                <div className="container">
                    <h2>за призами в магазины</h2>
                    <div id="map"></div>
                </div>
            </section>
        )
    }
}
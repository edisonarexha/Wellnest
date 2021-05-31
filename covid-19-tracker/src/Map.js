import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken='pk.eyJ1IjoiZXJlc3RpbmExMiIsImEiOiJja3BiZGZyOGMwcm80MnZxeXU5a2s5dmF0In0.3Ic7HpmKgj6jBaxM1tTkbw';
class Mapp extends React.Component{

    constructor(props){
        super(props);
        this.state={
            lng:-60,
            lat:80,
            zoom: 5,

        }
    }
    componentDidMount(){
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            styler: 'mapbox://styles/mapbox/streets-v11', //defaulet
            center: [this.state.lng.this.state.lat],
            zoom: this.state.zoom
        })
    }
    render(){
        return (
            <div>
                <div ref={el => this.mapContainer=el} style={{width:'100%',height:'100vh'}}></div> 
              </div>
        )
    }
}
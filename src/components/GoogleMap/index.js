import React from 'react';
import GoogleMapReact from 'google-map-react';
import supercluster from 'points-cluster';

import Marker from '../Marker';
import ClusterMarker from '../ClusterMarker';

import mapStyles from './mapStyles.json';
import { Listvalue, susolvkaCoords } from '../../fakeData';
import vehiclelogo from './truck.png';
//import MapWrapper from './MapWrapper';
//import styled from 'styled-components';

const MAP = {
  defaultZoom: 4,
  defaultCenter: susolvkaCoords,
  options: {
    styles: mapStyles,
    maxZoom: 19,
  },
};


const MapWrapper = {
  position: 'relative',
  width: '100%',
  height: '100%'
};

/* var dataVals = Listvalue.then((response) => {
//   console.log(response);
 });
*/

class GoogleMap extends React.Component {
  debugger;
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  // eslint-disable-line react/prefer-stateless-function
  state = {
    mapOptions: {
      center: MAP.defaultCenter,
      zoom: MAP.defaultZoom,
    },
    clusters: [],
  };

 

  callLatlong = (a) => {
    console.log(Listvalue);
    const callLatlong = supercluster(a, {
     
      minZoom: 0,
      maxZoom: 16,
      radius: 100,
    });

    return callLatlong(this.state.mapOptions);
  
  }

  getClusters = (datas, responseVal) => {

    console.log(responseVal);
    console.log(datas);
    debugger;
    //console.log(dataVals);
    //console.log(Listvalue);
    //var constValue;
      const clusters = supercluster(responseVal, {
        minZoom: 1,
        maxZoom: 16,
        radius: 40,
      });
      return clusters(this.state.mapOptions);
    
  };

  createClusters = props => {
    //debugger
    Listvalue.then((response) => {
      this.setState({
        clusters: this.state.mapOptions.bounds
          ? this.getClusters(props, response).map(({ wx, wy, numPoints, points }) => ({
              lat: wy,
              lng: wx,
              numPoints,
              points,
            }))
          : [],
      });
    }).catch((err)=>{
      console.error(err);
    });
    
  };

  handleMapChange = ({ center, zoom, bounds }) => {
    //debugger
    this.setState(
      {
        mapOptions: {
          center,
          zoom,
          bounds,
        },
      },
      () => {
        this.createClusters(this.props);
      }
    );
  };

  render() {
//    debugger;
    return (
      <div style={MapWrapper}>
        <GoogleMapReact defaultZoom={MAP.defaultZoom} defaultCenter={MAP.defaultCenter} options={MAP.options} onChange={this.handleMapChange} bootstrapURLKeys={{ key: 'AIzaSyBFNzhbubIgQTKjyUNZZvaWQJ8qFaHAbmA' }} >
          {this.state.clusters.map(item => {
            debugger
            if (item.numPoints === 1) {
              return (
                <Marker 
                key={item.id}
                 icon={vehiclelogo} 
                 lat={item.points[0].lat}
                  lng={item.points[0].lng}  
     onClick={() => console.log("You clicked me!")} />
              );
            }

            return (
              <ClusterMarker key={item.id} lat={item.lat} lng={item.lng} points={item.points} />
            );
          })}
        </GoogleMapReact>
      </div>
    );
  }
}



export default GoogleMap;

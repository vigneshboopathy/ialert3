import React from 'react';
import GoogleMapReact from 'google-map-react';
import supercluster from 'points-cluster';

import Marker from '../Marker';
import ClusterMarker from '../ClusterMarker';

import mapStyles from './mapStyles.json';
import { Listvalue, susolvkaCoords } from '../../fakeData';
import vehiclelogo from './truck.png';
import MapWrapper from './MapWrapper';

const MAP = {
  defaultZoom: 4,
  defaultCenter: susolvkaCoords,
  options: {
    styles: mapStyles,
    maxZoom: 19,
  },
};

export class GoogleMap extends React.PureComponent {
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

  getClusters = () => {
    
    console.log(Listvalue);
    const clusters = supercluster(Listvalue, {
     
      minZoom: 1,
      maxZoom: 16,
      radius: 40,
    });

    return clusters(this.state.mapOptions);
  };

  createClusters = props => {
    //debugger
    this.setState({
      clusters: this.state.mapOptions.bounds
        ? this.getClusters(props).map(({ wx, wy, numPoints, points }) => ({
            lat: wy,
            lng: wx,
            numPoints,
            points,
          }))
        : [],
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
    //debugger;
    return (
      <MapWrapper>
        <GoogleMapReact
          defaultZoom={MAP.defaultZoom}
          defaultCenter={MAP.defaultCenter}
          options={MAP.options}
          onChange={this.handleMapChange}
          bootstrapURLKeys={{ key: 'AIzaSyBFNzhbubIgQTKjyUNZZvaWQJ8qFaHAbmA' }}
        >
          {this.state.clusters.map(item => {
            //debugger
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
              <ClusterMarker
                key={item.id}
                lat={item.lat}
                lng={item.lng}
                points={item.points}
              />
            );
          })}
        </GoogleMapReact>
      </MapWrapper>
    );
  }
}

export default GoogleMap;

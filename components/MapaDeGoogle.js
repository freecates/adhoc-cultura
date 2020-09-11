import {
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

const GET_DIRECTIONS = "https://www.google.com/maps/dir/?api=1&destination=";

const SimpleMapExampleGoogleMap = withGoogleMap(props => {
  console.log("here new props are used", props);
  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={new google.maps.LatLng(props.lat, props.lng)}
    >
      <Marker position={new google.maps.LatLng(props.lat, props.lng)}>
        <InfoWindow>
          <div>
            <strong>{props.name}</strong>
            <br />
            {props.address},<br />
            {props.code} {props.city}
            <br />T. <a href={"tel:" + props.tel}>{props.tel}</a>
            <br />
            <a href={"mailto:" + props.mail}>{props.mail}</a>
            <br />
            <a href={GET_DIRECTIONS + props.lat + "," + props.lng}>
              <strong>Com arribar</strong>
            </a>
          </div>
        </InfoWindow>
      </Marker>
    </GoogleMap>
  );
});

class MapaDeGoogle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      lat: this.props.lat,
      lng: this.props.lng,
      address: this.props.address,
      code: this.props.code,
      city: this.props.city,
      tel: this.props.tel,
      mail: this.props.mail
    };
  }

  render() {
    console.log("New props ", this.props);

    return (
      <SimpleMapExampleGoogleMap
        name={this.state.name}
        lat={this.state.lat}
        lng={this.state.lng}
        address={this.state.address}
        code={this.state.code}
        city={this.state.city}
        tel={this.state.tel}
        mail={this.state.mail}
        containerElement={
          <div style={{ height: `500px`, marginBottom: `2em` }} />
        }
        mapElement={<div style={{ height: `500px`, marginBottom: `2em` }} />}
      />
    );
  }
}
export default MapaDeGoogle;

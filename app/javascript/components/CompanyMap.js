import React, {useState} from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import styles from "../styles/CompanyMap";

const CompanyMap = ({ companies }) => {
  const [latitude, setLatitude] = useState(39.0997);
  const [longitude, setLongitude] = useState(-94.5786);
  const [zoom, setZoom] = useState(4);

  const handleChangeZoom = (e) => {
    const intZoom = parseInt(e.target.value, 10);
    if (intZoom > 0) {
      setZoom(intZoom);
    } else {
      console.debug("Invalid zoom: ", e.target.value);
    }
  }

  const handleChangePosition = (setter, e) => {
    const floatPosition = parseFloat(e.target.value, 10);
    if (isNaN(floatPosition)) {
      console.debug("Invalid position: ", e.target.value)
    } else {
      setter(floatPosition)
    }
  }

  return (
    <div className={styles.CompanyMap}>
      <input
        type="number"
        placeholder="Zoom"
        value={zoom}
        onChange={handleChangeZoom}
      />
      <input
        type="number"
        placeholder="Latitude"
        value={latitude}
        onChange={handleChangePosition.bind(null, setLatitude)}
      />
      <input
        type="number"
        placeholder="Longitude"
        value={longitude}
        onChange={handleChangePosition.bind(null, setLongitude)}
      />
      <Map
        center={[latitude, longitude]}
        zoom={zoom}
        style={{ height: "400px", width: "600px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {companies.map(company => {
          return (
            <Marker
              key={`marker-${company.id}`}
              position={[company.latitude, company.longitude]}
            >
              <Popup>{company.name}</Popup>
            </Marker>
          );
        })}
      </Map>
    </div>
  );
};

export default CompanyMap;

// filepath: /home/ivahu/niva/digitunnelrens-site/src/components/Map.tsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const position: LatLngExpression = [59.907019869321616, 10.793361107609561];
  return (
    <div className="map-container">
      <MapContainer center={position} zoom={13} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[59.907019869321616, 10.793361107609561]}>
          <Popup>
            Vålerengtunnelen
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;

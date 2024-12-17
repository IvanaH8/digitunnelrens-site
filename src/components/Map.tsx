// filepath: /home/ivahu/niva/digitunnelrens-site/src/components/Map.tsx
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import markersData from '../data/dtr_tunnels.json';

interface MarkerData {
  latitude: number;
  longitude: number;
  name: string;
}

interface MapProps {
  onMarkerClick: (markerName: string) => void;
}

const Map: React.FC<MapProps> = ({ onMarkerClick }) => {
  const position: LatLngExpression = [59.907019869321616, 10.793361107609561];
  const [markers, setMarkers] = useState<MarkerData[]>([]);

  useEffect(() => {
    setMarkers(markersData.map(marker => ({
      latitude: marker.latitude,
      longitude: marker.longitude,
      name: marker.tunnel
    })));
  }, []);

  return (
    <div className="map-container">
      <MapContainer center={position} zoom={13} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers.map((marker, index) => (
          <Marker key={index} position={[marker.latitude, marker.longitude]} eventHandlers={{
            click: () => {
              onMarkerClick(marker.name);
            },
          }}>
            <Popup>{marker.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;

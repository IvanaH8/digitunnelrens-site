import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Papa from 'papaparse';

interface MarkerData {
  latitude: number;
  longitude: number;
  tunnel: string;
}

const Map = () => {
  const [markers, setMarkers] = useState<MarkerData[]>([]);

  useEffect(() => {
    fetch('/dtr_tunnels.csv')
      .then(response => response.text())
      .then(csvText => {
        Papa.parse<MarkerData>(csvText, {
          header: true,
          complete: (results) => {
            const data = results.data as MarkerData[];
            setMarkers(data);
          },
        });
      });
  }, []);

  return (
    <div className="map-container">
      <MapContainer center={[59.907019869321616, 10.793361107609561]} zoom={13} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers.map((marker, index) => (
          <Marker key={index} position={[marker.latitude, marker.longitude]}>
            <Popup>{marker.tunnel}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;

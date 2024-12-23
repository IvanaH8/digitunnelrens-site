import './App.css'
import Map from './components/Map'
import 'leaflet/dist/leaflet.css'
import { useState } from 'react'

function App() {
  const [iframeSrc, setIframeSrc] = useState("https://superset.p.niva.no/superset/dashboard/digitunnelrens/?standalone=3");

  const handleMarkerClick = (markerName: string) => {
    setIframeSrc(`https://superset.p.niva.no/superset/dashboard/digitunnelrens/?standalone=3&native_filters=(NATIVE_FILTER-pAv3D0gUAH:(__cache:(label:%27${encodeURIComponent(markerName)}%27,validateStatus:!f,value:!(%27${encodeURIComponent(markerName)}%27)),extraFormData:(filters:!((col:tunnel,op:IN,val:!(%27${encodeURIComponent(markerName)}%27)))),filterState:(label:%27${encodeURIComponent(markerName)}%27,validateStatus:!f,value:!(%27${encodeURIComponent(markerName)}%27)),id:NATIVE_FILTER-pAv3D0gUAH,ownState:()))`);
  };

  return (
    <>
      <div className="app-container">
        <div className="header-container">
          <a href="https://www.vegvesen.no/">
            <img className='sv-logo' src="https://www.vegvesen.no/globalassets/om-oss/om-organisasjonen/profil/vegvesen-logo-farger-pos-rgb.png?width=1889&height=989&v=49935d" alt="MIljødirektoratet logo"
              width="200px" />
          </a>
          <a href="https://superset.p.niva.no/superset/dashboard/digitunnelrens/" className="header-title">
            <h1>
              DigiTunnelRens<br />
              <span className="sub-header">Digitalisering av miljøovervåking i tunnel</span>
            </h1>
          </a>
          <div className="logo-container">
            <div className="small-logos">
              <a href="https://www.niva.no/">
                <img className='niva-logo' src="https://www.niva.no/en/presserom/_/attachment/inline/a6ee9b58-85d7-429b-995a-bc45801608a6:9e59a297b8a5362cf6aac698f0c44e37303e7831/NIVA_Prim%C3%A6rlogo_DarkBlue_RGB.png" alt="niva logo" />
              </a>
              <a href="https://www.nilu.no/">
                <img className='nilu-logo' src="https://nilu.no/wp-content/uploads/2023/12/nilu-logo-seagreen-rgb-300px.png" alt="nilu logo" />
              </a>
              <a href="https://www.ife.no/">
                <img className='ife-logo' src="https://storage.googleapis.com/test-image-langtjern/IFE-Logomark-PNG-LightBG.png" alt="ife logo" />
              </a>
            </div>
          </div>
        </div>
        <div className="map-wrapper">
          <Map onMarkerClick={handleMarkerClick} />
        </div>
        <div className="iframe-container">
          <iframe width="100%" height="100%" seamless src={iframeSrc}>Not supported</iframe>
        </div>
      </div>
    </>
  )
}

export default App

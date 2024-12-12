import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://www.miljodirektoratet.no/"><img className='md-logo' src="https://imgur.com/pLJchBH.png" alt="MIljødirektoratet logo" /></a>
        <a href="https://www.mikronor-data.no"><h1  > DigiTunnelRens Dashboard</h1></a>
        <a href="https://www.niva.no/"><img src="https://www.niva.no/_/asset/no.niva.app:000001841ea0c6e0/images/logo-no.svg" alt="niva logo" /></a>
        <div >
          <iframe width="100%" height="100%" seamless src="https://superset.p.niva.no/superset/dashboard/mikronor-data-1/?standalone=3">Not supported</iframe>
        </div>
      </div>
    </>
  )
}

export default App

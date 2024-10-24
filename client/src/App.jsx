import MyNavBar from './navbar.jsx'
import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios"
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
  MapControl,
  ControlPosition
} from '@vis.gl/react-google-maps';


function App() {
  const [locations, setLocations] = useState([]);
  
  const fetchAPI = async () => {
    const response = await axios.get("http://127.0.0.1:8080/api/locations");// follow this link and will show json of locations
    console.log(response.data.aggie_express); // if you go into inspect and see the console log itll show this
    setLocations(response.data.location);
  };

  useEffect(() => {
    fetchAPI();
  }, []);
  
  const position = { lat: 30.6097085, lng: -96.3538729 }; // cstat area
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(16); // initialize zoom variable useState is react 'hook' that 
  
  return ( 
    <>
    <MyNavBar/>     {/* NavBar wrapper from import on the top, (wrapper is a react component) */}
    <APIProvider apiKey={'AIzaSyCG726Rj10Q_Oq4OT_FgF0HStvJ0gLT2Tk'}>
      <div className='map-container'> 
        <Map 
        zoom={zoom}
        onZoomChanged={ev => setZoom(ev.detail.zoom)} // allows user to use zoom button seen in bottom right corner
        defaultCenter={position} 
        mapId={"2811d00f86aaab58"} // google map id
        gestureHandling={'greedy'} // allows it to be moveable
        >
          <AdvancedMarker position={position} onClick={() => setOpen(true)}>
            <Pin
              background={"red"}
              glyphColor={"grey"}
            />
          </AdvancedMarker>
          {open && (
            <InfoWindow position={position} onCloseClick={() => setOpen(false)}> {/* if you click on marker allow popup window */}
              <p>Im here</p>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
    </>
  )
}

export default App

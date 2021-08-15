import React,{useState} from 'react';
import Form from '../form/form';
import Weather from '../weather/weather';
import '../app/app.css'

function App  () {
    const [state,setState] = useState({});
    const [city,setCity] = useState('')
    return (
        <div className="weather">
            <div className="weather_block">
              <Form  setState={setState} city={city} setCity={setCity}/>
               
               {Object.keys(state).length === 0 ? '' : <Weather className='weather' setState={setState} state={state}/> } 
            </div>
        </div>
    );
};

export default App;
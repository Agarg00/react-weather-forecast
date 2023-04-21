import React,{ useState } from "react";
import Cards from '../Cards/Cards';
import CardList from "../Cards/CardList";
import Scroll from "../Scroll/Scroll";
import './Home.css';
import icon from './location.png'
import search from './search.png'
import ReactjsAlert from "reactjs-alert";

const Home = () => {
    const [city, setCity] = useState('')
    const [data,setData] = useState([])
    const [curr, setCurr] = useState([])
    const [lat, setLat] = useState(null)
    const [lang, setLang] = useState(null)
    const[err,setErr] = useState(null);
    const [status, setStatus] = useState(true);
    
    const getUserLoc = () => {
        if(!navigator.geolocation){
        alert('location not enabled')
        }
        else {
        navigator.geolocation.getCurrentPosition((pos) => {
            setLat(pos.coords.latitude)
            setLang(pos.coords.longitude)
        },
        (error) =>{
            alert('not good')
        });
        }
    }

    const getWeather = () =>{
        getUserLoc();
        if(lat != null && lang !=null){

            //for forcast
            fetch('http://api.openweathermap.org/data/2.5/forecast?lat='+ lat+ '&lon='+lang+'&appid=a5982e3dd317dd5a5a092827e148510c&units=metric')
            .then(response => response.json())
            .then(res => setData(res))
            .catch(e => setErr('Inavlid City'))

            // for current weather
            fetch('http://api.openweathermap.org/data/2.5/weather?lat='+ lat+ '&lon='+lang+'&appid=a5982e3dd317dd5a5a092827e148510c&units=metric')
            .then(response => response.json())
            .then((res) => setCurr(res))
            .catch(e => setErr('Inavlid City'))
        }
    }

    const getWeatherData = async() =>{
        if(city===''){
           alert('Enter a city name')
        }
        else {

            // forecast
            fetch('http://api.openweathermap.org/data/2.5/forecast?q='+ city + '&appid=a5982e3dd317dd5a5a092827e148510c&units=metric')
            .then(response => response.json())
            .then((res) => setData(res))
            .catch(e => setErr('Inavlid City'))

             // current
            fetch('http://api.openweathermap.org/data/2.5/weather?q='+ city + '&appid=a5982e3dd317dd5a5a092827e148510c&units=metric')
            .then(response => response.json())
            .then((res) => setCurr(res))
            .catch(e => setErr('Inavlid City'))
        }
        setCity('')
    }
    
    const onEnterKeyDown = (event) =>{
        if (event.keyCode === 13 ){
            getWeatherData();
        }
    }

    return (
        <div className="mt2">
            <div className="br2 ba b--black-40 w-25-l mw6 shadow-5 center">
                <button 
                    className="mr1 b br2 grow shadow-5 pointer" 
                    onClick={getWeather}
                >
                    <img alt="locate" src={icon} />
                </button>

                <input 
                    className="br2 bg-light-blue shadow-5 w-60"
                    name="city"
                    value={city}  
                    placeholder="enter city name..." 
                    onChange={e => setCity(e.target.value)}
                    onKeyDown={onEnterKeyDown}
                />

                <button 
                    className="ml1 ba br2 grow shadow-5 pointer" 
                    onClick={getWeatherData} 
                >
                    <img alt="locate" src={search} />
                </button>
            </div>
            
            {// eslint-disable-next-line
                data['cod'] !=200 
                ? // eslint-disable-next-line
                data['cod'] == 404 
                ? err 
                : <h1> <br /> loading </h1>
                : <div className="mt2">
                    <Scroll>
                        <Cards data={data} curr={curr}/>
                    </Scroll>
                    <Scroll>
                        <CardList data={data}/>
                    </Scroll>
                </div>
            }
            <ReactjsAlert
                status={status}
                type="warning"
                title="The minimum and maximum tempratures may have same values as current temprature So please don't mind it"
                Close={() => setStatus(false)}
            />
        </div>
    );
}

export default Home;
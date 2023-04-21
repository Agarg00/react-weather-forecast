import React from "react";
import './cards.css';
import humidity from './img/humidity.png';
import air from './img/air.png';
import wind from './img/anemometer.png';
import gust from './img/gust.png';
import visibility from './img/visibility.png';


const compass = require('cardinal-direction');
const Card = (props) => {
    return (
        <div>
            { // eslint-disable-next-line
                props.check['cod'] != 200 
            ? 'loading....' :
            <div>
                <div className="back ba b--dark-gray bw1 br3 pa3 ma2 mr6 w-90 grow shadow-5">
                    <div className="">
                        
                        <h2>{''+new Date((props.i['dt_txt']).slice(0,10)).toDateString()}</h2>
                        
                        <p>{''+new Date((props.i['dt_txt'])).toLocaleTimeString()}</p>
                        
                        <img alt='icon' src={`https://openweathermap.org/img/wn/${props.i['weather'][0].icon}@2x.png`} />
                        
                        <p className="f2 lh-copy black ma0">{props.i['main']['temp'] + '°C'}</p>
                        
                        <p>{'Feels like : ' + props.i['main']['feels_like'] + '°C'}</p>
                        
                        <p>{props.i['weather'][0].main + ', ' + props.i['weather'][0].description}</p>
                        
                        <p>{props.i['main']['temp_min'] + '°C'} - {props.i['main']['temp_max'] + '°C'}</p>
                        
                        <div className="tl ma2">
                            
                            <p>{'Clouds : ' + props.i['clouds']['all'] + '%'}</p>
                            
                            <p>
                                <img className="humi" alt="humidity" src={humidity} />
                                {' : ' + props.i['main']['humidity'] + '%'}
                            </p>

                            <p>
                                <img className="visi" alt="visi" src={visibility} />
                                {' : ' + (props.i['visibility'])/1000 + 'Km'}
                            </p>

                            <p>
                                <img className="air" alt="air-p" src={air} />
                                {' : ' + ((props.i['main']['pressure']) * 0.000987 ).toFixed(3)+ ' atm'}
                            </p>

                            <p>
                                <img className="wind" alt="wind" src={wind} />
                                {' : ' + (props.i['wind']['speed'] * 3.6).toFixed(3) + 'Km/h'} {compass.cardinalFromDegree(props.i['wind']['deg'])}
                            </p>
                            
                            <p>
                                <img className="gust" alt="gust" src={gust} />
                                {' : ' + (props.i['wind']['gust'] * 3.6).toFixed(3) + 'Km/h'}
                            </p>

                        </div>
                    </div>
                </div> 
            </div>
            }
        </div>
    );
}

export default Card;
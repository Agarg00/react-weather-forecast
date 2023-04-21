import React from "react";
import sunrise from './img/sunrise.png';
import sunset from './img/sunset.png';
import pop from './img/people-together.png';
import locate from './img/location.png';
import humidity from './img/humidity.png';
import air from './img/air.png';
import wind from './img/anemometer.png';
import gust from './img/gust.png';
import visibility from './img/visibility.png';
import cloud from './img/cloud.png';

const compass = require('cardinal-direction');

const Cards = (props) => {
    return (
        <div>
            { // eslint-disable-next-line
                props.data['cod'] != 200 
                ? 'loading....' 
                :<div className="mt2" style={{display:'flex', justifyContent:'space-between'}}>
                    <div className="card ba b--dark-gray bw1 br3 h-75 pa3 ma2 grow shadow-5" >
                        <h2>{props.data['city']['name'] + ', ' + props.data['city']['country']}</h2>
                        <p>
                            <img className="loc" alt="coords" src={locate} />
                            {' : ' + props.data['city']['coord'].lat}, { props.data['city']['coord'].lon}
                        </p>
                        <p>{'City ID: ' + props.data['city']['id']}</p>
                        <p>
                            <img className="pop" alt="population" src={pop} />
                            {' : ' + props.data['city']['population']}</p>
                        <p>
                            <img className="sun" alt="sunrise" src={sunrise} />
                            {' : ' + new Date((props.data['city']['sunrise'] + props.data['city']['timezone']) * 1000).toUTCString().slice(17,25)}
                        </p>
                        <p>
                            <img className="sun" alt="sunrise" src={sunset} />
                            {' : ' + new Date((props.data['city']['sunset'] + props.data['city']['timezone']) * 1000).toUTCString().slice(17,25)}
                        </p>
                    </div>
                    <div style={{display:'flex'}}>
                        <div className="card grow tc ba b--dark-gray bw1 br3 pa3 ma2 shadow-5">
                        
                            <h2>{'Current Weather'}</h2>
                                
                            <p>{'' + new Date((props.curr['dt'] + props.data['city']['timezone']) * 1000).toUTCString().slice(0,25)}</p>
                                
                            <img alt='icon'  src={`https://openweathermap.org/img/wn/${props.curr['weather'][0].icon}@2x.png`} />
                                
                            <p className="f2 lh-copy black ma0">{props.curr['main']['temp'] + '°C'}</p>
                                
                            <p >{'Feels Like : ' + props.curr['main']['feels_like'] + '°C'}</p>
                                
                            <p>{props.curr['weather'][0].main + ', ' + props.curr['weather'][0].description}</p>

                        </div>

                        <div className="card grow tc ba b--dark-gray bw1 br3 pa3 ma2 shadow-5">
                                
                            <p>{props.curr['main']['temp_min'] + '°C'} - {props.curr['main']['temp_max'] + '°C'}</p>
                                
                            <p>
                                <img className="cloud" alt="cloud" src={cloud} />
                                {' : ' + props.curr['clouds']['all'] + '%'}
                            </p>

                            <p>
                                <img className="humi" alt="humidity" src={humidity} />
                                {' : ' + props.curr['main']['humidity'] + '%'}
                            </p>

                            <p>
                                <img className="visi" alt="visi" src={visibility} />
                                {' : ' + (props.curr['visibility'])/1000 + 'Km'}
                            </p>

                            <p>
                                <img className="air" alt="air-p" src={air} />
                                {' : ' + ((props.curr['main']['pressure']) * 0.000987).toFixed(3) + ' atm'}
                            </p>

                            <p>
                                <img className="wind" alt="wind" src={wind} />
                                {' : ' + (props.curr['wind']['speed'] * 3.6).toFixed(3) + 'Km/h'} {compass.cardinalFromDegree(props.curr['wind']['deg'])}
                            </p>

                            <p>
                                <img className="gust" alt="gust" src={gust} />
                                {' : ' + (props.curr['wind']['gust'] * 3.6).toFixed(3) + 'Km/h'}
                            </p>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Cards;
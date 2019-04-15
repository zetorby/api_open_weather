import React from 'react';

import WeatherItemTitle from './weatherItemTitle';
import WeatherItemDate from './weatherItemDate';
import WeatherItemIcon from './weatherItemIcon';
import WeatherItemTemperatureCelsius from './weatherItemTemperatureCelsius';
import WeatherItemHumidity from './weatherItemHumidity';
import WeatherItemWind from './weatherItemWind';

import style from './weatherItem.module.css'
import WeatherItemTemperatureFahrenheit from './weatherItemTemperatureFahrenheit';
import ButtonToggleTemperature from './buttonToggleTemperature';

class WeatherItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isCelsius: true
        }
    }

    handleToggleTemperature = () => {
        this.setState({isCelsius: !this.state.isCelsius})
    }

    render() {
        const {data} = this.props;
        return (
            <div className={style.wrapper}>
                <div className={style.top}>
                    <WeatherItemTitle data={data.name}/>
                    <WeatherItemDate data={data.dt}/>
                    <ButtonToggleTemperature state={this.state.isCelsius}
                                             data={data.main}
                                             handleToggleTemperature={this.handleToggleTemperature}/>
                </div>
                <div className={style.mid}>
                    <div className={style.left}>
                        <WeatherItemIcon data={data.weather}/>
                        {this.state.isCelsius ? <WeatherItemTemperatureCelsius data={data.main}/> :
                            <WeatherItemTemperatureFahrenheit data={data.main}/>}
                    </div>
                    <div className={style.right}>
                        <WeatherItemHumidity data={data.main}/>
                        <WeatherItemWind data={data.wind}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default WeatherItem;
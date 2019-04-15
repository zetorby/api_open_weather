import React, {Component} from 'react';

import Header from '../header';
import WeatherListContainer from '../../container/WeatherListContainer';
import style from './app.module.css';



class App extends Component {

    render() {
        return (
            <React.Fragment>
                <Header/>
                <div className={style.wrapper}>
                    <WeatherListContainer/>
                </div>
            </React.Fragment>
        );
    }
}

export default App;

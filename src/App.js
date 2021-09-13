import React from 'react';
import classes from './App.module.css'
import MainPageContainer from './components/MainPage/MainPageContainer';
import * as data from './data/data'

const App = () => {
  return (
    <div className={classes.appWrapper}>
      <header>
        <h1>Тестовое задание</h1>
      </header>
      <MainPageContainer data={data} /> 
    </div>
  );
}

export default App;
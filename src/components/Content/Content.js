import React from 'react';
import './Content.scss';
import TeddyForm from "./TeddyForm/TeddyForm";

const Content = () => {
    return (
        <div className='content'>
            <h1 className="content__header">Бесплатный Календарь-Раскраска для Вашего маленького Героя!</h1>
            <h2 className="content__second-header">Ваш маленький ребенок будет часами наслаждаться раскрашивая наш календарь-раскраску на 2020 год!</h2>
            <div className="content__calendar"></div>
            <TeddyForm/>
        </div>
    )
}

export default Content;
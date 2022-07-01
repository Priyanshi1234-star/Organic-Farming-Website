import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Advice Of The Experts!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='pics/organic manure.png'
              text='DIY Organic Fertilizers'
              label='DIY'
              path='/blogitem/1'
            />
            <CardItem
              src='pics/card2.png'
              text='What is Organic Farming in UttraKhand'
              label='Informative'
              path='/blogitem/2'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='pics/card3.png'
              text='Advantages of Organic farming'
              label='Informative'
              path='/blogitem/3'
            />
            <CardItem
              src='pics/card4.png'
              text='Types Of Organic Farming'
              label='Informative'
              path='/blogitem/4'
            />
            <CardItem
              src='pics/card5.png'
              text='Government and Organic farming'
              label='Schemes'
              path='/blogitem/5'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

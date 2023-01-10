import React from 'react';

import './scss/app.scss';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

function App() {
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">Пицца</h2>
          <div class="content__items">
            <PizzaBlock title="Мексиканская" price="400" />
            <PizzaBlock title="Чизбургер-пицца" price="450" />
            <PizzaBlock />
            <PizzaBlock />
            <PizzaBlock />
            <PizzaBlock />
            <PizzaBlock />
            <PizzaBlock />
          </div>

          <h2 class="content__title">Роллы</h2>
          <div class="content__items">
            <PizzaBlock title="Мексиканская" price="400" />
            <PizzaBlock title="Чизбургер-пицца" price="450" />
            <PizzaBlock />
            <PizzaBlock />
            <PizzaBlock />
            <PizzaBlock />
            <PizzaBlock />
            <PizzaBlock />
          </div>

          <h2 class="content__title">Сеты роллов</h2>
          <div class="content__items">
            <PizzaBlock title="Мексиканская" price="400" />
            <PizzaBlock title="Чизбургер-пицца" price="450" />
            <PizzaBlock />
            <PizzaBlock />
          </div>

          <h2 class="content__title">Напитки</h2>
          <div class="content__items">
            <PizzaBlock title="Мексиканская" price="400" />
            <PizzaBlock title="Чизбургер-пицца" price="450" />
            <PizzaBlock />
            <PizzaBlock />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

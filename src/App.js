import React from 'react';
import { Header } from './Header';
import { Body } from './Body';
import './App.css';

export class App extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <Body />
      </div>
    )
  }
}
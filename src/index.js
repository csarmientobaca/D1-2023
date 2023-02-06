import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Button from './components/Button';
import 'bootstrap/dist/css/bootstrap.css';
import ImageComponent from './components/ImageComponent';
import Container from './components/Container';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Container class="container" />
    <ImageComponent className="rounded float-right m-2" src="https://cdn.thisiswhyimbroke.com/thumb/hats-for-cats_400x333.jpg" />
    <Button className="btn btn-primary col-3 m-1" name="click" />
    <Button className="btn btn-danger col-3 m-1" name="me" />

  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Button from './components/Button';
import 'bootstrap/dist/css/bootstrap.css';
import ImageComponent from './components/ImageComponent';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ImageComponent src="https://cdn.thisiswhyimbroke.com/thumb/hats-for-cats_400x333.jpg" />
    <Button className="btn btn-primary col-5" name="click" />
    <Button className="btn btn-danger col-5" name="me" />

  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import { useEffect } from 'react';
import './App.css';
import RouteConfig from './routes/RouteConfig';
import { BrowserRouter as Router } from 'react-router-dom';
import $ from 'jquery';

function App() {
  useEffect(() => {
    const lang = localStorage.getItem('lang') || 'en';
    $('html').attr('lang', lang);
    localStorage.setItem('lang', lang);
  }, []);
  return (
    <>
      <Router>
        <RouteConfig />
      </Router>
    </>
  );
}

export default App;

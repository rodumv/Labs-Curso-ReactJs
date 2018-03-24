import React from 'react';
import Reactdom from 'react-dom';
import Routes from './routes'
import {BrowserRouter as Router} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

Reactdom.render(
        <Router>    
            <Routes/>
        </Router>, document.getElementById('root'));
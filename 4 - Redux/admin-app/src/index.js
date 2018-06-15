import React from 'react';
import Reactdom from 'react-dom';
import Routes from './routes'
import {BrowserRouter as Router} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.css'
import './index.css';
import configureStore from './store/configureStore'
import {Provider} from 'react-redux' 
import CourseService from './api/CourseService'

const defaultState = {
    courses : CourseService.Courses
}
const store = configureStore(defaultState);

Reactdom.render(
    <Provider store={store} >
    <Router>    
        <Routes/>
    </Router>
    </Provider>, document.getElementById('root'));
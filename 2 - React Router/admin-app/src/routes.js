import React from 'react'
import {Route, Switch} from 'react-router-dom'
import App from './App'
import Home from './components/home'
import About from './components/about'
import CourseList from './components/course'
import Gallery from './components/gallery'
import NotFound from './components/NotFound/404'
import Header from './components/header'
const Routes = () => {

        return(
            <App>
                <Header/>
                <Switch>
                <Route   path="/home" component={Home}/>      
                <Route path="/about" component={About} />
                <Route path="/courses" component={CourseList} />
                <Route  path="/gallery" component={Gallery}/>
                <Route  exact path="/" component={Home}/>      
                <Route component={NotFound} />
                </Switch>
            </App>
        )
    
}

export default Routes;
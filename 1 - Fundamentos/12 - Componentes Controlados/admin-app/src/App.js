import React from 'react'
import About from './components/about'
import CourseList from './components/course'
class App extends React.Component{
  render(){
    let skills =[{"id": 1, "name": "sql"}, {"id": 2, "name": "c#"}, {"id": 3, "name": "javascript"}];
    let courses =[{"id": 1, "name": "ReactJs"}, {"id": 2, "name": "AngularJs"}, {"id": 3, "name": "VueJs"}];
    
    return( <div className="container">
            <div className="jumbotron">
              <h1>Mi lista de Cursos</h1>
            </div>
            <CourseList courses={courses}/>   
          </div>
          );    
  }
} 
export default App;


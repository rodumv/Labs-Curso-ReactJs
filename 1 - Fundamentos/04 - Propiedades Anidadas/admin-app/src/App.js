import React from 'react'
import About from './components/about'
import CourseList from './components/course'
class App extends React.Component{
  render(){
    let skills =[{"id": 1, "name": "sql"}, {"id": 2, "name": "c#"}, {"id": 3, "name": "javascript"}];
    return(<About name={"Rodrigo"} age={32} profession={"Ingeniero"} skills={skills}>
            <CourseList/>
            <p>www.mypage.com</p>
          </About>);    
  }
}
export default App;


import React from 'react'
import CourseService from '../../api/CourseService'
import {NavLink} from 'react-router-dom'

const CreateCourse = () => {
    return(
        <div className="pull-right">
           <NavLink to="/nuevoCurso" className="btn btn-default">Crear Curso </NavLink>
        </div>
    )
}

class CourseItem extends React.Component{
    render(){
        let buttonClass = this.props.active ? "btn btn-success" : "btn btn-danger";
        let value = this.props.active ? "Activo" : "Inactivo";
        return(
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.author}</td>
                <td>
                    <button type="button" className={buttonClass} onClick={this.props.setActive.bind(this)} value={value}>{value}</button> 
                </td>
            </tr>
        )
    }
}
class Search extends React.Component{
    render(){
        return(
        <div className="row">
            <div className="col-md-10">
                <input type="text" onChange={this.props.setValue} value={this.props.search} className="form-control" />
            </div>
            <div className="col-md-2">
                <input type="checkbox"  value="Solo Activos" onChange={this.props.setFilter}/> <span>Solo Activos</span>
            </div>
        </div>    
        );
    }
}

class CourseTable extends React.Component{
    render(){
        return(
        <table className="table" width="70%">   
            <thead>
                <tr>
                <th>Nombre</th>
                <th>Autor</th>
                <th>Estado</th>
            </tr>
             </thead>
            <tbody>
                {this.props.filteredSearch.map((item) => <CourseItem key={item.id} name={item.name} author={item.author} setActive={(e) => this.props.setActive(item.id, e)} active={item.active} />)}
            </tbody>
        </table>
        );
    }
}

  
class CourseList extends React.Component{
    constructor(props){
        super();
        this.state = {
            search: "", 
            courses: CourseService.Courses,
            searchOnlyActive: false

        }
    }
    setValue(event){
        this.setState({search: event.target.value});
    }
    setActive(id, event){
       const items = this.state.courses;
       items.find((item) => item.id === id).active = event.target.value === "Inactivo";
       this.setState({items});

       console.log(this.state.courses);
    }
    setFilter(event){
         this.setState({searchOnlyActive: event.target.checked});
    }
    render(){
        let filteredSearch = this.state.courses.filter((course) => course.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1);
        filteredSearch = filteredSearch.filter((course) => this.state.searchOnlyActive ? course.active : true)

        return(
            <div>
                <Search search={this.state.search} setValue={this.setValue.bind(this)} setFilter={this.setFilter.bind(this)} />
                <br/>
                <CreateCourse />
                <CourseTable filteredSearch={filteredSearch} setActive={this.setActive.bind(this)} />
            </div>
        );
    }
}

export default CourseList;
import React from 'react'
import Input from '../common/Input'
import CourseService from '../../api/CourseService'
import {Redirect} from 'react-router-dom'
import Toastr from 'toastr'
class NewCourse extends React.Component{
    constructor(){
        super();
        this.state = {
            course : {
                id: "",
                name: "",
                author:"",
                active: true
            },
            fireRedirect:false,
            errors: {}
        }

    }
    handleInput(event){
        let value = event.target.value;
        let name = event.target.name;
        let course = this.state.course;
        course[name] = value;
        this.setState({course});

        console.log(this.state.course);

    }
    FormIsVald(){
        let isValid = true;
        let errors = this.state.errors;
        errors.name = "";
        errors.author = "";

        if(this.state.course.name.length === 0){
            errors.name = "El nombre es requerido";
            isValid = false;
        }

        if(this.state.course.author.length === 0){
            errors.author = "El author es requerido";
            isValid = false;
        }
        
        this.setState({errors});

        return isValid;
    }
    Save(event){
        event.preventDefault();

        if(!this.FormIsVald()){
            return;
        }

        CourseService.SaveCourse(this.state.course);
        this.setState({fireRedirect: true});
        Toastr.success("Curso ingresado correctamente");
    }
    render(){
        return(
            <form>
                <h1> Crear Curso </h1>
                <Input
                    name="name"
                    label="Nombre"
                    value={this.state.name}
                    onChange={this.handleInput.bind(this)}
                    error={this.state.errors.name}
                    />
                <Input
                    name="author"
                    label="Autor"
                    value={this.state.author}
                    onChange={this.handleInput.bind(this)}
                    error={this.state.errors.author}
                    />
              <input type="button" value="Guardar" onClick={this.Save.bind(this)}  className="btn btn-default" />        
              {this.state.fireRedirect && (
              <Redirect to="/courses" />
              )}
         </form>


        )
    }
}

export default NewCourse;
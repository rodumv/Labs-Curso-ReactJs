import React from 'react'

const CourseItem = (props) => {
    return(
        <li>{props.name} </li>
    )
}

class CourseList extends React.Component{
    constructor(){
        super();
        this.state = {
            search: ""
        }
    }

    setValue(event){
        this.setState({search: event.target.value});
    }
    render(){
        let col = this.props.courses.filter(
        (course) => course.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        );
        return(
            <div>
                <input type="text" onChange={this.setValue.bind(this)} value={this.state.search} className="form-control" />
                <br/>
                <ul>
                    {col.map((item) => <CourseItem key={item.id} name={item.name} />)}
                </ul>
            </div>
            
        );
    }
}

export default CourseList;
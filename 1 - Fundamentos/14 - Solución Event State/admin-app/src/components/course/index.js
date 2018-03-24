import React from 'react'

class CourseItem extends React.Component{
    render(){
        let buttonClass = this.props.active ? "btn btn-success" : "btn btn-danger";
        let value = this.props.active ? "Activo" : "Inactivo";
        return(
            <tr>
                <td>{this.props.name}</td>
                <td>
                    <button type="button" className={buttonClass} onClick={this.props.setActive.bind(this)} value={value}>{value}</button> 
                </td>
            </tr>
        )
    }
}
  
class CourseList extends React.Component{
    constructor(props){
        super();
        this.state = {
            search: "", 
            courses: props.courses,
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
        let col = this.state.courses.filter((course) => course.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1);
        col = col.filter((course) => this.state.searchOnlyActive ? course.active : true)

        return(
            <div>
                <div className="row">
                    <div className="col-md-10">
                        <input type="text" onChange={this.setValue.bind(this)} value={this.state.search} className="form-control" />
                    </div>
                    <div className="col-md-2">
                        <input type="checkbox"  value="Solo Activos" onChange={this.setFilter.bind(this)}/> <span>Solo Activos</span>
                    </div>
                </div>
                <br/>
                <table className="table" width="70%">   
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                {col.map((item) => <CourseItem key={item.id} name={item.name} setActive={this.setActive.bind(this, item.id)} active={item.active} />)}
            </tbody>
            </table>
            </div>
            
        );
    }
}

export default CourseList;
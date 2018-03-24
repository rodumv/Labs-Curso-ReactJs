import React from 'react'
import PropTypes from 'prop-types'
class About extends React.Component{
    render(){
        return(
            <div>
                <p>Nombre: {this.props.name}</p>
                <p>Edad: {this.props.age}</p>
                <p>Profesion: {this.props.profession}</p>
                <p>Conocimientos:  </p>
                    <ul>                    
                    {this.props.skills.map((item) => <li key={item.id}> {item.name} </li>)}
                    </ul>
                 <p>Mis Cursos:</p>   
                {this.props.children}                        
             </div>
    
        );
    }
}  

About.propTypes = {
    age : PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    skills: PropTypes.array.isRequired
}

export default About;
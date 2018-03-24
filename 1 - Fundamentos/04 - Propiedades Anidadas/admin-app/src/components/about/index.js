import React from 'react'

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

export default About;
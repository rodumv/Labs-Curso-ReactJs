import React from 'react'
import AboutService from '../../api/AboutService'
class About extends React.Component{
    render(){
        let aboutService = AboutService;
        return(
            <div>
                <p>Nombre: {aboutService.Name}</p>
                <p>Edad: {aboutService.Age}</p>
                <p>Profesion: {aboutService.Profession}</p>
                <p>Conocimientos:  </p>
                    <ul>                    
                    {aboutService.Skills.map((item) => <li key={item.id}> {item.name} </li>)}
                    </ul>
             </div>
    
        );
    }
}  

export default About;
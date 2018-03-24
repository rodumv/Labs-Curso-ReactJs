import React from 'react'
import PropTypes from 'prop-types'
class Input extends React.Component{
    render(){
        let wrapperClass = "form-group";
        if(this.props.error && this.props.error.length > 0){
            wrapperClass += " has-error";
        }
        
        return(
        <div className={wrapperClass}>
            <label htmlFor={this.props.name} className="control-label">{this.props.label}</label>
            <div className="field">
                <input type="text" 
                name={this.props.name} 
                className="form-control"
                onChange={this.props.onChange} 
                value={this.props.value} />
            </div>
            <div className="text-danger">{this.props.error} </div>
        </div>
        );
    }
}


Input.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string
}


export default Input;



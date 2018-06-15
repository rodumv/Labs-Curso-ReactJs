import NewCourse from '../components/course/newCourse'
import {connect} from 'react-redux';
import * as courseActions from '../actions/courseActions';


const mapDispatchToProps = dispatch => {
    return {
      Save: (e)  => {
        dispatch(courseActions.CreateCourse(e))
       }
    }
  }

function mapStateToProps(state, ownProps){
    return{
        courses: state.courses
    };
}   

const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(NewCourse);
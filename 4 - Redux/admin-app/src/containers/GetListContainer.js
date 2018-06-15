import CourseList from '../components/course/'
import {connect} from 'react-redux';

function mapStateToProps(state, ownProps){
    return{
        courses: state.courses
    };
}   

const connectedStateAndProps = connect(mapStateToProps);
export default connectedStateAndProps(CourseList);
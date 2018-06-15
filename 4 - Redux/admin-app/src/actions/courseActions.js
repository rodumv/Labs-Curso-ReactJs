import * as Constant from '../constants/CourseConstants'
export function CreateCourse (course) {
    debugger;
    return {
        type: Constant.CREATE_COURSE, course
        }
    }

export function GetCourses (course) {
    
    return {
    type: Constant.GETLIST_COURSE, payload: course
    }
}
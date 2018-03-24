let skills =[{"id": 1, "name": "sql"}, {"id": 2, "name": "c#"}, {"id": 3, "name": "javascript"}];
let courses = [
        {"id": 1, "name": "ReactJs",  'author':  'Rodrigo', "active": true}, 
        {"id": 2, "name": "AngularJs", 'author':  'Juan', "active": true}, 
        {"id": 3, "name": "VueJs", 'author':  'Pedro', "active": true}];

const CourseService = {
    Skills : skills,
    Courses: courses,
    SaveCourse: (singleCourse) => {
        singleCourse.id  = Math.floor((Math.random() * 100) +1);
        courses.push(singleCourse);
    }
}

export default CourseService;
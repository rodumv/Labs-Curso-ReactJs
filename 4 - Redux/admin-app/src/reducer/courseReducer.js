
export default  (state= [], action) => {
    debugger;
    switch(action.type){
        case "CREATE_COURSE":
    return [...state,  Object.assign({},  {
                id: Math.floor((Math.random() * 100) +1),
                name: action.course.name,   
                author: action.course.author, 
                active: true
            })];
        // Logic create course
        case "GETLIST_COURSE":
            return [...state, action.payload];
    // Logic create course
        default:
            return state;

    }
}   
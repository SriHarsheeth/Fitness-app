let initialstate={user:null};

let Reducer=(state=initialstate,action)=>
{
    switch(action.type)
    {
        case "add_user" : return {...state,user:action.payload};
        case "logout" : return {user:null};
        case "updatehealth" : return {...state,user:{...state.user,bmi:action.payload.bmi,health:action.payload.health}};
        default: return state
    }
}
export default Reducer
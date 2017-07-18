const INITIAL_STATE = {
    id: 0,
    ip: "",
    countryName: "",
    city: "",
    zipCode: "",
    position:{
        lat:"",
        lng:""
    }
};

export function userReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case 'FETCH_USER_LOCATION':
            return Object.assign({}, state,{
                ip: action.payload.ip,
                countryName: action.payload.country_name,
                city: action.payload.city,
                zipCode: action.payload.zip_code,
                position:{
                    lat:action.payload.latitude,
                    lng:action.payload.longitude
                }
            });
            
        case 'RESET_USER_LOCATION':
            return Object.assign({}, state, {
                ip: "",
                countryName: "",
                city: "",
                zipCode: "",
                position:{
                    lat:"",
                    lng:""
                }
            });
        default:
            return state;

    }
}
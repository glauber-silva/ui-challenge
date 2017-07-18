const INITIAL_STATE = {
    id: 1,
    ip: "",
    countryName: "",
    city: "",
    zipCode: "",
    position:{
        lat:"",
        lng:""
    }
};


export function hostReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case 'FETCH_HOST_LOCATION':
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
        case 'RESET_HOST_LOCATION':
            return state = INITIAL_STATE;
        default:
            return state;

    }
}
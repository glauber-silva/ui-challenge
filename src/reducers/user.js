const INITIAL_STATE = {
    id: 0,
    ip: "",
    countryName: "",
    city: "",
    zipCode: "",
    latitude: "",
    longitude: ""
};

export function userReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case 'FETCH_USER_LOCATION':
            return Object.assign({}, state,{
                id: action.payload.id,
                ip: action.payload.ip,
                countryName: action.payload.country_name,
                city: action.payload.city,
                zipCode: action.payload.zip_code,
                latitude: action.payload.latitude,
                longitude: action.payload.longitude
            });
        case 'RESET_USER_LOCATION':
            return Object.assign({}, state, {
                ip: "0.0.0.0",
                countryName: "",
                city: "",
                zipCode: "",
                latitude: "",
                longitude: ""
            });
        default:
            return state;

    }
}
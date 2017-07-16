const INITIAL_STATE = {
    id: 0,
    ip: "0.0.0.0",
    countryName: "",
    city: "",
    zipCode: "",
    latitude: "",
    longitude: ""
}

export function hostReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case 'FETCH_HOST_LOCATION':
            return {...state,
                id: action.payload.id,
                ip: action.payload.ip,
                countryName: action.payload.country_name,
                city: action.payload.city,
                zipCode: action.payload.zip_code,
                latitude: action.payload.latitude,
                longitude: action.payload.longitude
            }
        case 'RESET_HOST_LOCATION':
            return state = INITIAL_STATE
        default:
            return state

    }
}
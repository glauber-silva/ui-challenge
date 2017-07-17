import axios from 'axios';

const API_HOST = 'http://freegeoip.net/json/';

export function onSuccess(reducer, payload) { // needs to dispatch, so it is first argument
    return{
            type: reducer,
            payload
        };
}
export function onError(reducer, error) { // needs to dispatch, so it is first argument
    return{
            type: reducer,
            error
        };
}

export function resetMyLocation(){
    return{
        type: "RESET_USER_LOCATION"
    };
}
export function getLocation(data){
    let site = data;
    let url = (site) ? API_HOST + data : API_HOST ;

    return function(dispatch){
        axios.get(url)
        .then((response) => {
            if(site){
                dispatch(onSuccess("FETCH_HOST_LOCATION", response.data));
            } else {
                dispatch(onSuccess("FETCH_USER_LOCATION", response.data));
            } 
        })
        .catch((err) => {
            alert(err + ":" + site + "not found");
        });
    };
}
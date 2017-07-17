import axios from 'axios';

const API_HOST = 'http://freegeoip.net';

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

export function getLocation(data){
    let site = (data) ? data : "" ;
    return function(dispatch){
        axios.get(`${API_HOST}/${site}`)
        .then((response) => {
            if(site){
                dispatch(onSuccess("FETCH_HOST_LOCATION", response));
                alert("FETCH_HOST_LOCATION", response);
            } else {
                dispatch(onSuccess("FETCH_USER_LOCATION", response));
                alert("FETCH_USER_LOCATION", response);
            } 
        })
        .catch((err) => {
            alert(err + ":" + site + "not found");
        });
    };
}
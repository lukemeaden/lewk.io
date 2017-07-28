import axios from 'axios';

export function api(endPoint){
    return new Promise((resolve, reject) => {
        axios.get(endPoint).then((response) => {
            resolve(response.data);
        }).catch((error) => {
            reject(error);
        });
    });
}

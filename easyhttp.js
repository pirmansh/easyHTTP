/** 
* 
* EasyHTTP Library
* Library for making HTTP request
*
* @version 1.0.0
* @author Pirmansyah
* @license MIT
*
*
**/

class EasyHTTP{
    // Make an HTTP GET Request
    get(url){
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }
    // Make an HTTP POST Request
    post(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'aplication/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }
    // Make an HTTP PUT Request
    put(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'aplication/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }
    delete(url){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'aplication/json'
                }
            })
            .then(res => res.json())
            .then(() => resolve('Resource Deleted....'))
            .catch(err => reject(err));
        });
    }
}
function getRequest(location, callback) {
    console.log(location)
    fetch(location, {mode: 'no-cors'})
    .then(data => console.log(data))
    .then(response => response.json())
    .then(data => callback(data))
    .catch(err => console.log(err))
  }
  
  function postRequest(location, requestBody, callback) {
    // stay tuned
  }
  
  function deleteRequest(location, callback) {
    // stay tuned
  }
  
  function putRequest(location, requestBody, callback) {
    // stay tuned
  }
  
  export default {
    getRequest,
    postRequest,
    deleteRequest,
    putRequest
  };
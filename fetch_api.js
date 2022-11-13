import fetch from 'node-fetch';

// GET all the posts
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json));


// GET a single data that is post with id
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((response) => response.json())
.then((json) => console.log(json));


// Create resource
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST', // http method
    body: JSON.stringify({ // Convert a JavaScript object into a string with JSON.stringify() ,body is data which you want to send to the server
    title: 'foo',
    body: 'bar',
    userId: 1,
    }),
    headers: {      // HTTP Headers are an important part of the API request and response as they represent the
                    //  meta-data associated with the API request and response. Headers carry information for:

                    // 1.Request and Response Body
                    // 2.Request Authorization
                    // 3.Response Caching 
                    // 4.Response Cookies
    'Content-type': 'application/json;charset=utf-8', // Content-Type. application/json. Indicates that the request body format is JSON
    },
})
.then((response) => response.json())
.then((json) => console.log(json));

// Update the resource

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1, // passing the id which you want to update
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then((response) => response.json())
.then((json) => console.log(json));

// Patching a resource means update few data

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then((response) => response.json())
.then((json) => console.log(json));



// Deleting a resource
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE', 
  // Yes it is allowed to include a body on DELETE requests, but it's semantically meaningless. 
})
.then((response) => response.json())
.then((json) => console.log(json));

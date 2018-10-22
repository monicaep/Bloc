## Questions

1. Explain the difference between the request/response cycle.

    The request cycle is the method used to request information/data from another computer/server. The response cycle is the method used by the other computer/server to provide the information/data that was requested.

2. List common response codes and their groupings.

    200s: the request was successful. Example: 200 OK

    300s: the request was redirected. Example: 308 Permanent Redirect

    400s: there was an error on the requestor/client side. Example: 404 Not Found

    500s: there was an error on the server side. Example: 500 Internal Server Error

3. Explain the common HTTP verbs: GET, POST, PATCH, PUT, and DELETE.

    GET: retrieves a page from the server

    POST: creates a new object on the server

    PATCH: updates an existing object on the server

    PUT: similar to PATCH, but it is used for a complete object replacement

    DELETE: deletes an object from the server

4. Explain the difference between synchronous and asynchronous code.

    Basically, synchronous code is code that is executed one task at a time. The code will run the current task to completion before it goes on to the next one. Asynchronous code does not wait for a task to be finished before going on to the next one. Multiple tasks can be running at the same time.

5. Explain what a JavaScript promise is.

    A JavaScript promise allows you to run code in a synchronous manner. The promise will execute only after the response has been returned instead of executing and retrieving the response at the same time. Promises are used to prevent race conditions and the bugs that can result from them.

6. Explain why CORS exists and how we can work around it.

    CORS stands for cross-origin sharing. It allows resources on one webpage to be requested from a site outside of the original webpage. By default, browsers disallow CORS, otherwise it would be easy for malicious code/viruses to be downloaded. To work around this restriction you can use a proxy site. Just put the 'https://....' of the proxy before the API.

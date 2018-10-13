## Questions

1. What is the difference between `document.querySelector()` and `document.querySelecorAll()`?

    `document.querySelector()` will only return the first instance of the of the element that matches the query while `document.querySelectorAll()` will return an array-like object with all the matches.

2. What is the difference between `getElement(s)By` and `querySelector(All)`?

    `getElement(s)By` can only take one selector in the parenthesis but you can pass multiple tags/class names with `querySelector(All)`.

3. What do JavaScript event handlers do and what is an example of one?

    JavaScript event handlers are a set of functions that handle what happens when an event is triggered. For example, if you make a button in your HTML document, the JavaScript event handler is where you would actually input the code of what will happen when the user clicks that button. Below is an example of a how you might do the setup for a button that reveals an answer to question. 

      `<button id='show-answer'>Show Answer</button>`


      `document.getElementById('show-answer').onclick = () => {
        //code for revealing the answer
        };`

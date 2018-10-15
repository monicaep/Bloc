## questions

1. Open your browser. Open up Chrome DevTools. Click on the Network tab on DevTools. Go to your bloc dashboard page. What Request Urls is Bloc using to get your information from the API?

    https://api.segment.io/v1/m

2. Where can I find the cookings being used on the webpage using the Chrome DevTools?

    In the Application tab on the left side there is a drop down called 'Cookies'.

3. Where can you execute JavaScript in the DevTools?

    In the Console tab.

4. How can you modify existing CSS on your webpage using the DevTools?

    In the bottom half of the Elements tab. You can also see a visual of the space your element is taking up.

5. What happens to the code you have altered through the DevTools when you refresh the page?

    The code goes back to it's original form.

6. What are the different ways you can add breakpoints to your JavaScript for debugging?

    1. You can add it in the Script tab. Click the folder icon on the left then find the source file where you want the breakpoint and click the line number.

    2. Use the 'debugger' keyword. This is especially useful for files that are hard to navigate. Example:

    `var x = 15 *5;

    debugger;

    document.getElementById("demo").innerHTML = x;`

## Questions
1. Describe/define DRY and why functions exist.

    DRY stands for D on't R epeat Y ourself. This means you should use functions to store blocks of code so that you don't have to keep writing the same thing multiple times. This will save you time and will make your code cleaner. The rule is that every piece of knowledge should only have a single representation within a system.

2. Describe/define the difference between creating a function and calling/executing a function.

    When you create a function you write the actual code that will execute when you use that function. You input parameters as sort of place holders for the input that you will use when you call/execute the function. When you execute a function you enter the desired input instead of the place holders so that the function runs with actual data. For example:

    `const salutations = function hello(firstName, lastName) {
      return "Hello" + firstName + " " + lastName;
      }; //This is one way to create a function. firstName and lastName are the parameters of the salutations function.
      `

      `salutations("Bob", "Smith"); //This is how you would call/execute the salutations function. "Bob" will go in the spot of the firstName parameter and "Smith" will go in the spot of the lastName parameter. This will return Hello Bob Smith
      `
3. Describe/define what arguments/parameters are and how they relate to functions.

    Arguments are the values you pass to a function when you call the function. They take the place of the parameters. Parameters are like placeholders for the arguments you will later pass. Parameters behave like local variables.

    In the example above, `firstName` and `lastName` are the parameters of the  `salutations` function. When we call the function, "Bob" and "Smith" are the arguments.

4. Describe/define mutating vs. non-mutating functions.

    Mutating functions alter existing data or objects directly. Non-mutating functions produce a new object or data structure. An example of a mutating function is `.push()` because `.push()` will alter the existing object by adding whatever you push in the () and saving it as that. For example:

    `var numbers = [1, 2, 3, 4];
    numbers.push(5) //numbers has been directly altered. numbers = [1, 2, 3, 4, 5]`

    An example of a non-mutating function is `.join()` because the original object is not affected. For example:

    `var words = ["Hey", "there"];
    var newWords = words.join(" "); //The value of newWords is Hey there and words remains unchanged. 
    `

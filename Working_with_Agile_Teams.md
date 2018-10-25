## Questions

1. What are the typical Agile team roles and what parts of the development lifecycle is each role responsible for?

    Product Manager(PM): responsible for strategy, roadmap, and feature definition of the product

    Project Manager (APM): responsible for process management and on-time delivery

    Designer: responsible for the look and feel of the product. Designers create mock-ups and wireframes.

    User Research: responsible for understanding the reasons behind behavior, wants, needs, and priorities of the users

    Team Lead: responsible for technical management, direction, and project quality

    Developer: responsible for the technical creation and maintenance

2. Why do we use Kanban boards in Agile development?

    Kanban boards help to keep things organized by separating cards into columns. It makes it easy to see what needs to be done, what's being worked on, what is waiting for approval and so on.

3. Explain velocity and sprint as if you were teaching another student.

    Velocity is basically the amount of work a development team can complete in a given amount of time. More technically, it is the amount of points per sprint a team completes. A sprint is a time-delimited period of work that lasts from 1 to 4 weeks. In a sprint there are cards, which are like mini-projects, and each card has value assigned to it based on the size and complexity of the mini-project. The velocity is found using the card values and length of the sprint.

4. What format makes a good user story?

    "As a ____, I want ____, so ____."

5. What are different estimation methods teams can use? Explain pros and cons of each method. Which method would you prefer?

    Some common estimation techniques are t-shirt sizes, Fibonacci and powers of 2.

    T-shirt sizes:
        Pros: Everyone knows t-shirt sizes so it's pretty easy to imagine. I think this technique would be especially helpful when it is easy to imagine physical sizes like in the dog training example. It's easy to see a Chihuahua as an XS and a Great Dane as an XL. Also, because there are only 5 different values to choose from there will likely be less variation in the individual estimates of different team members and so it will be easier/faster to come to an agreement.
        Cons: There are only 5 values so the estimation might not be as exact as using a different technique. For example a Great Dane and a Newfoundland might both be considered XL dogs, but they might be assigned slightly different values using a different technique.

    Fibonacci:
        Pros: There are more value options than the t-shirt technique so more precise estimations can be made.
        Cons: Because there are more value options it is possible that there will be more discrepancy between individual estimates and it may take longer for the team to come to an agreement.


      Powers of 2:
        Pros: As with the Fibonacci technique, there are more value options than the t-shirt technique.      
        Cons: Each consecutive number is double the previous one, which means that to go up to the next number estimate you believe that the card is twice as complex as the previous. For example, let's say there is a card that is estimated at a 4 (2^2). The next card is more complex than the one that was just estimated but the next number in the sequence is 8 (2^3), which means to estimate an 8 that card would have to be twice as complex as the first one. If you don't believe it's twice as complex as the first one but definitely a bit more complex than the first one, you are kind of stuck.

6. Give a real-world example of a development project, and explain the breakdown into epic(s), slices, cards, and tasks.

    The epic: A website for a small clothing store.

    Slice: Shopping

    **Card** | **Task**
    --- | ---
    Homepage | <ul><li>homepage picture</li><li>list of links to different clothing sections</li><li>link to sign-in</li><li>link to checkout</li></ul>
    Tops | <ul><li>show photos of tops</li>make the pictures clickable to view information about the specific item<li>include the name of the product and the price under each picture</li><li>include an 'add to basket' button that adds the item to the user's shopping basket</li></ul>
    Bottoms | <ul><li>show photos of bottoms</li>make the pictures clickable to view information about the specific item<li>include the name of the product and the price under each picture</li><li>include an 'add to basket' button that adds the item to the user's shopping basket</li></ul>
    Accessories | <ul><li>show photos of accessories</li>make the pictures clickable to view information about the specific item<li>include the name of the product and the price under each picture</li><li>include an 'add to basket' button that adds the item to the user's shopping basket</li></ul>

    Slice: User Account

    **Card** | **Task**
    --- | ---
    Account Setup | <ul><li>take user email and password as input</li><li>have a create account button that saves the users input</li></ul>
    Login | <ul><li>have user input sections for email and password</li><li>login button that takes user inputs and logs them into their user profile</li></ul>
    Checkout | <ul><li>shows the main picture, name and price of each item in the basket</li><li>'remove' button next to each item that lets the user remove unwanted items</li><li>'checkout' button that takes the user to the checkout page</li><li>the checkout page lets the user input their address and credit card information</li><li>a 'confirm' button that lets the user confirm their information and verifies that the credit card information entered is valid</li><li>the order is sent to the warehouse/store where employees so they can package and ship the items</li></ul>


7. Explain in your own words what a dual-track system is and what advantages it provides.

    A dual-track system means that work on discovery (coming up with, testing and designing a new feature/product) and delivery (developing the new feature/product) is done at the same time. It's like asynchronous code. This system prevents dead time because it allows both teams to work at the same time without having to wait for the other team to finish what they are working on.

8. Choose one of the following projects and write each card that would be in the epic. Estimate each card. What columns would you need to have on your Kanban board?

    **Planning a Vacation**

    1. Choose a destination.

      "As a vacationer, I want to find a tropical destination, so that I can relax and enjoy the sun."

      Tasks: research possible destinations, check weather conditions for this time of year to make sure conditions are favorable, pick a destination

      Estimate: XS - there are many tropical destinations and checking the weather is not very complex

    2. Book a hotel.

      "As a vacationer, I want to find a good deal on a hotel, so that I can feel comfortable where I am staying and not overpay."

      Tasks: research hotel options in the area, compare prices and reviews to find the best deal and hotel, book the hotel for the desired length of stay

      Estimate: M - there are usually a lot of hotel options so picking the right one and making sure it is available when needed can get complex. The complexity can increase if more travel will be done at the destination and multiple hotels must be booked.

    3. Book a flight.
      "As a vacationer, I want to find a flight, so that I can easily travel to my destination."

      Tasks: compare flight prices and travel times to find the best flight for the desired dates

      Estimate: S - there are only a limited number of flight options for the desired dates so finding a flight will not be that difficult. Sometimes it can be a bit difficult comparing flights between all the different flight search engines though.

    4. Research activities/points of interest.
      "As a vacationer, I want to have a plan for things I want to do/see while at my destination, so that I can get the most out of my time there and not miss anything I wish I would have known about."

      Tasks: research the destination to find restaurants/activities/points of interest, ask friends/family for recommendations if they have been there, pre-book/make reservations for activities/restaurants that require it

      Estimate: L - looking up all this information can get rather complex as there are likely lots of activities and restaurants. There probably isn't time to do everything that is recommended so picking the top activities/restaurants and making sure they are available when you want can also be a bit complex.

    5. Pack
      "As a vacationer, I want to pack everything I will need for my stay, so that I can be comfortable and not have to worry about things I wish I would have packed."

      Tasks: make a list of clothing, toiletries, accessories, and miscellaneous goods that will be needed, pack them

      Estimate: S - making a list of the items will not be very complex, but getting everything to fit can become complex

    For this project, I would include the following columns in my Kanban board: Backlog (to hold all the cards), In Progress (to hold the card that is currently being worked on), Deployed (if multiple people are traveling it would be good to have a place for everyone going on the trip to agree to what is happening), Approved (for completed cards).

    An In Test column is not really needed for this project because there is nothing to really test. I don't think a Committed column is needed either because I think it can all be done in one sprint. A Blocked column is also not needed because there isn't really anything that would prevent cards from being worked on.

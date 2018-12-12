# Lendi Test

## Background 
Lendi is an online mortgage platform. We use smart technology to match customers with loans from over 35 lenders and help them get approved in an easy online process.

Once the customer has provided us with information about what type of loan they require, we show them some preliminary results. This is a pared-back version of that page. 

## About
Within this repo we have a basic webpack setup which has everything you need for this test. This test is reasonably tech agnostic - we want to see your skills in javascript, not a specific framework :)

You are most welcome to add packages or modify the webpack setup if you so desire, but it's not required. We would prefer you to detail any improvements you would have made in the last task of this test in the interest of time. 

Refer to the setup instructions to install, run, build and test.

Please allow 2 hours maximum to complete this test.

## Setup

### Install
yarn

### Run
yarn start

Webpack dev sever will then open your browser to http://localhost:8080/

## Tasks

1) **There's a bug in your results**
Instead of showing the top 5 lenders, the website is only showing one. Look within src and fix this issue.

Ans:innerHTML will rewrite the whole content in the targeted dom element.
There are 2 solutions
1. use appendchild to add new elements into targeted dom element. This is my solution for this project.

2. Use a global variable 'children' outside the products.map, run children+= prodct and innerHTML the variable after the map iterator finished.
cons:
It will erase other elements inside the targeted dom, so use append child is safer.
if the map has asynchronous behaviours which might cause the result incorrent.




2) **We want to give users the best possible matches**
This particular user is most interested in the lowest monthly repayments, and is *not* interested in a Fixed loan (note: a fixed loan is a loan whose rate type is not fixed). Ensure that lender products that meet this criteria are displayed.

3) **Use data from a real API**
Within src/constants.js there is an API that you are able to 
use to fetch real data. Use this API instead of the lenderList defined in src/app.js

4) **How would you improve this codebase? Please type out your answer below:**

1. Add some space between each card (add margin for 1rem)

2. Sort and filter have their own function which we can run unit tests easily.

3. Add loading screen and remove it once the fetch success which can help for the user experience.

4. Abstract all functions which we can reuse for different page (ex. loading screen)

5. Organise different function into different folder ( ex. tools, components).

6. Rename api file as apis.js which might include many API urls in the future.

7. No need to import style.css as a style variable.

8. Add the flexibility of choosing fixed or non-fixed rate type in case the requirement change or add other options to filter in the future.

9. Sort function can only sort by lower price for now. From user's point of view, they usually want to pay off the debut as quick as possible, unlike some hotel booking products many people wanna stay in the most expensive hotel for their luxury holiday.

10. Uset <li> semantical tag instead of <div> can help SEO.

11. update css to support responsive design


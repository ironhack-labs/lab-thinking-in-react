![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# Thinking in React

![image](https://media.giphy.com/media/AnRrZMk7NNf4oF8IzS/giphy.gif)

## Introduction

In one of the previous lessons, we saw pros and cons of building apps in React based on inheritance and composition and we saw many benefits of using composition approach over inheritance one. Now one more time, we will be *thinking and acting* in that direction. Maybe through past two days we still didn't see how important is to **plan** your apps prior to building them but now we will take this approach as well. 
In this exercise, we’ll walk you through the *thinking process* of building a searchable product data table using React.


## Requirements

- Fork this repo
- Clone this repo

## Submission

- Upon completion, run the following commands:

  ```
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create Pull Request so your TAs can check up your work.

## Instructions

In `src` folder, you can find `data.json` file with some data about products of a random store. 

Example of given data: 

```json
...
{
    "category": "Sporting Goods",  
    "price": "$49.99",    
    "stocked": true,    
    "name": "Football"
}
...

```

By taking quick look at available data, we can see that all the products have following fields: *category*, *price*, *stocked* and *name*, of which *stocked* is type *boolean* (this information will be valuable soon).

Also, you will be dealing with multiple components which need to update depending on changes in other components, so you will have to lift the state up so each change properly reflects through all the other components.
And please, don't forget, this is just an exercise, part of learning process, no one expect from you to do it perfectly in this short amount of time. Think through it, ask questions, be curious and explore all possibilities. Let's do it! :wink:


## Deliverables

### Iteration 1 - Break The UI Into A Component Hierarchy

The first thing you’ll want to do is to make sketch on piece of paper: draw boxes around every component (and sub-component) and give them all names. 
Possible approach could be something like this:

![image](https://user-images.githubusercontent.com/23629340/42808309-54d1594a-89b3-11e8-9df3-450127e4459e.png)

As you can see here, we have five components in our simple app.

- **FilterableProductTable (orange):** contains the entirety of the example (read between the lines, this is going to be our *App.js*)
- **SearchBar (blue):** receives all user input
- **ProductTable (green):** displays and filters the data collection based on user input
- **ProductCategoryRow (turquoise):** displays a *heading* for each category
- **ProductRow (red):** displays a row (*table data*) for each product

Now that we’ve identified the components in our app, let’s arrange them into a hierarchy. Components that appear within another component should appear as a child in the hierarchy:

- FilterableProductTable
  - SearchBar
  - ProductTable
    - ProductCategoryRow
    - ProductRow

### Iteration 2 - Build A Static Version in React

Import `data.json` to the `App.js`. You should build a static version of our app, listing all the elements and displaying both, the search bar and the checkbox you see on the image. Notice that products that are out of stock have been displayed in **red**. *Hint:* In your *ProductRow* component most likely you will receive some props from parent component. *props* will be product object, again most likely :relaxed: . This will give you chance to set nice if statement saying that if the product is out of stock (false), the product name should appear in red. 

![image](https://user-images.githubusercontent.com/23629340/42808421-95a78a66-89b3-11e8-85c1-3246127a7f1a.png)

### Iteration 3 - Filter the Products

Ok, we are ready to give some life to our app. Go ahead and add the filter functionality. Every time somebody types a letter the list should update, listing only values that match what the user is writing.
*Hint:* Setting the `search` actually can be easily done through `form` and `onChange` handler, which will update the state on every keystroke. 
 
![image](https://media.giphy.com/media/AnRrZMk7NNf4oF8IzS/giphy.gif)

### Iteration 4 - Checkbox

Another feature of our app is a checkbox to filter the products when they are out of stock. Go ahead and add this functionality.
*Hint:* Setting the `inStock` also can be done through `form` and `onChange` handler, which will update the state depending of the value of *checked* property.
We know that setting the search and checkbox will probably be the biggest challenge but don't be discouraged - you already know this, you just have to develop way of thinking so you can apply the knowledge that you grasped through lessons so far. 

![image](https://user-images.githubusercontent.com/23629340/42809079-fdbe9418-89b4-11e8-9234-3e54db8acfc0.png)

### Iteration 5 - Styling your App

Feel free to style it how ever you want. :art:

Happy coding! :heart:
![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# Thinking in React

<!-- ![image](https://media.giphy.com/media/AnRrZMk7NNf4oF8IzS/giphy.gif) -->

We believe that up to this point we all understand that **in React everything is a component**. A React app is built of components, usually a lot of them, and they are *usually* nested into one another. To refresh our memory, **a component is a reusable piece of code, which defines how certain features should look and behave on the UI**.
Now one more time, we will be *thinking and acting* in that direction. Maybe through past two days we still didn't see how important is to **plan** our apps prior to building them but now we will emphasize this approach as well. 
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

## Introduction

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

By taking quick look at available data, we can see that all the products have following fields: *category*, *price*, *stocked* and *name*, of which *stocked* is type *boolean* (this information will be valuable soon). Also, keep in mind, you won't have to work with *category* field in none of the iterations.

You will be dealing with multiple components which need to update depending on changes in other components, so you will have to *lift the state up* so each change properly reflects through all the other components.
🙏🏻 And please, don't forget, this is just an exercise, part of learning process, and no one expects from you to do it perfectly in this short amount of time. Think through it, ask questions, be curious and explore all possibilities. Let's do this! :wink:


## Instructions

### Iteration 1 - Break The UI Into A Component Hierarchy

So remember: the proper planning will save you a lot of time when building the app. The first thing you’ll want to do is to make sketch on piece of paper: draw boxes around every component (and sub-component) and give them all names. 
Possible approach could be something like this:

<!-- ![image](https://user-images.githubusercontent.com/23629340/42808309-54d1594a-89b3-11e8-9df3-450127e4459e.png) -->

![whole_product_table](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_e51857195e0f883bc5514619c231a02f.jpg)


As you can see here, we have four components in our app:

- **FilterableProductTable (orange):** contains the entirety of the example (read between the lines, this is going to be our *App.js*)
- **SearchBar (blue):** receives a user's search term
- **ProductTable (green):** displays all the products but also shows filtered products based on the user's search
- **ProductRow (red):** displays a row (*table data*) for each product

Now that we’ve identified the components in our app, let’s arrange them into a hierarchy. Components that appear within another component should appear as a child in the hierarchy:

- FilterableProductTable
  - SearchBar
  - ProductTable
    - ProductRow

### Iteration 2 - Build A Static Version using React

Let's first create `components` folder and start from creating our first component `<FilterableProductTable />`. This component will be the *mother* of all the other components. Let's import it to `App.js` and also, let's import `data.json` there as well. To kick off the project, we'll give you a starter hint: this component will pass in (and down) the products from the *data.json*. So you'll have something like this in your `App.js`:

```jsx
<!-- App.js -->
import React, { Component } from 'react';
import data from '../data.json'
import FilterableProductTable from './components/FilterableProductTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableProductTable products={ data } />
      </div>
    );
  }
}

export default App;
```
Okay, now it's your turn: create `<SearchBar />`, `<ProductTable />` and `<ProductRow />` components and make them statically display the search bar and all the products. The *checkbox* part of the search component is BONUS.
Also, notice that products that are out of stock are displayed in **red**. *Hint:* In your *ProductRow* component most likely you will receive some props from parent component. *props* will be product object, again most likely :relaxed: . This will give you chance to set nice if statement saying that if the product is out of stock (false), the product name should appear in red. 

<!-- ![image](https://user-images.githubusercontent.com/23629340/42808421-95a78a66-89b3-11e8-85c1-3246127a7f1a.png) -->

### Iteration 3 - Add some dynamic - Filter the Products

Ok, we are ready to give some life to our app. Go ahead and add the filter functionality. Every time somebody types a letter, the list should update, based on the user's input.
*Hint:* Setting the `search` actually can be easily done through `form` and `onChange` handler, which will update the state on every keystroke. 
 
![image](https://media.giphy.com/media/AnRrZMk7NNf4oF8IzS/giphy.gif)

### Iteration 4 - BONUS - The Checkbox Filter

As a part of the search box, we can add a check box to help us filter through the products that are in stock.
*Hint:* Setting the `inStock` also can be done through `form` and `onChange` handler, which will update the state depending of the value of *checked* property.
We know that setting the search and checkbox will probably be the biggest challenge but don't be discouraged - you already know this, you just have to develop way of thinking so you can apply the knowledge that you grasped through lessons so far. 

￼![products_in_stock](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_bda46746e1a2efec4f4b0c16117842ea.png)

### Styling your App

Feel free to style it how ever you want. :art:

Happy coding! :heart:
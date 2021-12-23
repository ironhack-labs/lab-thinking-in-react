![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | Thinking in React

## Introduction

By now you probably know that **in React everything is a component**. A React app is built out of components, usually a lot of them. When used, components are _usually_ nested inside of other components. 

To refresh our memory, **a component is a reusable piece of code, which defines how certain features should look and behave in the UI**.

Now one more time, we will be _thinking and acting_ in that direction. Maybe in the past days we didn't see how important is to **plan** our apps prior to building them. In this exercise, we will emphasize this approach. We’ll walk you through the _thinking process_ of building an app displaying a searchable table of products.

## Setup

- Fork this repo

- Clone this repo

  ```bash
  $ cd lab-thinking-in-react
  $ npm install
  $ npm start
  ```

  

## Submission

- Upon completion, run the following commands:

  ```
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create a Pull Request so that your TAs can review your work.



## Getting Started

Clean the `App.js` component so that it has the following structure:

```jsx
// src/App.js
import "./App.css";

function App() {
  return <div className="App"></div>;
}
export default App;
```



## Instructions

### Iteration 0 | Introduction 

In the `src/` folder, you will find the `data.json` file containing the data representing products of a random store.

Each product object has the following fields: `category`, `price`, `inStock` and `name`, of which `inStock` is type _boolean_ (this information will be valuable soon). Example:

```json
{
    "category": "Sporting Goods",
    "price": "$49.99",
    "inStock": true,
    "name": "Football"
}
```



You will be dealing with multiple components that depend on each other. To properly reflect the changes in all the components, we'll store the state in the closest common parent component (remember _lift the state up_).

You will be dealing with multiple components that depend on each other. To ensure that components can interact with eachother, we'll store the state in the closest common parent component (remember _lifting the state up_).

And remember, this is just an exercise and a part of the learning process. No one expects from you to do it perfectly. Think through it, ask questions, be curious and explore all possibilities. Let's do this! :wink:



----



### Iteration 1 | Break The UI Into A Component Hierarchy

So remember: the proper planning will save you a lot of time when building the app. The first thing you’ll want to do is to make a sketch on the piece of paper: draw boxes around every component (and sub-component) and give each components a name.
Possible approach could be something like this:

<!-- ![image](https://user-images.githubusercontent.com/23629340/42808309-54d1594a-89b3-11e8-9df3-450127e4459e.png) -->

<details>
  <summary>Click here to see the image</summary>


  <hr>


![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_e51857195e0f883bc5514619c231a02f.jpg)

</details>

As you can see here, we have four components in our app:

- **ProductsPage (orange):** contains the entirety of the example (we will render it in the `App.js`)
- **SearchBar (blue):** having an input that takes user's search string
- **ProductTable (green):** displays all the products and also shows the filtered products based on the user's search
- **ProductRow (red):** displays a row (_table data_) for each product

Now that we’ve identified the components in our app, let’s arrange them into a hierarchy. Components that appear within another component should appear as children in the hierarchy:

- ProductsPage
  - SearchBar
  - ProductTable
    - ProductRow



----



### Iteration 2 | Products Page

First, let's create a `components/` folder and inside of it our first component `ProductsPage`. This component will be the _parent_ of the other components. Let's import it to `App.js` and also, let's import `data.json` there as well. To kick off the project, we'll give you a starter hint: this component will pass in (and down) the products from the _data.json_. So you'll have something like this in your `App.js`:

```jsx
// App.js
import jsonData from '../data.json'
import './App.css';

import ProductsPage from './components/ProductsPage';


function App() {
  return (
    <div className="App">
      <ProductsPage products={ jsonData } />
    </div>
  );
}

export default App;
```

Okay, now it's your turn. Create the `<SearchBar />`, `<ProductTable />` and `<ProductRow />` components to display the search bar and all the products. The _checkbox_ part of the search component is BONUS.

Also, the products that are out of stock should be colored in **red**. _Hint:_ Each product object has a property `inStock` which you can use to conditonally change the text color.

<!-- ![image](https://user-images.githubusercontent.com/23629340/42808421-95a78a66-89b3-11e8-85c1-3246127a7f1a.png) -->



----



### Iteration 3 | Filter the Products

In this iteration, we'll add the list filtering functionality. Every time someone types a letter in the search input, the list should update based on the user's input.
_Hint:_  Search functionality can be easily implemented using an `input` with the `onChange` handler, which will update the state on every keystroke.

<details>
  <summary>Click here to see the image</summary>



  <hr>



![](https://media.giphy.com/media/AnRrZMk7NNf4oF8IzS/giphy.gif)

</details>



----



### Iteration 4 | The Checkbox Filter (Bonus)

As a part of the search box, add a check box that allows filtering through the products that are in stock.
_Hint:_ To do this you will need an `<input type="checkbox" />` with the `onChange` handler, which will update the state depending of the value of the `checked` property.
We know that setting the search and checkbox will probably be the biggest challenge but don't be discouraged - you already know this, just take your time and try to work your way through by applying knowledge that you gained so far.

<details>
  <summary>Click here to see the image</summary>


  <hr>


![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_bda46746e1a2efec4f4b0c16117842ea.png)

</details>



----



### Iteration 5 | Styling your app (Bonus)

Feel free to style the app in any way you would like. :art:



Happy coding! :heart:

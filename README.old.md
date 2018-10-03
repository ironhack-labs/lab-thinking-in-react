![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# Thinking in React

![image](https://media.giphy.com/media/AnRrZMk7NNf4oF8IzS/giphy.gif)

## Introduction

One of the many great parts of React is how it makes you think about apps as you build them. In this exercise, we’ll walk you through the thought process of building a searchable product data table using React.

We have a `data.json` file with some data about products of a random store. Our JSON API looks like this:

```json
{"category": "Sporting Goods",  "price": "$49.99",    "stocked": true,    "name": "Football"},
{"category": "Sporting Goods",  "price": "$9.99",     "stocked": true,    "name": "Baseball"},
{"category": "Sporting Goods",  "price": "$29.99",    "stocked": false,   "name": "Basketball"},
{"category": "Electronics",     "price": "$99.99",    "stocked": true,    "name": "iPod Touch"},
{"category": "Electronics",     "price": "$399.99",   "stocked": false,   "name": "iPhone X"},
{"category": "Electronics",     "price": "$199.99",   "stocked": true,    "name": "iPad Mini"},
{"category": "Sporting Goods",  "price": "$199.99",   "stocked": true,    "name": "Tennis Balls"},
{"category": "Electronics",     "price": "$199.99",   "stocked": true,    "name": "Huawei P10"}
```

## Requirements

- Fork this repo
- Clone this repo


## Submission

- Upon completion, run the following commands

  ```
  git add .
  git commit -m "done"
  git push origin master
  ```

- Navigate to your repo and [create a Pull Request](https://help.github.com/articles/creating-a-pull-request/)

## Deliverables

### Iteration 1 - Break The UI Into A Component Hierarchy

The first thing you’ll want to do is to draw boxes around every component (and subcomponent) in the mock and give them all names. In this 1st iteration, we will help you, then is on your own:

![image](https://user-images.githubusercontent.com/23629340/42808309-54d1594a-89b3-11e8-9df3-450127e4459e.png)

You’ll see here that we have five components in our simple app. We’ve italicized the data each component represents.

- **FilterableProductTable (orange):** contains the entirety of the example
- **SearchBar (blue):** receives all user input
- **ProductTable (green):** displays and filters the data collection based on user input
- **ProductCategoryRow (turquoise):** displays a heading for each category
- **ProductRow (red):** displays a row for each product

Now that we’ve identified the components in our mock let’s arrange them into a hierarchy. This is easy. Components that appear within another component in the mock should appear as a child in the hierarchy:

- FilterableProductTable
  - SearchBar
  - ProductTable
    - ProductCategoryRow
    - ProductRow

### Iteration 2 - Build A Static Version in React

You should build a static version of our app, listing all the elements and displaying both, the search bar and the checkbox you see on the image. Notice that products that are out of stock have been displayed in **red**-

![image](https://user-images.githubusercontent.com/23629340/42808421-95a78a66-89b3-11e8-85c1-3246127a7f1a.png)

### Iteration 3 - Filter the Products

Ok, we are ready to give some life to our app. Go ahead and add the filter functionality. Every time somebody types a letter the list should update, listing only values that match what the user is writing.

![image](https://media.giphy.com/media/AnRrZMk7NNf4oF8IzS/giphy.gif)

### Iteration 4 - Checkbox

Another feature of our ToDo List is a checkbox to filter the products when they are out of stock. Go ahead and add this functionality.

![image](https://user-images.githubusercontent.com/23629340/42809079-fdbe9418-89b4-11e8-9234-3e54db8acfc0.png)

### Iteration 5 - Styling your App

Finally, let give some style to our ToDo List. Feel free to style it how you want. Here is an idea :wink:

![image](https://user-images.githubusercontent.com/23629340/42810831-2a0a3046-89b9-11e8-9f75-4715f6e52212.png)
# Black Goat Pizza

An application used to order pizza from Black Goat Pizza and view the orders as an admin.

## Built With

- React
- Redux
- MongoDB
- Node.js
- Express

##Getting Started

To get this project running, fork and clone this repo onto your local machine.

1. run `mongod` in the terminal
2. open the project folder in terminal and run the following command:

**Import data**

```
mongoimport --db pizza_parlor --collection pizzas --file pizza.csv --type csv --headerline
```

3. `npm install`
4. `npm run server`
5. `npm run client`

##Screen Shot

![Screen Shot](public/images/screen_shot.png)

###Completed Features

- [x] Add or remove pizzas from order
- [x] Enter customer info
- [x] Review and confirm order
- [x] View all orders placed on admin page

###Next Steps

- [] Allow users to navigate back before submitting order
- [] Display a list of pizzas ordered on admin page
- [] Add more pictures of pizzas

##Authors

- Julia Balliet
- Justin Spitzley
- Jesse Remington
- Abbey Janicek
- Dan MacKay
- Anthony James
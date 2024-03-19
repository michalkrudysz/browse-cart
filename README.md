# Mini Online Store with Cart and Product Editing

## Brief Description

An online store application built using React. It renders products from a "fake" database, simulated using a JS file containing an array of objects representing individual products. The application allows adding products to the cart (which displays the quantity based on the array length to show unique quantities). Through the cart (which is a modal created using portals), you can add or remove products (increase their quantity or decrease it; automatically removing them when decreasing from 1 to 0). The cart also displays the total price for the products, considering their quantity and price (rounded to two decimal places).

## Technologies

- React
- React Context
- SCSS (Modules)
- PropTypes
- React hooks (useState, useContext, useRef, useImperativeHandle)
- ReactDOM (ReactDOM.createPortal)

## Features

- **App**: The main component that uses the CartProvider context provider to manage the shopping cart state. Displays the Header, Shop, and Footer components. The Shop is rendered with the main product (featured product) and a list of other available products in the store.
- **Header**: A header component containing the store's logo and a cart icon, showing the number of products in the cart. Allows opening the cart modal by clicking.
- **Shop**: A shop component that takes a main product and a list of other products as props to display them.
- **SingleProduct and MainProduct**: Components presenting individual products. MainProduct displays the featured product, whereas SingleProduct is used for displaying each product in the product list. Both allow adding a product to the cart.
- **CartModal**: A modal cart component, which is invoked from the Header. Allows viewing products added to the cart, adding, removing them, and displaying the total purchase amount.
- **Cart**: A component displaying detailed information about products added to the cart, including quantity and price. Allows modifying the quantity of products directly in the cart.

Each of these components uses CartContext to manage the shopping cart state, enabling adding products to the cart, removing them, and viewing the cart's contents. Components styling is managed through SCSS modules.

## Pre-installation Requirements

Node.js environment required.
After cloning the project:

1. `npm install`
2. `npm run dev`

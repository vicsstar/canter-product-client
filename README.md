# Canter Product Web application

This web application is implementing using the React library and talks to the <a href="https://github.com/vicsstar/canter-product-server/">canter-product-server</a> REST API application.

### Usage

Run web app in development mode, use:
```shell
yarn && yarn start
```

### API endpoints contacted by the web app

```shell
/products           GET         // Get all products.
/products/{id}      GET         // Get a single product by id.
/products           POST        // Create a new product.
/products/{id}      PUT         // Update a product by id.
/products/{id}      DELETE      // Delete a single product by id.
```

import express from "express";

const app = express();

app.get('/api/product', (req, res) => {
  const products = [
    { id: 1, name: 'Product 1', price: 10.99, image: 'image1.jpg' },
    { id: 2, name: 'Product 2', price: 12.99, image: 'image2.jpg' },
    { id: 3, name: 'Product 3', price: 8.99, image: 'image3.jpg' },
    { id: 4, name: 'Product 4', price: 15.99, image: 'image4.jpg' },
    { id: 5, name: 'Product 5', price: 11.99, image: 'image5.jpg' },
    { id: 6, name: 'Product 6', price: 14.99, image: 'image6.jpg' },
    { id: 7, name: 'Product 7', price: 9.99, image: 'image7.jpg' },
    { id: 8, name: 'Product 8', price: 13.99, image: 'image8.jpg' },
    { id: 9, name: 'Product 9', price: 7.99, image: 'image9.jpg' },
    { id: 10, name: 'Product 10', price: 16.99, image: 'image10.jpg' },
  ];

  setTimeout(() => {
    res.send(products);
  }, 3000);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

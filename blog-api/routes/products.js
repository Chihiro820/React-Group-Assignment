const express =require('express');
const router = express.Router();
const Product = require('../models/Product');


// GET all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products); 

  } catch (error) {
    res.json(error);
  }
});

// GET specific product
router.get('/:productId', async (req, res) => {  
  try {
    const product = await Product.findById(req.params.productId);
    res.json(product); 

  } catch (error) {
    res.json(error);
  }
});

// CREATE product
router.post('/', async (req, res) => {  
  const product = new Product({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    quantity: req.body.quantity,
    img: req.body.img,
    tags: req.body.tags
  });

  try {
    const savedProduct = await product.save();
    res.json(savedProduct); 

  } catch (error) {
    res.json(error);
  }

})


// UPDATE product
router.patch('/:productId', async (req, res) => {
  try {
    const updatedProduct = await Product.updateOne(
      { _id: req.params.productId },
      {$set: {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        quantity: req.body.quantity,
        img: req.body.img,
        tags: req.body.tags
        }       
      }
    );
    
    res.json(updatedProduct); 

  } catch (error) {
    res.json(error);
  }
})


// DELETE product
router.delete('/:productId', async (req, res) => {
   try {
    const deletedProduct = await Product.deleteOne({_id: req.params.productId});
    res.json(deletedProduct); 

  } catch (error) {
    res.json(error);
  }
})

module.exports = router;
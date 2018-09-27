const db = require('mongoose');

const Product = require('../models/product');

const uri = 'http://localhost:3001/api/products/';
// Product Functions
exports.getAllProducts = (req, res) => {
  Product.find()
    .exec()
    .then((products) => {
      const result = {
        count: products.length,
        products: products.map(p => ({
          name: p.name,
          desc: p.desc,
          id: p._id,
          request: {
            type: 'GET',
            url: uri + p._id
          }
        }))
      };
      res.status(200).json({ ...result });
    })
    .catch(err => res.status(500).json({ message: 'Something went wrong with the server.', error: err }));
};

exports.getProduct = (req, res) => {
  const { id } = req.params;
  Product.findOne({ _id: id })
    .exec()
    .then(product => res.status(200).json({ product }))
    .catch(err => res.status(500).json({ message: 'Something went wrong with the server.', error: err }));
};

exports.createProduct = (req, res) => {
  const { name, desc } = req.body;

  const product = new Product({ _id: db.Types.ObjectId(), name, desc });

  product.save()
    .then(result => res.status(201).json({ message: 'ok', product: result }))
    .catch(err => res.status(500).json({ message: 'Something went wrong with the server.', error: err }));
};

exports.updateProduct = (req, res) => {
  const { id } = req.params;

  Product.findOneAndUpdate({ _id: id }, { $set: req.body })
    .exec()
    .then(product => res.status(200).json({ product }))
    .catch(err => res.status(500).json({ message: 'Something went wrong with the server.', error: err }));
};

exports.deleteProduct = (req, res) => {
  const { id } = req.params;
  Product.findByIdAndRemove(id)
    .exec()
    .then(() => res.status(200).json({ message: 'ok' }))
    .catch(err => res.status(500).json({ message: 'Something went shit.' }));
};


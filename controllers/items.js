import { Item } from '../models/item.js'

function index(req, res) {
  Item.find({}).sort({ createdAt: 'desc' })
  .then(items => {
    res.status(200).json(items)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Item.create(req.body)
  .then(item => {
    res.status(201).json(item)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function show(req, res) {
  Item.findById(req.params.id)
  .then(item => {
    res.status(200).json(item)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function update(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Item.findByIdAndUpdate(req.params.id, req.body, { new: true })
  .then(updatedItem => {
    res.status(201).json(updatedItem)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

export {
  index,
  create,
  show,
  update,
}
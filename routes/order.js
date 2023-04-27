const router = require("express").Router();
const Order = require("../models/Order");

//Create new order
router.post("/", async (req, res) => {

    const newOrder = new Order(req.body);

    try {

        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);

    } catch(err) {
        res.status(500).json(err);
    }

   
    
});

//Update new order
router.put("/:id", async (req, res) => {

    console.log(req.params.id, 'req.params.id');

    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, 
        {new: true}
        );
        res.status(200).json(updatedOrder);
    } catch(err) {
        res.status(500).json(err);
    } 
});

//Delete order
router.delete("/:id", async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        await order.delete();
        res.status(200).json('Faq has been deleted');
    } catch(err) {
        res.status(500).json(err);
    }
});

// Get order
router.get('/:id', async(req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        res.status(200).json(order);
    } catch(err) {
        res.status(500).json(err);
    }
});

// Get all orders
router.get('/', async(req, res) => {
    try  {
        let orders = await Order.find();
        res.status(200).json(orders);
    } catch(err) {
        res.status(500).json(err);
    }
});


module.exports = router;
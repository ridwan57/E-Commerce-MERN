const Product = require("../models/product");
const User = require("../models/user");
const Cart = require("../models/cart");
const user = require("../models/user");



exports.userCart = async (req, res) => {
    const { cart } = req.body
    let products = []

    const user = await user.findOne({ email: req.user.email }).exec()
    let cartExistByThisUser = await Cart.findOne({ orderedBy: user._id }).exec()


    if (cartExistByThisUser) {
        cartExistByThisUser.remove()
        console.log('Removed old cart')
    }
    for (let i = 0; i < cart.length; i++) {

        let object = {}
        object.product = cart[i]._id
        object.count = cart[i].count
        object.color = cart[i].color
        //creating total

        let { price } = await Product.findById(cart[i]._id)
            .select('price').exec()
        object.price = price
        products.push(object)
    }
    console.log('products', products)

    let cartTotal = 0
    for (let i = 0; i < cart.length; i++) {
        cartTotal = cartTotal + (products[i].price * products[i].count)
    }
    let newCart = await new Cart({
        products,
        cartTotal,
        orderedBy: user._id
    }).save()
    console.log('newcart', newCart)
    res.json({ ok: true })

};

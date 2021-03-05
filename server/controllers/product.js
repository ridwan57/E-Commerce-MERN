const Product = require("../models/product");
const slugify = require("slugify");

exports.create = async (req, res) => {
    console.log('req.body:', req.body)
    try {
        console.log('req.body:', req.body)
        const { title } = req.body;
        req.body.slug = slugify(title)

        // const Product = await new Product({ name, slug: slugify(name) }).save();
        // res.json(Product);
        res.json(await new Product(req.body).save());
    } catch (err) {
        // console.log(err);
        res.status(400).send("Create Product failed");
    }
};
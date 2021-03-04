const Sub = require("../models/sub");
const slugify = require("slugify");

exports.create = async (req, res) => {
    try {
        const { name } = req.body;
        res.json(await new Sub({ name, slug: slugify(name) }).save());
    } catch (err) {
        // console.log(err);
        res.status(400).send("Create Sub failed");
    }
};

exports.list = async (req, res) => {

    try {
        res.json(await Sub.find({}).sort({ createdAt: -1 }).exec());
    } catch (error) {
        res.status(400).send("List Sub fetch failed");
    }
}


exports.read = async (req, res) => {
    let Sub = await Sub.findOne({ slug: req.params.slug }).exec();
    res.json(Sub);
};

exports.update = async (req, res) => {
    const { name } = req.body;
    try {
        const updated = await Sub.findOneAndUpdate(
            { slug: req.params.slug },
            { name, slug: slugify(name) },
            { new: true }
        );
        res.json(updated);
    } catch (err) {
        res.status(400).send("Sub update failed");
    }
};

exports.remove = async (req, res) => {
    try {
        const deleted = await Sub.findOneAndDelete({ slug: req.params.slug });
        res.json(deleted);
    } catch (err) {
        res.status(400).send("Sub delete failed");
    }
};

const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const { Schema } = mongoose;
const app = express()
const port = 8000;
app.use(cors())
app.use(bodyParser.json())
const ProductsSchema = new Schema({
    title: {type: String, required: true},
    name: {type: String, required: true},
    price: {type: Number, required: true},
    imgUrl: {type: String, required: true},
})
const Products = mongoose.model("product", ProductsSchema)
app.get("/product", (req, res) => {
    Products.find({}, (err, docs) => {
        if(!err){
            res.send(docs)
        }
        else{
            res.status(500).json({ message: "Not Found"})
        }
    })
})
app.get("/product/:id", (req, res) => {
    const { id } = req.params
    Products.findById( id, (err, docs) => {
        if(!err){
            res.send(docs)
        } else{
            res.status(500).json({ message: "Not found"})
        }
    })
})
app.delete("/product/:id", (req, res) => {
    const { id } = req.params
    Products.findByIdAndDelete(id, (err) => {
        if(!err){
            res.send("Delete")
        }else {
            res.status(404).json({ message: err})
        }
    })
})
app.post("/product", (req, res) => {
    let newproducts = new Products({
        title: req.body.title,
        name: req.body.name,
        price: req.body.price,
        imgUrl: req.body.imgUrl
    })
    newproducts.save()
    res.send({ message: "Post product"})
})

mongoose.connect(
    "mongodb+srv://lemanjaffar:lemanjaffar@cluster0.o26j4pn.mongodb.net/?retryWrites=true&w=majority",
    err => {
        if(!err){
            console.log("DB CONNECT");
            app.listen(port , () => {
                console.log(`http://localhost:${port}`);
            })
        }
    }
)
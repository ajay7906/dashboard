import connectDb from './database/db.js'
import Product from './models/model.js'
import ProductJson from './jsondata.json'
config({
    path: "./config.env"
})

const start = async ()=>{
    try {
        await connectDb("mongodb+srv://aks969014:7906444281@cluster0.yzy9ttz.mongodb.net/ecommerse")
        await Product.create(ProductJson)
        console.log("success");
        
    } catch (error) {
        console.log(error);
        
    }
}

start();

import  Express  from "express";
import Home from "../controller/home.js"
import Store from "../controller/store.js"
import About from "../controller/about.js"
import Product from "../controller/product.js"
const route = Express();

route.use('/',Home)
route.use('/store',Store)
route.use('/about',About)
route.use('/product',Product)
export default route
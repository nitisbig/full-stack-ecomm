import Express from "express"
import Product from "../model/Product.js";
const route = Express.Router();

route.get('/',(req,res)=>{
    
    res.render('Product')
})

route.post('/',async(req,res)=>{
    const result = await fetch(`https://api.unsplash.com/search/photos?query=${req.body.pName}&client_id=OTKE174qBNCCatlGAeCC1XDqOkel-PR9IpDAXjPE1V4`)
    const productImage = await result.json(); 
    const proImgUrl = productImage.results[0].urls.thumb
    await Product.create({
        name: req.body.pName,
        price: req.body.pPrice,
        country: req.body.pCountry,
        url: proImgUrl
    })
    res.redirect('/')
})





export default route
import Express from "express"
import Product from "../model/Product.js";
const route = Express.Router();


route.get('/',async(req,res)=>{
    const result = await fetch('https://api.unsplash.com/search/photos?query=usa&client_id=OTKE174qBNCCatlGAeCC1XDqOkel-PR9IpDAXjPE1V4')
    const productImage = await result.json(); 
    const proImgUrl = productImage.results[0].urls.thumb
    
    const Data = await Product.find();
    
    res.render('Home',{Data,proImgUrl})
})
route.post('/delete/:id',async(req,res)=>{
    const result = await Product.findByIdAndDelete(req.params.id)
    //res.json({sucess: true , id: req.params.id, result})
    res.redirect('/')
  })
route.post('/update/:id',async(req,res)=>{
    const result = await fetch(`https://api.unsplash.com/search/photos?query=${req.body.pName}&client_id=OTKE174qBNCCatlGAeCC1XDqOkel-PR9IpDAXjPE1V4`)
    const productImage = await result.json(); 
    const proImgUrl = productImage.results[0].urls.thumb
  const id = req.params.id
  res.render('update',{id})
  await Product.findByIdAndUpdate(req.params.id, {name: req.body.pName, price: req.body.pPrice,
    country: req.body.pCountry,
    url: proImgUrl})
  
})

export default route
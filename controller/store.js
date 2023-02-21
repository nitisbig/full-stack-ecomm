import Express from "express"
const route = Express()

route.get('/',(req,res)=>{
    res.render('Store')
})

export default route
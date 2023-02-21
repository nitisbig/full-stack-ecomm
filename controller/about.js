import Express from "express"
const route = Express.Router()

route.get('/',(req,res)=>{
    res.render('About')
})

export default route
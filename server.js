import Express from "express";
import Index from "./routes/index.js"
import bodyParser from "body-parser";
import mongoose from "mongoose";
const app = Express();
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/ecomm', {
    useNewUrlParser: true
  },()=>console.log('DB CONNECTED'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(Express.static('public'))
app.set("view engine","ejs")
app.use('/',Index)


app.listen('3000');
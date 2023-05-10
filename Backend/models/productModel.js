import mongoose from 'mongoose';


const productSchema = new mongoose.Schema({
    name: {type: String,unique:true, required: true},
    img: {type: String, required: true},
    description: {type: String},
    quantity: {type: Number, required: true},
    price: {type: Number, required: true},
    seller_id: {type: Number, required: true},
    rating: {type: Number},
    colors: {type: Array},
    department: {type: String, required: true},
countInStack:{type:Number,
    required:true,
    min:0,
    max:255

},
rating:{
    type:Number,
    default:0
},


});


const Products = mongoose.model('products', productSchema);


export {Products};
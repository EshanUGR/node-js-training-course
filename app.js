import express from 'express'
const app=express();
import { products,pepole } from './store/data.js';

app.get('/',(req,res)=>
{
 res.send('<h1>Home Page <a href="/api/products">Products</a></h1>')
})

app.get('/api/products/:productID',(req,res)=>
{
  // console.log(req)
  // console.log(req.params)
  const {productID}=req.params;
  const singleProduct=products.find((product)=>product.id===Number(productID))
  if(!singleProduct)
  {
    return res.status(404).send('Product Does Not Exist');
  }
   return res.json(singleProduct)
})
app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>
{
//params menas we manually added values to urls
  console.log(req.params)
  res.send('hello world');
})

app.get('api/v1/query',(req,res)=>
{
  // console.log(req.query);
  const{result,limit}=req.query
  let sortedProducts=[...products];
  if(search)
  {
    sortedProducts=sortedProducts.filter((product)=>
    {
      return product.name.startsWith(search);
    })
  }
  if(limit)
  {
    sortedProducts=sortedProducts.slice(0,Number(limit))
  }
  if(sortedProducts.length<1)
  {
    return res.status(200).json({sucess:true,data:[]})
  }
  res.status(200).json(sortedProducts)
  res.send('hello world');
})

app.listen(5005,()=>
{
  console.log('server is listening on port 5005');
})

// 6.01
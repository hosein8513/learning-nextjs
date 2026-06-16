export default function handler(req,res){
    const {productId} = req.query
    const products =[
        {title:'product1',price:1000},
        {title:'product2',price:2000},
        {title:'product3',price:3000},
        {title:'product4',price:4000}
    ]
    res.status(201).json(products.find(p=>p.id == productId))
}
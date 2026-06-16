export default function hndler(req,res){
    res.status(200).json([
        {title:'product1',price:1000},
        {title:'product2',price:2000},
        {title:'product3',price:3000},
        {title:'product4',price:4000}
    ])
}
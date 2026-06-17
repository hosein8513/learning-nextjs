export async function GET(request) {
    const data =[
        {id:1,title:"product1",price:10000},
        {id:2,title:"product2",price:20000},
        {id:3,title:"product3",price:30000},
    ]
    return Response.json({data})
}
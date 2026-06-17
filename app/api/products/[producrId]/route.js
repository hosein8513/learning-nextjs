export async function GET(request) {
       const searchParams = request.nextUrl.searchParams
    const name = searchParams.get('name')
    const color = searchParams.get('color')
    
    const data = [
        {id: 1, title: "product1", price: 1_000_000},
        {id: 2, title: "product2", price: 2_000_000},
    ]

    return Response.json({ name, color })
}
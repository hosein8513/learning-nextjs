import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column', gap:'10px'}}>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}
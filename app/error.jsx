'use client' // Error boundaries must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({ error, unstable_retry }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by re-fetching and re-rendering the segment
          () => unstable_retry()
        }
      >
        Try again
      </button>
    </div>
  )
}
import './globals.css'
export const meatdata ={
  title:'my site',
  description:'User Component'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
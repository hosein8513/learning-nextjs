import Footer from '@/components/Footer'
import Header from '@/components/Header'
import {Inter} from 'next/font/google'
import Script from 'next/script'

const inter = Inter({subsets:['latin']})

export const metadata ={
    title:'my site',
    description:'this is my site'
}

export default function Rootlayout ({children}){
    return(
        <html>
            <head>  
  <Script src="/vendor/jquery/jquery.min.js"/>
  <Script src="/vendor/bootstrap/js/bootstrap.min.js"/>
  <Script src="/assets/js/isotope.min.js"/>
  <Script src="/assets/js/owl-carousel.js"/>
  <Script src="/assets/js/tabs.js"/>
  <Script src="/assets/js/popup.js"/>
  <Script src="/assets/js/custom.js"/>
  <link rel="stylesheet" href="/vendor/bootstrap/css/bootstrap.min.css"/>
<link rel="stylesheet" href="/assets/css/fontawesome.css"/>
<link rel="stylesheet" href="/assets/css/templatemo-woox-travel.css"/>
<link rel="stylesheet" href="/assets/css/owl.css"/>
<link rel="stylesheet" href="/assets/css/animate.css"></link>
</head>
            <body className={inter.className}>
                <Header/>
                {children}
                <Footer/>
                </body>
        </html>
    )
}
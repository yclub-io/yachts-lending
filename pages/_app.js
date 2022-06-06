import { useRouter } from 'next/router'
import { useEffect } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const router = useRouter()

  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('5162146007173539') 
        ReactPixel.pageView()

        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView()
        })
      })
  }, [router.events])


  return <Component {...pageProps} />
}

export default MyApp

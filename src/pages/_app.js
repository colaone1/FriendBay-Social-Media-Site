import '../styles/globals.css'
import 'toastr/build/toastr.min.css'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return <Component {...pageProps} key={router.asPath} />
}

export default MyApp 
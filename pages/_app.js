// import '../styles/globals.css'
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
//antd css
import 'antd/dist/antd.css'

import '../public/styles/styles.css'
import Nav from '../components/Nav'



function MyApp({ Component, pageProps }) {
 
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp

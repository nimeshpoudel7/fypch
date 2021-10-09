// import '../styles/globals.css'
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
//antd css
import 'antd/dist/antd.css'

import '../public/styles/styles.css'
import Nav from '../components/Nav'


import React from "react";


function MyApp({ Component, pageProps }) {
// to prevent uselayouteffect
const useEnhancedEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp

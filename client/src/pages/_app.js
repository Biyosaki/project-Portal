import store from "../global/store"
import {Provider } from "react-redux"


import "../styles/global.css"

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}> 
      <Component {...pageProps} />
    </Provider>
         
  )
}

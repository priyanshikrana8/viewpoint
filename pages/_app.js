import '../styles/globals.css'
import Header from "../components/header";
import { useEffect, useState } from 'react';
function MyApp({ Component, pageProps }) {

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // console.log(document.body.getBoundingClientRect().top);
      if (document.body.getBoundingClientRect().top < 0) {
        setIsDark(() => true)
        // console.log(true);
      }
      else {
        // console.log(false);
        setIsDark(() => false)
      }
    })
  }, [])

  return (
    <div>
      <Header isDark={isDark}></Header>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp

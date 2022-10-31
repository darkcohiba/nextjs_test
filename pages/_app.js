import '../styles/globals.css'

//next js fetch request
export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:3000/api/hello')
  const data = await res.json()

  return {
    props: {
      data
    }
  }
}


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

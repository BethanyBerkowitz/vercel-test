
const Should500 = () => <h1>Expect this page to cause a 500 error</h1>

Should500.getInitialProps = () => {
  throw new Error('This is an error in the page\'s getInitialProps')
}

export default Should500

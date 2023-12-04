import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
}

MyApp.getInitialProps = async () => {
  let pageProps = {};

  try {
    const res = await fetch('http://localhost:3000/api/todos');

    const {todos} = await res.json();

    if(!todos){
      throw Error('Error getting todos in _app.js')
    }

    pageProps.todos = todos;
  } catch (error) {
    console.log(error);
  }

  return {pageProps}
}

export default MyApp;

import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
}

MyApp.getInitialProps = async () => {
  let pageProps = {};

  try {
    const res = await axios.get('http://localhost:3000/api/todos');

    const {todos} = res.data;

    if(!todos){
      throw Error('Error getting todos in _app.js')
    }

    // console.log(todos);
    pageProps.todos = todos;
  } catch (error) {
    console.log(error);
  }

  return {pageProps}
}

export default MyApp;

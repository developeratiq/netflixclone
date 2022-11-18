
import ContData from './Clone/content/ContData';
import Head from './Clone/header/Head';
import Nav from './Clone/nav/Nav';
import axios from 'axios'

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '73669e30044b8e5c2b9314d88a6e1dc6',
};


function App() {
  return (
  <>
 
  <Nav></Nav>
    <Head></Head>
    <ContData></ContData>
  </>
    
  );
}

export default App;

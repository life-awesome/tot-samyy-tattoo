import { Header } from './sections/header';
import './App.css';
import { About } from './sections/about';
import { Works } from './sections/works';
import { Footer } from './sections/footer';

const App = () => {
  return (
    <>
      <Header/>
      <About/>
      <Works/>
      <Footer/>
    </>
  );
};

export default App;

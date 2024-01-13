import Header from './Components/Header/header.jsx';
import Hero from './Components/Hero/Hero.jsx';
import Experties from './Components/Experties/experties.jsx';
import Works from './Components/Works/works.jsx';
import Portfolio from './Components/Portfolio/portfolio.jsx';
import Footer from './Components/Footer/footer.jsx';
import css from './styles/app.module.scss';

const App = () => {
  return <div className={`${css.container}`}>
    <Header />
    <Hero />
    <Experties />
    <Works />
    <Portfolio />
    <Footer />
  </div>
};

export default App;

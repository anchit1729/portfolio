import Header from './components/Header'
import About from './components/About/About'
import Academics from './components/Academics/Academics'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { HashRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <ChakraProvider>
      <HashRouter basename='/'>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' component={About} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/experience' component={Experience} />
            <Route exact path='/academics' component={Academics} />
            <Route exact path='/skills' component={Skills} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </div>
      </HashRouter>
    </ChakraProvider >
  );
}

export default App;

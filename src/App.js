import Header from './components/Header'
import About from './components/About/About'
import Academics from './components/Academics/Academics'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/personal-website/' component={About} />
            <Route exact path='/personal-website/projects' component={Projects} />
            <Route exact path='/personal-website/experience' component={Experience} />
            <Route exact path='/personal-website/academics' component={Academics} />
            <Route exact path='/personal-website/skills' component={Skills} />
            <Route exact path='/personal-website/contact' component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    </ChakraProvider >
  );
}

export default App;

import { Header } from './components/Header'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Header
        brand="Geração Tech" 
        description="Sede Bezerra"
      >
        <a href="/#equipe">Equipe</a>
        <a href="#aprendizado">Aprendizado</a>
        <a href="/#Contact">Contato</a>
      </Header>
      
      <main className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Home />} />
          <Route path='/contato'element={<Contact/>}/>
          
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App;

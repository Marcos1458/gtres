import { Header } from './components/Header'
import './App.css'
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Contact';

function App() {
  return (
    <BrowserRouter>
      <Header
        brand="Geração Tech" 
        description="Sede Bezerra"
      >
        <a href="/#equipe">Equipe</a>
        <a href="#aprendizado">Aprendizado</a>
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

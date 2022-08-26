import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './components/Form/Form';

import Home from './pages/Home';
import Landing from './pages/Landing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />}/>
        <Route path='/home' element={<Home/>} />
        <Route path='/post' element={<Form/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;


import { Routes, Route } from 'react-router-dom'
import layout from './components/layout';
import './App.scss';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<layout />} />
    </Routes>
    </>
  );
}

export default App;

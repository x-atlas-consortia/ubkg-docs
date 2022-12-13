import './App.css'
import { AppProvider } from './context/AppContext'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Doc from './pages/Doc'

function SenNetDocs() {
  return (
      <AppProvider>
          <Router>
            <Routes>
                <Route path='/*' element={<Doc />} />
            </Routes>
          </Router>
      </AppProvider>

  );
}

export default SenNetDocs;

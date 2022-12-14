import './App.css'
import { useEffect } from 'react'
import { AppProvider } from './context/AppContext'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Doc from './pages/Doc'
import apps from './lib/apps/apps'
import NotFound from './pages/NotFound'

function SenNetDocs() {
    useEffect(()=>{
        apps('init')
    })
  return (
      <AppProvider>
          <Router>
            <Routes>
                <Route path='/404' exact element={<NotFound />} />
                <Route path='/*' element={<Doc />} />
            </Routes>
          </Router>
      </AppProvider>

  );
}

export default SenNetDocs;

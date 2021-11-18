import './App.css';
import { React } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar';
import Dashboard from './components/Dashboard'


function App() {

  const data = { earning: "10,000", annual: "215,000", tasks: "40", pending: "12" }

  return (
    <Router>
      <div style={{ display: "flex", gridTemplateColumns: "15% 85%" }}>
        <div>
          <SideBar />
        </div>
        <div className="w-100">
          <Routes>
            <Route path='/' element={<Dashboard value={data} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

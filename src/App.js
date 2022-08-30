import React from 'react';
import { Route, Routes, BrowserRouter} from 'react-router-dom'
import './App.scss';
import history from './history';
import Header from './components/Header';
import Home from './pages/Home';
import StartMeeting from './pages/StartMeeting';
import JoinMeeting from './pages/JoinMeeting';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/start_meeting" element={<StartMeeting />} /> 
          <Route path="/join_meeting" element={<JoinMeeting />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

const PageNotFound = () => {
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", textAlign:"center", height:"calc(100% - 60px)", fontSize:24}}>
      <div>Page Not Found</div>
      <a className='header__button' href='/' style={{marginTop:10, backgroundColor:"#F44336", color:"#FFF"}}>Go Home</a>
    </div>
  );
}

export default App;

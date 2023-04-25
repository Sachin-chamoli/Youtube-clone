import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import './App.css';
import Header from './Header';
import RecommendedVideos from './RecommendedVideos';
import Sidebar from './Sidebar';
import SearchPage from './SearchPage';
import VideoDetail from './VideoDetail';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={
            <>
              <div className="app__page">
                <Sidebar/>
                <RecommendedVideos/>
              </div>
            </>
          }/>
          <Route path='/search/:searchTerm' element={
            <>
              <div className="app__page">
              <Sidebar/>
              <SearchPage/>
            </div>
            </>
          }/>
          <Route path='/video/:id' element={<VideoDetail />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

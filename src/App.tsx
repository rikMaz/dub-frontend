import React from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import UserContextProvider from './tech/context/UserContextProvider';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import MoviePage from './pages/MoviePage';
import ActorPage from './pages/ActorPage';
import VoiceActorPage from './pages/VoiceActorPage';
import UploadContextProvider from './tech/context/UploadContextProvider';
import SearchContextProvider from './tech/context/SearchContextProvider';

function App() {
  return (
      <UserContextProvider>
        <UploadContextProvider>
          <SearchContextProvider>
            <Routes>
              <Route path="/home" element={<HomePage/>}/>
              <Route path="/search" element={<SearchPage/>}/>
              <Route path="/details/movie/:id" element={<MoviePage/>}/>
              <Route path="/details/actor/:id" element={<ActorPage/>}/>
              <Route path="/details/voiceactor/:id" element={<VoiceActorPage/>}/>
              <Route path="/" element={<Navigate replace to="/home"/>}/>
            </Routes>
          </SearchContextProvider>
        </UploadContextProvider>
      </UserContextProvider>
  );
}

export default App;

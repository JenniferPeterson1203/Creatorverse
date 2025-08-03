import { useState } from 'react'
import {  Routes, Route } from "react-router-dom";
import supabase from './client';
import './App.css'

//Pages
import AddCreator from './pages/AddCreator'
import EditCreator from './pages/EditCreator';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import FOUROFOUR from './pages/FOUROFOUR';

console.log('supabase:', supabase);

function App() {
  return (
  <>
<h1>nav goes here</h1>
  
      <Routes>
        
        <Route element={<AddCreator />} path='/add-creator'/>
         <Route element={<EditCreator />} path='/edit-creator/:id'/>
        <Route element={<ShowCreators />} path='/show-creators'/>
        <Route element={<ViewCreator />} path='/view-creator/:id'/> 
        <Route element={<FOUROFOUR />} path='/*'/>
        
      </Routes>
</>

  );
}

export default App;
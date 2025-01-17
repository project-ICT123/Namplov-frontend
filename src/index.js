import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './auth/login';
import Signup from './auth/signup';

import ProfilePage from './User/account';
import Personal from './personal_test/personal';
import QuestionMajor from './major_recommand/questionMajor';
import QuestionPersonal from './personal_test/questionPersonal';
import MajorRecommand from './major_recommand/majorRecommand';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/youracc' element={<ProfilePage/>}/>
        <Route path='/personal_test' element={<Personal/>}/>
        <Route path='/major_test' element={<MajorRecommand/>}/>
        <Route path='/personal_test/all_question/personality' element={<QuestionPersonal/>}/>
        <Route path='/major_test/all_question/major' element={<QuestionMajor/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

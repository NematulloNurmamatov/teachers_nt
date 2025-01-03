import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import "./assets/style/main.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App';
import Teachers from './assets/pages/Teachers';
import Students from './assets/pages/Students';
import ErrorPage from './assets/pages/ErrorPage';
import TeachersDetails from './assets/pages/TeachersDetails';
import AddTeachers from './assets/pages/AddTeachers';
import AddStudent from './assets/pages/AddStudent';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path="/" element={<Teachers/>} />
          <Route path="/students" element={<Students/>} />
          <Route path="/teachersdetails/:id" element={<TeachersDetails/>} />
          <Route path="addteacher" element={<AddTeachers/>} />
          <Route path="addstudent" element={<AddStudent/>} />
          <Route path="*" element={<ErrorPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

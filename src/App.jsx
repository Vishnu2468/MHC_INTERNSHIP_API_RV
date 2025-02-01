import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import UserList from './components/UserApi';
import Task1User from './components/task1userlist';
import Task2todos from './components/task2todos';
import Task3drop from './components/task3dropdown';

function App() {

  return (
    <>
      <Router>
        <div>
          <nav style={styles.navbar}>
            <ul style={styles.navList}>
              <li style={styles.navItem}><Link to="/" style={styles.navLink}>Home</Link></li>
              <li style={styles.navItem}><Link to="/about" style={styles.navLink}>About</Link></li>
              <li style={styles.navItem}><Link to="/contact" style={styles.navLink}>Contact</Link></li>
              <li style={styles.navItem}><Link to="/users" style={styles.navLink}>User List</Link></li>
              <li style={styles.navItem}><Link to='/task1' style={styles.navLink}>Task1</Link></li>
              <li style={styles.navItem}><Link to='/task2' style={styles.navLink}>Task2</Link></li>
              <li style={styles.navItem}><Link to='/task3' style={styles.navLink}>Task3</Link></li>
            </ul>
          </nav>
        </div>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/users' element={<UserList />} />
            <Route path='/task1' element={<Task1User />} />
            <Route path='/task2' element={<Task2todos />} />
            <Route path='/task3' element={<Task3drop/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

const styles = {
  navbar: {
    background: 'linear-gradient(45deg, #ff6f61, #ff7e5f, #feb47b)', // Vibrant gradient
    padding: '10px 20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    position: 'fixed',   // Fixes the navbar to the top
    top: '0',            // Ensures it's at the top of the page
    left: '0',           // Ensures it stretches across the full width of the page
    width: '100%',       // Makes sure it spans the entire width of the page
    zIndex: '1000',      // Makes sure it's on top of other content
  },
  navList: {
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none',
    padding: '0',
    margin: '0',
  },
  navItem: {
    margin: '0 15px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#fff',  // White text
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'color 0.3s ease, transform 0.3s ease',
  },
}

export default App;

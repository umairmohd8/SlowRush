import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
 
function Home (){
    return (
    <div className="App">
      <h1>Welcome to the SlowRush..!</h1>
      <ul >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/gcp">GCP </Link>
        </li>
        <li>
          <Link to="/gel">GEL </Link>
        </li>
      </ul>
    </div>
    )
}
 
export default Home;
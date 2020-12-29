import React from 'react';
import '../src/Styles/home.css';
import Categories from "./Categories";


function Home() {
  return (
    <div className = 'container'>
      <div className="content">
      <h1 className = 'homeHeader'>Savol jdj savol</h1> 
      <p className = 'homeText'>dhasdj hjdashdj  dasjkh djashda</p>
      </div>
      <Categories />
    </div>
  );
}

export default Home;

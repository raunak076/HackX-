import React from 'react'
import "./Home.css"

const Home_1 = () => {
  const colors = ["#ff5733", "#ffa333", "#33ff57", "#33a3ff", "#e633ff"];

function createRandomBall() {
    const ball = document.createElement("div");
    ball.className = "ball";
    ball.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    ball.style.left = `${Math.random() * 100}vw`;
    document.querySelector(".background").appendChild(ball);
}

// Create random balls at intervals
setInterval(createRandomBall, 2000);

   
  return (
    <>
    <div class="pqw">
    <div class="background">
        <div class="ball">
      <h2>
            Inventory Management System
        </h2></div>
        <div class="ball">  <h2>
            Inventory Management System
        </h2></div>
        <div class="ball">  <h2>
            Inventory Management System
        </h2></div>
        <div class="ball">  <h2>
            Inventory Management System
        </h2></div>
        <div class="ball">  <h2>
            Inventory Management System
        </h2></div>
    </div>

     </div> 
    </>
  )
}

export default Home_1

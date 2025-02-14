// src/App.jsx
import { useState } from "react";
import './App.css'

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);

  const [zombieFighters] = useState([
      {
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://via.placeholder.com/150/92c952',
      },
      {
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://via.placeholder.com/150/771796',
      },
      {
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://via.placeholder.com/150/24f355',
      },
      {
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/d32776',
      },
      {
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://via.placeholder.com/150/1ee8a4',
      },
      {
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://via.placeholder.com/150/66b7d2',
      },
      {
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://via.placeholder.com/150/56acb2',
      },
      {
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://via.placeholder.com/150/8985dc',
      },
      {
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://via.placeholder.com/150/392537',
      },
      {
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/602b9e',
      },
    ])

    const calculateTotalStrength = () => {
      return team.reduce((total, fighter) => total + fighter.strength, 0);
    }
    const calculateTotalAgility = () => {
      return team.reduce((total, fighter) => total + fighter.agility, 0);
    }

    const handleAddFighter = (fighter) => {
      if (money >= fighter.price) {
        const newTeam = [...team, fighter];
        const newMoney = money - fighter.price;   

        setTeam(newTeam);
        setMoney(newMoney);
        setTotalStrength(calculateTotalStrength());
        setTotalAgility(calculateTotalAgility());       
      } else{
        console.log("Not enough money to buy")
      }
    }
    const handleRemoveFighter = (index) => {
      const removedFighter = team[index];
      const updatedTeam = team.filter((fighter, idx) => idx !== index);
      const newMoney = money + removedFighter.price;
  
      setTeam(updatedTeam);
      setMoney(newMoney);
      setTotalStrength(calculateTotalStrength());
      setTotalAgility(calculateTotalAgility());
    }; 
  return (
    <>
    <div>
      <h1>Hello world!</h1>
    </div>
    <div>
      <h2>Current Funds:{money}</h2>
      
      {team.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
        <>
        <p>Your Team:</p><ul>
              {team.map((fighter, idx) => (
                <li key={idx}>
                  <img src={fighter.img} alt={fighter.name} />
                  <h3>{fighter.name}</h3>
                  <p>Price: {fighter.price}</p>
                  <p>Strength: {fighter.strength}</p>
                  <p>Agility: {fighter.agility}</p>
                  <button onClick={() => handleRemoveFighter(idx)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <p>Total Team Strength: {totalStrength}</p>
            <p>Total Team Agility: {totalAgility}</p>
        </>
      )}
    </div>
    <br />
    <div>
 
        <ul>
          {zombieFighters.map((fighter, idx) => (
            <li key={idx}>
              <img src={fighter.img} alt={fighter.name}/> 
              <h3>{fighter.name}</h3>
              <p>Price: {fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <button onClick={() => handleAddFighter(fighter)}>
                Add Fighter
              </button>
            </li>
          ))}
        </ul>
    </div></>
  );
}

export default App

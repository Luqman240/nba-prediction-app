import { useEffect, useState } from 'react'
import './App.css'
import TeamSelect from './components/TeamSelect'
import nbaTeams from './shared/types/team';

function App() { 

  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");


  useEffect(() => {
    console.log("Team 1 : ", team1);
    console.log("Team 2 : ", team2);
  }, [team1, team2]);
  
  const handlePredict = () => {
    if(team1 === "" || team2 === ""){
      alert("Please select two teams");
      return;
    }

    if(team1 === team2){
      alert("Please select two different teams");
      return;
    }

    const team1Data = getTeamStats(team1);
    const team2Data = getTeamStats(team2);

    console.log("Team 1 stats : ", team1Data);
    console.log("Team 2 stats : ", team2Data); 
  }

  const getTeamStats = (team: string) => {
    const teamStats = nbaTeams.find((teamObj) => teamObj.acronym === team);
    return teamStats;
  }

  return (
    <>
      <div>
        <h2>NBA Game Prediction</h2>
        <h4>Predict the outcome of a match up using NBA datas from 2013 to 2023.</h4>
        <h3>Select your teams :</h3>
      </div>
      
      <div className="select-wrapper">
        <TeamSelect teamChoice={team1} onSelectTeam={setTeam1}></TeamSelect>
        <TeamSelect teamChoice={team2} onSelectTeam={setTeam2}></TeamSelect>
      </div>

      <div className="card">
        <button onClick={()=>handlePredict()}>
          Who will win ?
        </button>
      </div>
    </>
  )
}

export default App

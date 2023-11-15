import { ChangeEvent } from "react";
import nbaTeams from "../shared/types/team";

function TeamSelect(props : {teamChoice: string, onSelectTeam: (team: string) => void;}){
    
    
    const listItems = nbaTeams.map((team) =>
        <option key={team.acronym} value={team.acronym}>{team.name}</option>
    );

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedTeam = event.target.value;
        props.onSelectTeam(selectedTeam);
    };

    return(
        <select onChange={handleChange}>
          <option value="">Team</option>
          {listItems}
        </select>
    )
}

export default TeamSelect
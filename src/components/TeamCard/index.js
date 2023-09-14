// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachCard} = props
  const {name, id, teamImg} = eachCard
  return (
    <Link to={`/team-matches/${id}`}>
      <div className="card">
        <img src={teamImg} alt={name} />
        <div className="p">
          <p>{name}</p>
        </div>
      </div>
    </Link>
  )
}
export default TeamCard

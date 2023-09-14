// Write your code here
// Write your code here
import './index.css'

const MatchCard = props => {
  const {eachM} = props
  const {result} = eachM
  const cLogo = eachM.competing_team_logo
  const cTeam = eachM.competing_team
  const alt = `competing team ${cTeam}`
  const status = eachM.match_status
  const rORg = status === 'Won' ? 'green' : 'red'

  return (
    <li className="card-mini">
      <img src={cLogo} alt={alt} className="c-logo" />
      <p className="mini-p">{cTeam}</p>
      <p className="mini-p">{result}</p>
      <p className={`mini-p ${rORg}`}>{status}</p>
    </li>
  )
}

export default MatchCard

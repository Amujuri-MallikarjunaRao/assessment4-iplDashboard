// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {umpires} = latestMatchDetails

  const leftA = latestMatchDetails.competing_team
  const leftB = latestMatchDetails.date
  const leftC = latestMatchDetails.venue
  const leftD = latestMatchDetails.result
  const centerLogo = latestMatchDetails.competing_team_logo
  const logoAlt = `latest match ${leftA}`
  const firstInnings = latestMatchDetails.first_innings
  const secondInnings = latestMatchDetails.second_innings
  const manOfTheMatch = latestMatchDetails.man_of_the_match
  const umpire = umpires

  return (
    <div className="dark-container">
      <div className="left-column">
        <p className="left">{leftA}</p>
        <p className="left">{leftB}</p>
        <p className="left">{leftC}</p>
        <p className="left">{leftD}</p>
      </div>
      <img src={centerLogo} alt={logoAlt} className="center-logo" />
      <div className="right-side">
        <p className="right">First Innings</p>
        <p className="right">{firstInnings}</p>
        <p className="right">Second Innings</p>
        <p className="right">{secondInnings}</p>
        <p className="right">Man of the Match</p>
        <p className="right">{manOfTheMatch}</p>
        <p className="right">Umpire</p>
        <p className="right">{umpire}</p>
      </div>
    </div>
  )
}

export default LatestMatch

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
  const logoAlt = `competing team ${leftA}`
  const firstInnings = latestMatchDetails.first_innings
  const secondInnings = latestMatchDetails.second_innings
  const manOfTheMatch = latestMatchDetails.man_of_the_match
  const umpire = umpires

  return (
    <div className="dark-container">
      <p>jjj</p>
    </div>
  )
}

export default LatestMatch

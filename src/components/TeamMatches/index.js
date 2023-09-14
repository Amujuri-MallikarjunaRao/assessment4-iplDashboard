// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class TeamMatches extends Component {
  state = {teamDetails: [], loading: true}

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const updatedInfo = {
      bannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    this.setState({loading: false, teamDetails: updatedInfo})
    console.log(updatedInfo)
  }

  renderTeamsMatches = () => {
    const {teamDetails} = this.state
    const {bannerUrl, latestMatchDetails, recentMatches} = teamDetails

    return (
      <div className="containerr">
        <div className="box">
          <img src={bannerUrl} alt="team banner" className="banner" />
          <div>
            <p className="b-title">Latest Matches</p>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
          </div>

          <div className="bottom-cards-container">
            <ul>
              {recentMatches.map(eachM => (
                <MatchCard key={eachM.id} eachM={eachM} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {loading} = this.state
    return (
      <div>
        {loading ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          this.renderTeamsMatches()
        )}
      </div>
    )
  }
}

export default TeamMatches

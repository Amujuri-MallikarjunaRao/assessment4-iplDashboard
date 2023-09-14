// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
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
          <p>,,,</p>
        </div>
      </div>
    )
  }

  render() {
    const {loading} = this.state
    return (
      <div>
        {loading ? (
          <Loader type="Oval" color="#ffffff" height={50} />
        ) : (
          this.renderTeamsMatches()
        )}
      </div>
    )
  }
}

export default TeamMatches

// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {loading: true, teamCardList: []}

  componentDidMount() {
    this.getTeamCardsData()
  }

  getTeamCardsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const formattedData = data.teams.map(ei => ({
      name: ei.name,
      id: ei.id,
      teamImg: ei.team_image_url,
    }))

    this.setState({loading: false, teamCardList: formattedData})
  }

  renderTeamCards = () => {
    const {teamCardList} = this.state

    return (
      <div className="container">
        <div className="heading">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo"
          />
          <p>IPL Dashboard</p>
        </div>
        <div className="cards-container">
          <ul>
            {teamCardList.map(eachCard => (
              <TeamCard key={eachCard.id} eachCard={eachCard} />
            ))}
          </ul>
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
          this.renderTeamCards()
        )}
      </div>
    )
  }
}

export default Home

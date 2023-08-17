import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return isDarkTheme ? (
        <div className="dark-container">
          <Navbar className="dark" />
          <div className="home-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
              alt="cross"
              className="home-image"
            />
            <p className="home-text-dr">Home</p>
          </div>
        </div>
      ) : (
        <div className="light-container">
          <Navbar />
          <div className="home-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
              alt="cross"
              className="home-image"
            />
            <p className="home-text">Home</p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home

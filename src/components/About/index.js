import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return isDarkTheme ? (
        <div className="dark-container">
          <Navbar />
          <div className="about-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
              alt="cross"
              className="about-image"
            />
            <p className="about-text-dr">About</p>
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <div className="about-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
              alt="cross"
              className="about-image"
            />
            <p className="about-text">About</p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About

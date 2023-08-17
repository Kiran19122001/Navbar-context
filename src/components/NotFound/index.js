import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return isDarkTheme ? (
        <div className="dark-container">
          <Navbar />
          <div className="nf-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="cross"
              className="nf-img"
            />
            <h4 className="dark-text">Lost your way?</h4>
            <p className="dark-text">
              We cannot find the page you are looking for
            </p>
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <div className="nf-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="cross"
              className="nf-img"
            />
            <h4>Lost your way?</h4>
            <p>We cannot find the page you are looking for</p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound

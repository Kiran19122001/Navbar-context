import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const themeClick = () => {
        toggleTheme()
      }
      return isDarkTheme ? (
        <nav className="nav-header-cont-dark">
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
              alt="cross"
              className="logo"
            />
          </Link>
          <div className="components-link">
            <Link to="/" className="link-comp-dr">
              Home
            </Link>
            <Link to="/about" className="link-comp-dr">
              About
            </Link>
          </div>
          <button type="button" className="theme-logo" onClick={themeClick}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
              alt="cross"
              className="theme"
            />
          </button>
        </nav>
      ) : (
        <nav className="nav-header-cont">
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
              alt="cross"
              className="logo"
            />
          </Link>
          <div className="components-link">
            <Link to="/" className="link-comp">
              Home
            </Link>
            <Link to="/about" className="link-comp">
              About
            </Link>
          </div>
          <button type="button" className="theme-logo" onClick={themeClick}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
              alt="cross"
              className="theme"
            />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar

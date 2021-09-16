// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const isChangeTheme = () => {
        toggleTheme()
      }
      return isDarkTheme ? (
        <div className="main-navbar-container navbar-color">
          <img
            className="website-logo"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
          />
          <ul className="nav-title-row">
            <Link className="nav-link" to="/">
              <li className="nav-title">Home</li>
            </Link>
            <Link className="nav-link" to="/about">
              <li className="nav-title">About</li>
            </Link>
          </ul>
          <button
            testid="theme"
            onClick={isChangeTheme}
            type="button"
            className="theme-button"
          >
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
              alt="theme"
            />
          </button>
        </div>
      ) : (
        <div className="main-navbar-container">
          <img
            className="website-logo"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
          />
          <ul className="nav-title-row">
            <Link className="nav-link" to="/">
              <li className="nav-title nav-dark">Home</li>
            </Link>
            <Link className="nav-link" to="/about">
              <li className="nav-title nav-dark">About</li>
            </Link>
          </ul>
          <button
            testid="theme"
            onClick={isChangeTheme}
            type="button"
            className="theme-button"
          >
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
              alt="theme"
            />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar

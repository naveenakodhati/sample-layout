// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <Navbar />
          {isDarkTheme ? (
            <div className="main-not-found-container not-found-color">
              <img
                className="not-found-image"
                img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
              />
              <h1 className="not-found-title">Lost Your Way?</h1>
              <p className="not-found-para">
                We cannot seem to find the page you are looking for.
              </p>
            </div>
          ) : (
            <div className="main-not-found-container">
              <img
                className="not-found-image"
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
              />
              <h1 className="not-found-title not-found-dark">Lost Your Way?</h1>
              <p className="not-found-para not-found-dark">
                We cannot seem to find the page you are looking for.
              </p>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound

import Header from '../Header'

import './index.css'

const NotFound = () => (
  <div className="div4">
    <Header />
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
        className="img4"
      />
      <h1 className="heading">Lost Your Way?</h1>
      <p className="description">
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </p>
    </div>
  </div>
)

export default NotFound

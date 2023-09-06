import Popup from 'reactjs-popup'

import {withRouter, Link} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'

import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <div className="con3">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
      />
    </Link>
    <div>
      <Popup
        modal
        trigger={
          <button type="button" data-testid="hamburgerIconButton">
            <GiHamburgerMenu />
          </button>
        }
      >
        {close => (
          <div className="con2">
            <div className="con6">
              <button
                type="button"
                data-testid="closeButton"
                onClick={() => close()}
              >
                <IoMdClose />
              </button>
            </div>
            <div className="con8">
              <ul className="con7">
                <li>
                  <Link to="/" onClick={() => close()} className="list1">
                    <AiFillHome className="para" />
                    <p>Home</p>
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={() => close()} className="list1">
                    <BsInfoCircleFill className="para" />
                    <p>About</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default withRouter(Header)

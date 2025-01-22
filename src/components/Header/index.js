/* eslint-disable import/no-extraneous-dependencies */
import Cookies from 'js-cookie'
import {useContext} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'

import CartContext from '../../context/CartContext'

import './index.css'

const Header = props => {
  const {cartList, restaurantName} = useContext(CartContext)

  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const renderCartIcon = () => (
    <div className="cart-icon-link">
      <Link to="/cart">
        <button type="button" className="cart-icon-button" data-testid="cart">
          <AiOutlineShoppingCart className="cart-icon" />
        </button>
      </Link>
      <div className="cart-count-badge d-flex justify-content-center align-items-center">
        <p className="m-0 cart-count">{cartList.length}</p>
      </div>
    </div>
  )

  return (
    <header className="p-4 d-flex flex-row align-items-center nav-header">
      <Link to="/">
        <h1 className="m-0 logo-heading">UNI Resto Cafe</h1>
      </Link>
      <div className="d-flex flex-row align-items-center ms-auto">
        {renderCartIcon()}
        <button
          type="button"
          className="logout-btn btn btn-outline-danger"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    </header>
  )
}

export default withRouter(Header)

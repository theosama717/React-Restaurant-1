import Logo from '../assets/logo.png'

import '../styles/Header.scss'

const Header = () => {
  return (
    <nav>
        <div className="container header-con">
            <div className="logo">
                <img src={Logo} alt="" />
            </div>

            <div className="nav-toggle">
                <i className="fa-solid fa-bars"></i>
            </div>
        </div>
    </nav>
  )
}

export default Header
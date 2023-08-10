import './Navbar.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LanguageIcon from '@mui/icons-material/Language';

const Navbar = () => {
  return (
    <nav>
        <div className="container">
            <div className="logo">
                <h1>fiverr</h1>
                <span className="dot"></span>
            </div>
            <div className="nav-links">
                <ul>
                    <li>Business soutions <KeyboardArrowDownIcon/></li>
                    <li>Explore</li>
                    <li><LanguageIcon fontSize='inherit'/> English</li>
                    <li>Become a seller</li>
                    <li>Sign in</li>
                    <button>Join</button>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
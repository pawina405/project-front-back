import {Link, useNavigate} from 'react-router-dom'
import useAuth from '../hooks/useAuth';

const guestNav = [
  { to : '/', text: <span className="text-white">Login</span> },
  { to : '/register', text: <span className="text-white">Register</span> },
]

const userNav = [
  { to: '/', text: <span className="text-white">Home</span> },
  { to: '/new', text: <span className="text-white">บัญชีของฉัน</span> },
];


export default function Header() {
  const {user, logout} = useAuth() 
  const finalNav = user?.id ? userNav : guestNav

  const navigate = useNavigate()

  const hdlLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="navbar bg-blue-800">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl text-white">Bookmarket, {user?.id ? user.username : 'Guest'}</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          { finalNav.map( el => (
            <li key={el.to} >
              <Link to={el.to}>{el.text}</Link>
            </li>
          ))}
          { user?.id && (
            <li>
              <Link to='#' onClick={hdlLogout} className="text-white">Logout</Link>
            </li>
          ) }
        </ul>
      </div>
    </div>
  );
}

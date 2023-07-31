import React from 'react'
import './Sidebar.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Sidebar = () => {

  const user = useSelector(state => state.users.currentUser)
  return (
    <div >
        <main className="main">
      <aside className="sidebar">
        <nav className="nav">
          <ul>{
            user.username ==="admin" 
            ?
           ( <>
           <li className="active"> <Link to="/admin" className="logout-link">Welcome</Link></li>
            <li><Link to="/admin/teamchat">Teamchat</Link></li>
            </>)
            :
            (
              <>
              <li className="active"> <Link to="/EmployeeDashboard" className="logout-link">Welcome</Link></li>
            <li><Link to="/EmployeeDashboard/teamchat">Teamchat</Link></li>
              </>
            )
            }
            {/* <li><a href="#">What We Do</a></li>
            <li><a href="#">Get In Touch</a></li> */}
            
          </ul>

          <button className="logout-btn">
              <Link to="/" className="logout-link">Logout</Link>
            </button>
        </nav>
      </aside>

    </main>
  </div>
  )
}

export default Sidebar
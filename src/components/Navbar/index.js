import React from 'react'
import {Link, useHistory} from 'react-router-dom'

export default function Navbar() {
    const history = useHistory();

    const logout = () => {
        localStorage.removeItem('x-auth-token')
        history.push('/login')
    }

    return (
        <nav className='navigation'>
            <ul className='navigation-list'>
                <li className='navigation-item'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='navigation-item'>
                    <Link to='/spells'>Spell List</Link>
                </li>
                <li className='navigation-item'>
                    <Link to='/characters'>Create a Character</Link>
                </li>
                <button onClick={logout}>Logout</button>
            </ul>
        </nav>
    )
}

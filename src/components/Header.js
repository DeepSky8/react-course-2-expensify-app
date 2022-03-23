import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { startLogout } from '../actions/auth';
import { connect } from 'react-redux';



export const Header = ({ startLogout }) => (
    <header className='header'>
        <div className='content-container'>
            <div className='header__content'>
                <Link
                    to="/dashboard"
                    className='header__title'>
                    <h1>Expensify</h1>
                </Link>
                <button className='button button--link' name='logout' onClick={startLogout}>Logout</button>
            </div>
        </div>
    </header>
)

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);

// <NavLink to="/help" className={({ isActive }) =>
//                 isActive ? 'is-active' : undefined
//             }>
//                 Help
//             </NavLink>

// <NavLink to="/" className={({ isActive }) =>
// isActive ? 'is-active' : undefined
// }>Login
// </NavLink>

// <NavLink to="/create" className={({ isActive }) =>
// isActive ? 'is-active' : undefined
// }>
// Create Expense
// </NavLink>
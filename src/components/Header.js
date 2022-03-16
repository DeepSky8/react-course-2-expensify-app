import React from 'react';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';
import { connect } from 'react-redux';



export const Header = ({ startLogout }) => (
    <header>
        <h1>Expensify</h1>
        <p>
            <NavLink to="/dashboard" className={({ isActive }) =>
                isActive ? 'is-active' : undefined
            }>
                Dashboard
            </NavLink>
            <NavLink to="/create" className={({ isActive }) =>
                isActive ? 'is-active' : undefined
            }>
                Create Expense
            </NavLink>
            <button name='logout' onClick={startLogout}>Logout</button>
        </p>
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
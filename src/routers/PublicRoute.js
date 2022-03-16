import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import Header from "../components/Header";

export const PublicRoute = ({ children, isAuthenticated }) => {
    return !isAuthenticated ? (
        <div>
            {children}
        </div>
    ) : (
        <Navigate to="dashboard" />
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PublicRoute)
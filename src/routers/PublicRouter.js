/* eslint-disable react/prop-types */
// import React from 'react'

// import { useSelector } from 'react-redux'
// import { Route, Navigate } from 'react-router'

// import { authSelector } from '../features/Login/loginSlice'

// export const PublicRouters = ({ path, component, restrict, exact }) => {
//     let isAuthenticated = useSelector(authSelector)
//     return isAuthenticated && path === '/login' ? (
//         <Navigate from="*" to="/home" />
//     ) : (
//         <Route path={path} component={component} exact={exact} restrict={restrict} />
//     )
// }

// export default PublicRouters
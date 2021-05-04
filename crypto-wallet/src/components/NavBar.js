import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'green',
  textDecoration: 'none',
  color: 'white',
}



const NavBar = () => {
    return (
      <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
        <NavLink 
          style={link} 
          to="/"
          exact
          activeStyle={{
            background: 'orange',
            color: 'black'
          }}
        >
          Home
        </NavLink>
        <NavLink 
          style={link} 
          to="/market"
          activeStyle={{
            background: 'orange',
            color: 'black'
          }}
        >
          Market
        </NavLink>
        <NavLink 
          style={link} 
          to="/wallet"
          activeStyle={{
            background: 'orange',
            color: 'black'
          }}
        >
          My Wallet
        </NavLink>
      </div>
    );
  }
  
  export default NavBar;
  
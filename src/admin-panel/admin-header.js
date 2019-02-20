import React from 'react'

const Header = (props) => {
  return (
    <div className="admin-panel-header">
      <h2>Admin panel</h2>
      {props.children}
    </div>
  )
}

export default Header;

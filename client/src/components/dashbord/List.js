import React from 'react'

const List = ({ user }) => {
  return (
    <thead> 
    <tr>
      <th>#</th>
      <th>{user.name}</th>
      <th>{user.lastname}</th>
      <th>{user.email}</th>
    </tr>
    </thead>  
  )
}

export default List

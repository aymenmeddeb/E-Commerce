import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../js/action/users'
import List from './List'

const ListUser = () => {
  const dispatch = useDispatch()
  useEffect(async () => {
    dispatch(getUser())
  }, [dispatch])
  const Users = useSelector(state => state.userReducer.users)
  return (
    <div className="listuser">
      <Table striped bordered hover variant="dark" >
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>

        {
          Users.map(el => <List key={el._id} user={el} />)
        }


      </Table>
    </div>
  )
}

export default ListUser

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { FiltersState, setFilter } from '../redux/filtersSlice'
import { User } from '../redux/usersApi.ts'
import FilterInput from './FilterInput.tsx'

interface UserTableProps {
  users: User[]
}

export const UserTable: React.FC<UserTableProps> = ({ users }) => {
  const dispatch = useDispatch()
  const filters = useSelector((state: RootState) => state.filters)

  const filteredUsers = users.filter(user => {
    return Object.entries(filters).every(([key, value]) => {
      if (value) {
        return (user[key as keyof typeof user] as string)
          .toLowerCase()
          .includes(value.toLowerCase())
      }
      return true
    })
  })

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    dispatch(setFilter({ field: name as keyof FiltersState, value }))
  }

  return (
    <div className='table-container'>
      <table>
        <thead>
          <tr>
            {Object.keys(filters).map(key => (
              <th key={key}>
                <FilterInput
                  name={key}
                  value={filters[key]}
                  onChange={handleSearch}
                />
              </th>
            ))}
          </tr>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

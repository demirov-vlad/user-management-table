import { useGetUsersQuery } from './redux/usersApi'
import { UserTable } from './components/UserTable'
import './styles/App.scss'

function App() {
  const { data: users = [], isLoading, error } = useGetUsersQuery()

  if (isLoading)
    return (
      <div className='message loader'>
        <p>Loading...</p>
      </div>
    )
  if (error)
    return (
      <div className='message error'>
        <p>
          Something went wrong! <br /> Please try again later.
        </p>
      </div>
    )

  return (
    <div className='App'>
      <h1>User Management</h1>
      <UserTable users={users} />
    </div>
  )
}

export default App

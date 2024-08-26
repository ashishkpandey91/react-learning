import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'
function App() {


  return (
    <><div className='flex flex-col mt-8 justify-center items-center'>
      <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
    </div>
    </>
  )
}

export default App

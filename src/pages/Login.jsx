import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

  const [user, setUser ] = useState('')
  const [password, setPassword ] = useState('')
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if( user === 'espai_admin' && password === '123') {
      navigate('/gestio/productes')
    } else {
      alert('Error, password o user incorrectes')
    }

  }

  return (
    <div className="w-full h-screen flex justify-center items-center font-Roboto bg-gradient-to-b from-dark/25 to-primary/25">
      <div className="bg-secondary w-96 h-1/2 rounded-lg shadow-lg">

        <form action=""
        className="flex flex-col items-center justify-center p-8 gap-y-6"
        >
          <div className="w-full">
            <label htmlFor="userName">Nom d'usuari</label>
            <input type="text" name="user" id="user" className="block w-full  rounded-full border-none shadow-lg my-1"
            value={user}
            onChange={ (e) => setUser(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label htmlFor="userName">Password</label>
            <input type="text" name="user" id="user" className="block w-full  rounded-full border-none shadow-lg my-1"
            value={password}
            onChange={ (e) => setPassword(e.target.value)}
            />    
          </div>

          <input type="submit" value="Login" 
          className="bg-primary hover:bg-primary/50 cursor-pointer w-full py-2 rounded-full shadow-lg my-4"
          onClick={handleLogin}
          />

        </form>
      </div>
    </div>
  )
}

export default Login
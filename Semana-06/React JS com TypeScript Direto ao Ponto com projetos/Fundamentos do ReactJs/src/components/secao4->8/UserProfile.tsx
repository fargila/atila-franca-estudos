import { useState, useEffect } from "react"

interface UserProfileProps {
    userId: number
}
interface User {
    id: number
    name: string
    email: string
}

const UserProfile: React.FC<UserProfileProps> = ({ userId }) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const searchUser = async() => {
        const answer = await fetch(`https://jsonplaceholder.typicode.com/users/${ userId }`)
        const userData: User = await answer.json()

        setUser(userData)
    }

    if(userId) { searchUser() }
  }, [userId])

    return (
    <div>
        {user ? 
        (<div>
            <h1>{user.name}</h1>
            <p>{user.email}</p> 
        </div>
        ): 
        (<p>Carregando perfil do usuário...</p>)}
    </div>
  )
}

export default UserProfile

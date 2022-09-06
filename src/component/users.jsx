import React from 'react'
import { useState } from 'react'
import { data } from '../constant'


export default function Users() {
    const [users, setUsers] = useState(data)
    const [user, setUser] = useState({ name: '', age: '' })

    const handleChange = (e) => {
        let nameUser = ''
        let ageUser = ''
        if (e.target.name === `name`) {

            nameUser = e.target.value
            setUser({
                ...user,
                name: nameUser

            })
        }
        if (e.target.name === `age`) {
            setUser({
                ...user,
                age: ageUser

            })
            ageUser = e.target.value
        }
        setUser({
            name: nameUser,
            age: ageUser

        })
    }
    const handleClick = () => {
        setUsers([...users, user])
    }
    return (
        <div>
            <input name='name' type="text" value={user.name} onChange={(e) => handleChange(e)} />
            <input name='age' type="text" value={user.age} onChange={(e) => handleChange(e)} />
            <button onClick={handleClick}>Add</button>
            {users.map((item, index) => (
                <div key={index}>
                    <h1>{item.name}</h1>
                    <h1>{item.age}</h1>
                </div>
            ))
            }
        </div >
    )
}

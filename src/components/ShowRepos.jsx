import React, { useEffect, useState } from 'react';

export default function ShowRepos() {
    const [newRepos, setnewRepos] = useState([])
    

    useEffect(() => {
        carregaRepos()

    }, [])

    const carregaRepos = async()=>{
        const resp = await fetch("https://api.github.com/users")
        const data = await resp.json()
        setnewRepos(data)
    }

    return(
        <div>
            <h2>Usuarios do Github API</h2>
            <ul>
                {newRepos.map((users, i)=> 
                    <div id='box-users'>
                        <h1>@{users.login}</h1>
                        <img src={users.avatar_url} alt=""/>
                        <h3>User Id: {users.id}</h3>
                        <a>Link: {users.url}</a>



                    </div>
                
                )}
            </ul>
    

            

        </div>
    )
}
import React, { useState, useEffect } from 'react';

const DEFAULT_URL = "http://localhost:5000/users";

async function fetchPosts() {
    const response = await fetch(DEFAULT_URL);
    const blogPosts = await response.json();
    return blogPosts;
}

function ListaUsu(){
    async function fetchPosts2() {
        const response2 = await fetch("http://localhost:5000/users/"+ selectedUser);
        const blogPosts2 = await response2.json();
        return blogPosts2;
    }

    const [data, setData] = useState([]);
    const [selectedUser, setSelectedUser] = useState();
    const [DatosUser, setDatosUser] = useState();
    


    useEffect(function(){
        fetchPosts().then((fetchPosts)=>setData(fetchPosts));
    },[])

    useEffect(function(){
        fetchPosts2().then((fetchPosts2)=>{setDatosUser(fetchPosts2) }
        );
    },[selectedUser])


    return(
        <div>
           {data.map((user) => (
                <li>
                    {user.name}
                    <span>        </span>
                    <button onClick={()=>setSelectedUser(user.id)}>Mostrar datos</button>
                    {DatosUser && DatosUser.id === user.id && (
                        <div>
                            <p>Detalles del usuario:</p>
                            <p>{DatosUser.name}</p>
                            <p>{DatosUser.phone}</p>
                            <p>{DatosUser.email}</p>
                        
                        </div>
                    )}
                </li>
             ))
            }
        </div>
    );

};

export default ListaUsu;
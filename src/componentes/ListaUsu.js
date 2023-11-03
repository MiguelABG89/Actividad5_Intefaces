import React, { useState, useEffect } from 'react';

const DEFAULT_URL = "http://localhost:5000/users";

async function fetchPosts() {
    const response = await fetch(DEFAULT_URL);
    const blogPosts = await response.json();
    return blogPosts;
}
  
function ListaUsu(){
    const [data, setData] = useState([]);
    const [selectedUser, setSelectedUser] = useState();
    const [id, setid] = useState(false);  

    useEffect(function(){
        fetchPosts().then((fetchPosts)=>setData(fetchPosts));
    },[])
    useEffect(function() {
        fetchPosts().then((fetchPosts)=>setData(fetchPosts));
    }, [selectedUser]);

    const handleMostrarDatosClick = (user, id) => {
        if (selectedUser && selectedUser.id === user.id) {
            setSelectedUser(null);
            setid(id);
        } else {
            setSelectedUser(user);
            setid(id);
        }
    };

    return(
        <div>
           {data.map((user) => (
                <li>
                    {user.name}
                    <span>        </span>
                <button onClick={()=>handleMostrarDatosClick(user, user.id)}
                >Mostrar datos</button>
                </li>
             ))
            }
        </div>
    );

};

export default ListaUsu;
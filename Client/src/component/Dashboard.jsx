import Navbar from "./navbar";
import ListUser from "./ListUser";
import SalaireChart from "./Histograme";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Dashboard(){
    const url = 'http://localhost:3000/enseignant/';
    const token = localStorage.getItem("token");
    const user = JSON.parse(
        localStorage.getItem("user")
    );
    const [users, setUsers] = useState([]);
    const fetchUser = async () =>{
            try{
                const res = await axios.get(url,
                    {
                    headers: {
                      Authorization: `Bearer ${token}`
                    }
                }
                );
                setUsers(res.data);
                console.log(res.data);
            }
            catch(err){
                console.log(err)
            }
        }

        //mettre à jours automatiquement la liste
    useEffect(()=>{
        fetchUser();
    }, []);
    return(
        <>
            <div>{user.username}</div>
            <Navbar/>
            <ListUser/>
            <SalaireChart users={users} />
        </>
    );
}
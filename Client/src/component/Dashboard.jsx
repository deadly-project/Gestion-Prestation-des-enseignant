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
    const [max, setMax] = useState(0);
    const [min, setMin] = useState(0)
    const [total, setTotal] = useState(0)
    const calculSalaire = (e) =>{
        for(let i=0;i>e.length;i++){
            total=+e[i];
            if(e[i]>max){
                max=e[i];
            }
            if(e[i]<min){
                min=e[i];
            }
        }
    }
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
                const salaries = res.data?.length
                    ? res.data.map(u => u.Taux_horaire * (u.Nb_heure || 0))
                    : [];
                    setMax(salaries.length ? Math.max(...salaries) : 0);
                    setMin(salaries.length ? Math.min(...salaries) : 0);
                    setTotal(salaries.length ? salaries.reduce((a, b) => a + b, 0) : 0);
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
            <div>
                {"Total :"+total+" Ar"}
                {"Maximum :"+max+" Ar"}
                {"Minimum :"+min+" Ar"}
            </div>
            <ListUser/> 
            <SalaireChart users={users} />
        </>
    );
}
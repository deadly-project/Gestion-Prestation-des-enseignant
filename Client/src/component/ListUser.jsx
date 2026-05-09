import axios from "axios"
import { useEffect, useState } from "react"
import "../css/Compenents/List-users.css"
export default function ListUser(){
    const url = 'http://localhost:3000/enseignant/';
    const token = localStorage.getItem("token");
    const [users, setUsers] = useState([]);
    useEffect(()=>{
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
                console.log(res.data);}
            catch(err){
                console.log(err)
            }
        }
        fetchUser();
    }, []);

    const handleEdit = async (e) =>{
        console.log(e);
    }
    const handleDelete = async (e) =>{
        console.log(e);
    }
    return(
        <div>
            <h2>Listes des Enseignants </h2>
            <table className="table-users">
    <thead>
        <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Poste</th>
            <th>Taux horaire</th>
            <th>Heures</th>
            <th>Salaire</th>
            <th>Actions</th>
        </tr>
    </thead>

    <tbody>
        {users.map((u) => (
            <tr key={u._id}>
                <td>{u.Nom}</td>
                <td>{u.Prenom}</td>
                <td>{u.Poste}</td>
                <td>{u.Taux_horaire} Ar</td>
                <td>{u.Nb_heure || 0}</td>
                <td>
                    {(u.Taux_horaire * (u.Nb_heure || 0))} Ar
                </td>

                <td>
                    <button
                        onClick={() => handleEdit(u._id)}
                        className="btn-edit"
                    >
                        Modifier
                    </button>

                    <button
                        onClick={() => handleDelete(u._id)}
                        className="btn-delete"
                    >
                        Supprimer
                    </button>
                </td>
            </tr>
        ))}
    </tbody>
</table>
        </div>
    )
}
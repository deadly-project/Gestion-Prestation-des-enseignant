import axios from "axios"
import { useEffect, useState } from "react"
import "../css/Compenents/List-users.css"
import { MdDelete } from "react-icons/md";
import { FaFilePen } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
export default function ListUser(){
    const navigate = useNavigate();
    const url = 'http://localhost:3000/enseignant/';
    const token = localStorage.getItem("token");
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

    const handleEdit = async (id) =>{
        
        navigate(`/update/${id}`);
    }
    const handleDelete = async (id) =>{
        const confirmDelete = window.confirm(
        "Voulez-vous vraiment supprimer cet enseignant ?"
    );

    if (!confirmDelete) return;

        try {

            await axios.delete(
                `${url}${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
        }catch(err){
            console.error(err)
            // supprimer de la liste React
            setUsers(users.filter((u) => u._id !== id));

            alert("Enseignant supprimé avec succès");
        }
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
                    <FaFilePen onClick={() => handleEdit(u._id)}
                        className="btn-edit"/>
                    <MdDelete onClick={() => handleDelete(u._id)}
                        className="btn-delete"/>
                </td>
            </tr>
        ))}
    </tbody>
</table>
        </div>
    )
}
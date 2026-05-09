import Navbar from "./navbar";
import ListUser from "./ListUser";
export default function Dashboard(){
    const token = localStorage.getItem("token");
    const user = JSON.parse(
        localStorage.getItem("user")
    );
    return(
        <>
            <div>{user.username}</div>
            <Navbar/>
            <ListUser/>
        </>
    );
}
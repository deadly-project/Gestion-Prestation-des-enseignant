import Navbar from "./navbar";
export default function Dashboard(){
    const token = localStorage.getItem("token");
    const user = JSON.parse(
        localStorage.getItem("user")
    );
    return(
        <>
            <div>{user.username}</div>
            <Navbar/>
            <p>test</p>
        </>
    );
}
import '../css/Authentification/Sign_in.css'
export default function Signin(){
    return(
        <>
        <div className="formulaire-signin">
            <h2>Creation de compte</h2>
            <label htmlFor="nom">Nom</label>
            <input type="text" name="" id="nom" />
            <label htmlFor="Prenom">Prenom</label>
            <input type="text" name="" id="Prenom" />
            <label htmlFor="Poste">Poste</label>
            <input type="text" name="" id="Poste" />
            <label htmlFor="Username">Nom d'utilisateur</label>
            <input type="text" name="" id="Username" />
            <label htmlFor="mdp">Mot de passe</label>
            <input type="text" name="" id="mdp" />
            <label htmlFor="confirmation_mdp">Confirmer votre mot de passe</label>
            <input type="text" name="" id="confirmation_mdp" />
            <button>Enregistrer</button>
        </div>
        </>
    );
}
import { useState , useEffect} from 'react'
import initializationFirebase from '../Firebase/Firebaseinit'
import { getAuth, createUserWithEmailAndPassword ,updateProfile , onAuthStateChanged ,signOut ,signInWithEmailAndPassword} from "firebase/auth";

// initializationFirebase import 
initializationFirebase()

const useFirebase = () => {
    const [user,setUser ] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
  
    const auth = getAuth();


    //create acoount with email and password
    const createUserEmailandPassword = (email,password,name) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
            setAuthError('');
            const newUser = {email,displayName : name};
            setUser(newUser);
            saveUser(email,name,'POST')
            updateProfile(auth.currentUser, {
                displayName: "name",
              }).then(() => {
              }).catch((error) => {
               setAuthError(error);
              });
        })
        .catch((error) => {
            setAuthError(error.message);
                console.log(error);
        })
        .finally(() => setIsLoading(false));
    }

// log in with email and pasasowrd
    const signInWithEmailPassword = (email,password,location,history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                sessionStorage.setItem("email",res.user.email);
                const state = location?.state?.from || '/';
                history.replace(state)
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error);
            }) 
            .finally(() => setIsLoading(false));
    }

//This function is work for chnage the page and save logout & log in user data
    useEffect(()=> {
        const unsubcribed = onAuthStateChanged(auth,(user) => {
            if(user){
                setUser(user)
            } else{
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubcribed;
    },[])

// load admin data in user database
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
        .then((res) => res.json())
        .then((data) => setAdmin(data.admin));
    }, [user.email]);

//log out function 
    const logOut = () => {
        signOut(auth).then(() => {
          
          }).catch((error) => {
            setAuthError(error);
          });
          
    }
//save user
const saveUser = (email,displayName,method) => {
    const user ={email,displayName};
    fetch("http://localhost:5000/users", {
        method: method,
        headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(user),
    }).then();

}
    
    return{ 
        user,
        createUserEmailandPassword,
        signInWithEmailPassword,
        logOut,
        isLoading,
        authError,
        admin
    }
       

  
}

export default useFirebase;
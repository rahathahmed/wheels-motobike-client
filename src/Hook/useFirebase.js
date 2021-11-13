import { useState , useEffect} from 'react'
import initializationFirebase from '../Firebase/Firebaseinit'
import { getAuth, createUserWithEmailAndPassword , onAuthStateChanged ,signOut ,signInWithEmailAndPassword} from "firebase/auth";
// initializationFirebase import 
initializationFirebase()

const useFirebase = () => {
    const [user,setUser ] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
  
    const auth = getAuth();

    const createUserEmailandPassword = (email,password) => {
        setIsLoading(true);

        createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
           console.log(res.user.email);
           
            setAuthError('');
            
        })
        .catch((error) => {
            setAuthError(error.message);
                console.log(error);
        })
        .finally(() => setIsLoading(false));
    }

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
    
            }) 
            .finally(() => setIsLoading(false));
    }

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
  

    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
          
    }
  
    
    return{ 
        user,
        createUserEmailandPassword,
        signInWithEmailPassword,
        logOut,
        isLoading,
        authError
    }
       

  
}

export default useFirebase;
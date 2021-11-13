import React, { useState } from 'react';
import { Link ,useHistory,useLocation} from 'react-router-dom';
import useAuth from '../../Hook/useAuth';


const Login = () => {
    const [loginProof,setloginProof] = useState({});

    const {   signInWithEmailPassword ,isLoading,user , authError  } =useAuth();

    const location = useLocation();
    const history = useHistory()

    const handleInputChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
      
        const newloginProof = {...loginProof};
        newloginProof[field] = value;
        setloginProof(newloginProof)
    }
    const handleEmailPassLogin = e => {
        signInWithEmailPassword(loginProof.email,loginProof.password,location,history)
       
        e.preventDefault()
    }
    return (
        <div>
          <div className="row" >
              
              <div className="col-md-4 mt-5 p-5 mx-auto">
                  <div style={{color:"blue"}}>
                        <h2> Wheels Moto Bikes </h2>
                  </div>

                  <form onSubmit={handleEmailPassLogin}>
                        <div class="">
                            <label for="exampleInputEmail1">Email address</label>
                            <input onChange={handleInputChange} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" placeholder="Enter email"/>
                            
                        </div>
                        <div class="form-group mb-3">
                            <label for="exampleInputPassword1">Password</label>
                            <input onChange={handleInputChange} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        
                        <button type="submit" class="btn btn-primary">Submit</button>
                        {
                        isLoading && 
                            <div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                            </div> 
                        }
                        {user?.email &&
                            <div class="alert alert-success" role="alert">
                                Log In Succesfully !!!
                            </div>
                        }
                        {
                        authError &&
                            <div class="alert alert-success" role="alert">
                                {authError}
                            </div>
                        }  
                       
                        <p> Create a new account ?  <Link to="/register">
                            Register
                        </Link> </p>
                       
                    </form>
                    </div>
             
          </div>
        </div>
    );
};

export default Login;
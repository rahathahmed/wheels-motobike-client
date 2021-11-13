
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';

const Register = () => {
    const [loginProof,setloginProof] = useState({});
    
    const {createUserEmailandPassword,isLoading ,user ,authError} =useAuth()

    const handleInputChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
      
        const newloginProof = {...loginProof};
        newloginProof[field] = value;
        setloginProof(newloginProof)
        
    }
    const handleEmailPassLogin = e => {
        e.preventDefault();
        if(loginProof.password !== loginProof.password2 ){

            alert("Not match")
            return
        }
        createUserEmailandPassword(loginProof.email,loginProof.password);
        e.preventDefault();
       
    }

  
    
    return (
        <div>
          <div className="row" >
              
             <div className="col-md-4 mt-5 p-5 mx-auto">
                  
               {
                   !isLoading &&
                    <form onSubmit={handleEmailPassLogin}>
                   <div class="">
                       <label for="exampleInputEmail1">Email address</label>
                       <input onChange={handleInputChange} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" placeholder="Enter email"/>
                       
                   </div>
                   <div class="form-group mb-3">
                       <label for="exampleInputPassword1">Password</label>
                       <input onChange={handleInputChange} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                   </div>
                   <div class="form-group mb-3">
                       <label for="exampleInputPassword1">Password</label>
                       <input onChange={handleInputChange} type="password" name="password2" class="form-control" id="exampleInputPassword1" placeholder="Re-Type Your Password"/>
                   </div>
                   <button type="submit" class="btn btn-primary">Submit</button>
                 <p> Create a new account ?  <Link to="/register">
                       Register
                   </Link> </p>
                  
               </form>
          
               }

                {isLoading && 
                <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                    </div>
                       
            
               }
               {user?.email && 
                    <div class="alert alert-success" role="alert">
                            Create Account Succesfully!!!
                    </div>
                }
                {authError && 
                    <div class="alert alert-success" role="alert">
                          {authError}
                    </div>
                }
                </div>
          
             
          </div>
        </div>
    );

};

export default Register;
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Img/logo.png'

const Login = () => {
    return (
        <div>
          <div className="row" >
              
              <div className="col-md-4 mt-5 p-5 mx-auto">
                  <div style={{background:'black',marginBottom:'10px'}}>
                  <img src={logo} alt="" />
                  </div>

                  <form>
                        <div class="">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            
                        </div>
                        <div class="form-group mb-3">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        
                        <button type="submit" class="btn btn-primary">Submit</button>
                      <p> Are You New User ?  <Link to="/register">
                            Register
                        </Link> </p>
                       
                    </form>
                    </div>
             
          </div>
        </div>
    );
};

export default Login;
import React from 'react';

const Register = () => {
    return (
        <div>
            <h2>REgister</h2>
            <div className="col-md-5 mt-5 p-5 mx-auto">
            <form>
        <div class="">
        <label for="exampleInputEmail1">Email address</label>
            <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>
        <label for="exampleInputEmail1">Name</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          
            
        </div>
        <div class="form-group mb-3">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        
        <button type="submit" class="btn btn-primary">Submit</button>
        
        
    </form>
            </div>
         
        </div>
    );
};

export default Register;
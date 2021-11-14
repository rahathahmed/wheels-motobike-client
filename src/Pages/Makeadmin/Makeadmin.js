import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const Makeadmin = () => {
  const [email,setEmail]  =useState('');
 const { register, handleSubmit } = useForm();
 const [success,setSuccess] = useState(false)
      const handleOnBlur = (e) => {
        setEmail(e.target.value);
      };

       const onSubmit = (data) => {
         const user = { email:data.email };
         console.log(data.email);
         fetch("http://localhost:5000/users/admin", {
           method: "PUT",
           headers: {
             "content-type": "application/json",
           },
           body: JSON.stringify(user),
         })
           .then((res) => res.json())
           .then((result) => {
                if(result.modifiedCount){
                    setSuccess(true)
                }
           });

           console.log(data);

        
       };

    return (
      <div className="mt-5 pt-5 ms-auto">
        <h2>Hi Admin !! How Are You???</h2>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            I am Fine
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Bad Bro
          </label>
        </div>
    

        <form className=" p-5 w-50  mx-auto " onSubmit={handleSubmit(onSubmit)}>
          {success && (
            <div class="alert alert-success" role="alert">
              Admin Added Succesfully
            </div>
          )}
          <input
            onBlur={handleOnBlur}
            {...register("email")}
            placeholder="Email"
            type="email"
            className="mb-2 p-2 form-control"
          />
          <input
            className="form-control btn btn-primary "
            value="Make Admin"
            type="submit"
          />
        </form>
      </div>
    );
};

export default Makeadmin;
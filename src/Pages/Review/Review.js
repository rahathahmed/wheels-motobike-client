import React from 'react';
import { useForm } from "react-hook-form";

const Review = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        fetch("http://localhost:5000/review",{
            method:"POST",
            headers: {"content-type":"application/json"},
            body:JSON.stringify(data)
        })
        .then(res => res.json())
       .then(result => { 
           if (result.acknowledged) {
             alert("Review Successfully");
           }
       })
    };


    return (
      <div className="mt-5 p-5 col-md-6 mx-auto">
        <h2>Please Add Your Feebback</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name")}
            placeholder="Name"
            className="mb-2 p-2 form-control"
          />
          <input
            {...register("works")}
            placeholder="Example : Ceo - Programing Hero"
            className="mb-2 p-2 form-control"
          />
          <input
            {...register("feedback")}
            placeholder="Feedback"
            className="mb-2 p-2 form-control"
          />

          <input
            {...register("rating", { required: true })}
            className="mb-2 p-2 form-control"
            placeholder="Rating Type 1-5"
          />

          <input
            type="submit"
            value="Add "
            className="p-2 btn btn-primary form-control"
          />
        </form>
      </div>
    );
};

export default Review;

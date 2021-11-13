import React from 'react';
import { useForm } from "react-hook-form";

const Addproducts = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        fetch("http://localhost:5000/Addproducts",{
            method:"POST",
            headers: {"content-type":"application/json"},
            body:JSON.stringify(data)
        })
        .then(res => res.json())
       .then(result => console.log(result))
    };


    return (
        <div className="mt-5 p-5 col-md-6 mx-auto">
            <h2>Add Products</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
        
                    <input  {...register("name") }  placeholder="Name" className="mb-2 p-2 form-control"
                    />
                
                    <input  {...register("description") } placeholder="Description" className="mb-2 p-2 form-control"
                    />
                
                    <input {...register("image", { required: true } )} className="mb-2 p-2 form-control" placeholder="Image"/>
                    <input {...register("price", { required: true } )} className="mb-2 p-2 form-control" placeholder="Price"/> 

                <input type="submit" value="Add " className="p-2 btn btn-primary form-control"/>
            </form>
        </div>
    );
};

export default Addproducts;

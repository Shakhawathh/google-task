import React from 'react';
import { useForm } from 'react-hook-form';



const TextInout = () => {
    const { register,  handleSubmit } = useForm();


    const onSubmit = async data => {
        
        console.log('data',data);
        const url = `http://localhost:5000/service`
        fetch(url,{
            method:'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result)
        })
       
    }

    
    return (
        <div>
            <form className='text-left' onSubmit={handleSubmit(onSubmit)}>
                

                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Daily Task</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Daily task"
                        className="input input-bordered w-full  "
                        {...register("text", {
                            
                        })}
                    />
                   
                </div>

                

                
                <input className=' max-w-xs text-white text-left' type="submit" value="" />
            </form>
        </div>
    );
};

export default TextInout;
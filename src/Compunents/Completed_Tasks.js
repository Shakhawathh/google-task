import React, { useEffect, useState } from 'react';

const Completed_Tasks = () => {

    const [services, setServices] = useState([])



    useEffect(() => {
        const url = `http://localhost:5000/service`
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleUserDelete = id =>{
        const proceed = window.confirm('Are you sure you want to delete?');
        if(proceed){
            console.log('deleting user with id, ', id);
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    console.log('deleted');
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                }
            })
        }
    }
    return (
        <div>
        <h1 className='text-2xl text-center mb-5'>Completed Task</h1>
        <div class="overflow-x-auto">
            <table class="table table-zebra w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Daily Task</th>
                     
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>


                    {
                        services.map((service, index) => <tr
                        key={service._id}
                        >
                            <th>{index +1}</th>
                            <td>{service.text}</td>
                            <td><button onClick={()=>(service._id)} class="btn btn-xs bg-[#001858]">delete</button></td>
                            
                        </tr>)
                    }

                   
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default Completed_Tasks;
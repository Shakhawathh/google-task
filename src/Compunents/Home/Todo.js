import React, { useEffect, useState } from 'react';

const Todo = () => {

    
    const [services, setServices] = useState([])



    useEffect(() => {
        const url = `https://nameless-fortress-79199.herokuapp.com/service`
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
    return (
        <div>
        <div class="overflow-x-auto">
            <table class="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Daily Task</th>
                       
                       
                    </tr>
                </thead>
                <tbody>
                    {
                        services.map((o, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{o.text}</td>
                            
                        </tr>)
                    }



                </tbody>
            </table>
        </div>
    </div>
    );
};

export default Todo;
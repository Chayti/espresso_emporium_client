import React, { useEffect, useState } from 'react';
import Coffee from './Coffee';

export function AllCoffee() {

    const [refetch, setRefetch] = useState(false)
    const [coffee, setCoffee] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/coffee')
            .then(res => res.json())
            .then(data => setCoffee(data))
    }, [refetch])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {
                coffee.map((coffee) => <Coffee
                    key={coffee._id}
                    coffee={coffee}
                    refetch={refetch}
                    setRefetch={setRefetch}

                ></Coffee>)
            }
        </div>
    );
}
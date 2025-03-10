import React, { useState,useEffect} from 'react';

function Dept() {

    const [department, setDepartment] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //fetch department when the component loads
    useEffect(() => {

        const fetchDept = async () => {

            setLoading(true);

            setError(null);

            try {
                const deptlist = await fetch('http://localhost:5207/api/Departments');

                if (!deptlist.ok) {

                    throw new Error('unable to generate list');

                }

                const data = await deptlist.json();

                setDepartment(data);
            } catch (error) {

                setError(error.Message);
            } finally {
                setLoading(false);
            }

        };

       
            fetchDept();
        

    }, []);


    if (loading) {

        return <div>updating Department list...</div>
    }

    if (error) {

        return <div>Error:{ error}</div>
    }

    

    return (
        <div>
            <h3>LIST OF DEPARTMENTS</h3>
            <ul>
                {department.map(department => (
                    <li key={department.id}>
                        {department.id} - {department.name} 
                    </li>
                ))}
            </ul>

        </div>
    );
    
}

export default Dept;

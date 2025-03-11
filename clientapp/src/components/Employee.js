import React, { useState, useEffect } from 'react';


function Employee() {
    const [employees, setEmployees] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await fetch('http://localhost:5207/api/Employees');

                console.log(response);
                if (!response.ok) {
                    throw new Error("Failed to fetch Employees");
                }
                const data = await response.json();

                setEmployees(data);

            } catch (error) {
                setError(error.Message);
            } finally {
                setLoading(false);
            }
        }

        fetchEmployees();
    }, []);

    if (loading) {
        return <div>loading...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
          
            <h1>Employee List</h1>
            <ul>
                {employees.map(employee => (
                    <li key={employee.id}>
                        {employee.id} - {employee.name} - {employee.designation}
                    </li>
                ))}
            </ul>
        </div>



    );
}

export default Employee;


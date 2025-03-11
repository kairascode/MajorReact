import React, { useState, useEffect} from 'react';


function EmployeeForm(){
    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');
   
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

   
    const handleSubmit = async (event) => {

        event.preventDefault();

        const empData = { name, designation };

       
        try {
            const empsubmit = await fetch('http://localhost:5207/api/Employees', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(empData)

                });

            
            if (!empsubmit.ok) {
                throw new Error("Failed to submit data");
            }

            const result = await Response.json();

                setSuccess('Employee added successfully',result);
                setError('');
                setName('');
               
                setDesignation('');
            } catch (error) {
            setError(error.Message);
            setSuccess();
        }
    }
 
    
    return (
        <div>
            <h2>Add New Employee</h2>
            <form onSubmit={handleSubmit}>

                <div>
                    <label>Employee Name</label>
                    <input type='text' value={name} onChange={ (e)=>setName(e.target.value)} required />
                </div>

                <div>
                    <label>Designation</label>
                    <input type='text' value={designation} onChange={(e) => setDesignation(e.target.value)} required />
                </div>
                

                <div>
                   
                    <button type="submit">Submit</button>

                </div>
            </form>

            {error && <div style={{ color: 'red' }}>Error: {error}</div>}

            {success && <div style={{ color: 'green' }}>{success}</div>}

        </div>

        
    
    );
   
}
export default EmployeeForm;
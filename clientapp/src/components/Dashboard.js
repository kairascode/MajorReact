import React from 'react';
import Employee from './Employee';
import EmployeeForm from './EmployeeForm';
import Dept from './Department';
import "bootstrap/dist/css/bootstrap.min.css";

function Dashboard() {

    return (

        <div className="d-flex">
            
            <aside className="bg-dark text-white p-3" style={{ width: "250px", height: "100vh" }}>
                <h4 className="text-center">HRMIS</h4>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href={EmployeeForm }>Employee Form</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Settings</a>
                    </li>
                    
                </ul>
            </aside>

            <div className="flex-grow-1">
                {/* Navbar */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">SDTVET HR </a>
                    </div>
                </nav>

                
            </div>
        </div>
    );
}

export default Dashboard;

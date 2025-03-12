import React from "react";
//import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import "bootstrap/dist/css/bootstrap.min.css";
import Employee from './Employee';
import EmployeeForm from './EmployeeForm';
import Dept from './Department';
import { BrowserRouter as Router, Routes, Route, NavLink, BrowserRouter } from 'react-router-dom';
import { Card, Container, Nav, Navbar, NavDropdown, Link }    from 'react-bootstrap';


function Dashboard() {

    <Router>
        <BrowserRouter />
        <Routes>
            <Route path="/" element={<Employee />} />
            <Route path="/about" element={<EmployeeForm />} />
            <Route path="/services" element={<Dept />} />
           
            <Route path="/employee-form" element={<EmployeeForm />} />
        </Routes>
    </Router>

    
    return (
        <Card className="col-mb-12">
            <Navbar collapseOnSelect expand="lg" className="bg-body-blue">
                <Container>
                    <Navbar.Brand href="#home">HRMIS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            
                            <NavDropdown title="Employees" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Employee List</NavDropdown.Item>
                                <NavDropdown.Item href="/employee-form">
                                    Add Employee
                                </NavDropdown.Item>
                                
                            </NavDropdown>
                            <NavDropdown title="Departments" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Department List</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Add Department
                                </NavDropdown.Item>
                                
                            </NavDropdown>
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Card>
    );
}

export default Dashboard;

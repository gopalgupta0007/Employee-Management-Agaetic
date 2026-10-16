import axios from 'axios';
import './App.css';
import EmployeeForm from "../src/components/EmployeeForm";
import react, { useEffect, useState } from 'react';

function App() {
  const [isAddEmployeeFormVisible, setAddEmployeeFormVisible] = useState(false);
  const [isEmployeeData, setEmployeeData] = useState([]);

  const fetchData = async () => {
    try {
      // const response = await axios.get('http://localhost:3000/employee/list');
      const response = await axios.get('http://localhost:3000/employees');
      setEmployeeData(response.data);
    } catch (err) {
      console.error(err); // Handle errors
    }
  };

  useEffect(() => {

    fetchData(); // Call the function inside useEffect
  }, []);

  const handleAddEmployee = () => {
    setAddEmployeeFormVisible(!isAddEmployeeFormVisible)
  }

  const handleDeleteEmployee = async(id) => {
    try {
      const response = await axios.get('http://localhost:3000/employees/delete/'+id);
      alert('Employee data deleted successfully');
      fetchData();
    } catch (error) {
      console.error('Error adding employee:', error);
    }
    console.log(id)
  }

  return (
    <section className='container'>
      <br />
      {!isAddEmployeeFormVisible ?
        <div>
          <div className='justify'>
            <h1>Employee Management</h1>
            <button type="button" className="btn btn-primary" onClick={handleAddEmployee}>Add Employee</button>
          </div>
          <br />
          <table className="table table-bordered" style={{ textAlign: 'center' }}>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                isEmployeeData.map((emp: any) => (
                  <tr key={emp.id}>
                    <th scope="row">{emp.id}</th>
                    <td>{emp.name}</td>
                    <td>{emp.email}</td>
                    <td>{emp.role}</td>
                    <td style={{ textDecoration: 'underline', cursor: 'pointer', color: 'blue' }}>edit</td>
                    <td style={{ textDecoration: 'underline', cursor: 'pointer', color: 'red' }} onClick={() => handleDeleteEmployee(emp.id)}>delete</td>
                  </tr>
                ))
              }
              {/* <tr>
                <th scope="row">1</th>
                <td>Mukesh</td>
                <td>mukesh@gmail.com</td>
                <td>Frontend Developer</td>
                <td style={{ textDecoration: 'underline', cursor: 'pointer' }}>delete/edit</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Raju</td>
                <td>raju@gmail.com</td>
                <td>Full Stack Developer</td>
                <td style={{ textDecoration: 'underline', cursor: 'pointer' }}>delete/edit</td>
              </tr> */}
            </tbody>
          </table>
        </div>
        :
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', height: '100%' }}>
          <EmployeeForm setAddEmployeeFormVisible={setAddEmployeeFormVisible} fetchData={fetchData} />
        </div>
      }
    </section>
  )
}

export default App;











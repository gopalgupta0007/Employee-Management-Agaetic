import '../App.css';
import react, { useState } from 'react';
import axios from 'axios'; 

function EmployeeForm({ setAddEmployeeFormVisible, fetchData }) {
    const [formData, setFormData] = useState({ name: '', email: '', role: '' })
    const closeAddEmployeeForm = () => {
        setAddEmployeeFormVisible(false)
    }
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('Employee added:', formData)
        // TODO: send formData to your API or parent component here

        try {
            const response = await axios.post('http://localhost:3000/employees', formData);
            alert('Employee data insert successfully:', response.data);
            closeAddEmployeeForm();
            fetchData();
        } catch (error) {
            console.error('Error adding employee:', error);
        }
        closeAddEmployeeForm()
    }
    return (
        <section className='form-card' style={{ border: '2px solid gray', padding: '20px', height: '50%', borderRadius: '10px' }}>
            <div className='justify'>
                <h1>Add Employee</h1>
                {/* <button onClick={closeAddEmployeeForm} style={}>X</button> */}
                <button type="button" className="btn btn-secondary" onClick={closeAddEmployeeForm}>X</button>
            </div>
            <form>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Name</label>
                    <input className="form-control"
                        type="text"
                        id="emp-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input className="form-control"
                        type="email"
                        id="emp-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@gmail.com"
                        required />
                </div>
                {/* <div class="form-group"> */}
                <div class="form-group">
                    <label for="exampleFormControlInput1">Role</label>
                    <input className="form-control"
                        type="text"
                        id="emp-role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        placeholder="Full Stack Developer"
                        required
                    />
                </div>
                <button type="submit" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </section>
    )
}

export default EmployeeForm;
import '../App.css'
import react, { useState } from 'react';

function EmployeeForm({ setAddEmployeeFormVisible }) {
    const [formData, setFormData] = useState({ name: '', email: '', role: '' })
    const closeAddEmployeeForm = () => {
        setAddEmployeeFormVisible(false)
    }
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Employee added:', formData)
        // TODO: send formData to your API or parent component here
        closeAddEmployeeForm()
    }
    return (
        <section className='form-card' style={{ border: '2px solid gray', padding: '20px', height: '50%', borderRadius: '10px' }}>
            <div className='justify'>
                <h1>Add Employee</h1>
                {/* <button onClick={closeAddEmployeeForm} style={}>X</button> */}
                <button type="button" class="btn btn-secondary" onClick={closeAddEmployeeForm}>X</button>
            </div>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Name</label>
                    <input className="emp-input"
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
                    <input className="emp-input"
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
                    <input className="emp-input"
                        type="text"
                        id="emp-role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        placeholder="Full Stack Developer"
                        required
                    />
                </div>
            </form>
        </section>
    )
}

export default EmployeeForm;
import React from 'react'
import { useNavigate } from 'react-router-dom';

const AddCohorts = ({ setCohort }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        mentor: '',
        studentsNum: '',
    });
    const handleChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <div>
            <input
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            <input
                name="mentor"
                value={formData.mentor}
                onChange={handleChange}
            />
            <input
                name="studentsNum"
                value={formData.studentsNum}
                onChange={handleChange}
            />

        </div>
    )
}

export default AddCohorts

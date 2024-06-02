import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function StudentForm({ onStudentAdded }) {
    const [studentName, setStudentName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/students', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ studentName }),
        });
        if (response.ok) {
            setStudentName('');
            if (onStudentAdded) {
                onStudentAdded();
            }
        } else {
            alert('Failed to add student');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Student Name"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                fullWidth
                margin="normal"
            />
            <Button type="submit" variant="contained" color="primary">
                Add Student
            </Button>
        </form>
    );
}

export default StudentForm;
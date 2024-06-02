import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';

function StudentForm({ onStudentAdded, student }) {
    const [studentName, setStudentName] = useState('');

    useEffect(() => {
        if (student) {
            setStudentName(student.studentName);
        } else {
            setStudentName('');
        }
    }, [student]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const method = student ? 'PUT' : 'POST';
        const url = student ? `/api/students/${student.studentId}` : '/api/students';
        const response = await fetch(url, {
            method,
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
            alert('Failed to save student');
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
                {student ? 'Update Student' : 'Add Student'}
            </Button>
        </form>
    );
}

export default StudentForm;
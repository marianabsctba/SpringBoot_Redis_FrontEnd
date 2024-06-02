import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';

function StudentSearch() {
    const [studentId, setStudentId] = useState('');
    const [student, setStudent] = useState(null);

    const handleSearch = async () => {
        const response = await fetch(`/api/students/${studentId}`);
        if (response.ok) {
            const data = await response.json();
            setStudent(data);
        } else {
            alert('Student not found');
        }
    };

    return (
        <div>
            <TextField
                label="Student ID"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                fullWidth
                margin="normal"
            />
            <Button onClick={handleSearch} variant="contained" color="primary">
                Search Student
            </Button>
            {student && (
                <Typography variant="h6" gutterBottom>
                    Found Student: {student.studentName}
                </Typography>
            )}
        </div>
    );
}

export default StudentSearch;

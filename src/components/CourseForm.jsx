import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function CourseForm({ onCourseAdded }) {
    const [courseName, setCourseName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/courses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ courseName }),
        });
        if (response.ok) {
            setCourseName('');
            if (onCourseAdded) {
                onCourseAdded();
            }
        } else {
            alert('Failed to add course');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Course Name"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                fullWidth
                margin="normal"
            />
            <Button type="submit" variant="contained" color="primary">
                Add Course
            </Button>
        </form>
    );
}

export default CourseForm;

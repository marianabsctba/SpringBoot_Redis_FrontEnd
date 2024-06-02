import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';

function CourseForm({ onCourseAdded, course }) {
    const [courseName, setCourseName] = useState('');

    useEffect(() => {
        if (course) {
            setCourseName(course.courseName);
        } else {
            setCourseName('');
        }
    }, [course]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const method = course ? 'PUT' : 'POST';
        const url = course ? `/api/courses/${course.courseId}` : '/api/courses';
        const response = await fetch(url, {
            method,
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
            alert('Failed to save course');
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
                {course ? 'Update Course' : 'Add Course'}
            </Button>
        </form>
    );
}

export default CourseForm;

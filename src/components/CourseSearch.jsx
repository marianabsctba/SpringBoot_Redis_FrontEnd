import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';

function CourseSearch() {
    const [courseId, setCourseId] = useState('');
    const [course, setCourse] = useState(null);

    const handleSearch = async () => {
        const response = await fetch(`/api/courses/${courseId}`);
        if (response.ok) {
            const data = await response.json();
            setCourse(data);
        } else {
            alert('Course not found');
        }
    };

    return (
        <div>
            <TextField
                label="Course ID"
                value={courseId}
                onChange={(e) => setCourseId(e.target.value)}
                fullWidth
                margin="normal"
            />
            <Button onClick={handleSearch} variant="contained" color="primary">
                Search Course
            </Button>
            {course && (
                <Typography variant="h6" gutterBottom>
                    Found Course: {course.courseName}
                </Typography>
            )}
        </div>
    );
}

export default CourseSearch;
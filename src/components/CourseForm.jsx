import React, { useState } from 'react';

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
            alert('Course added successfully');
            if (onCourseAdded) {
                onCourseAdded(); // Chama a função de callback
            }
        } else {
            alert('Failed to add course');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Course Name"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
            />
            <button type="submit">Add Course</button>
        </form>
    );
}

export default CourseForm;

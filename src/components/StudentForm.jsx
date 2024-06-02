import React, { useState } from 'react';

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
            alert('Student added successfully');
            if (onStudentAdded) {
                onStudentAdded(); // Chama a função de callback
            }
        } else {
            alert('Failed to add student');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Student Name"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
            />
            <button type="submit">Add Student</button>
        </form>
    );
}

export default StudentForm;

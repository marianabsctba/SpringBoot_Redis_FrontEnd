import React from 'react';

function StudentList({ students }) {
    return (
        <div>
            <h2>Student List</h2>
            <ul>
                {students.map((student) => (
                    <li key={student.studentId}>{student.studentName}</li>
                ))}
            </ul>
        </div>
    );
}

export default StudentList;

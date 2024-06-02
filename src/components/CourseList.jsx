import React from 'react';

function CourseList({ courses }) {
    return (
        <div>
            <h2>Course List</h2>
            <ul>
                {courses.map((course) => (
                    <li key={course.courseId}>{course.courseName}</li>
                ))}
            </ul>
        </div>
    );
}

export default CourseList;

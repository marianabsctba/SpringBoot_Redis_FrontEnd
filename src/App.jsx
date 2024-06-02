import React, { useEffect, useState } from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';

function App() {
    const [students, setStudents] = useState([]);
    const [courses, setCourses] = useState([]);

    const fetchStudents = async () => {
        const response = await fetch('/api/students');
        const data = await response.json();
        setStudents(data);
    };

    const fetchCourses = async () => {
        const response = await fetch('/api/courses');
        const data = await response.json();
        setCourses(data);
    };

    useEffect(() => {
        fetchStudents();
        fetchCourses();
    }, []);

    return (
        <div className="App">
            <h1>Student Management System</h1>
            <StudentForm onStudentAdded={fetchStudents} />
            <StudentList students={students} />
            <CourseForm onCourseAdded={fetchCourses} />
            <CourseList courses={courses} />
        </div>
    );
}

export default App;

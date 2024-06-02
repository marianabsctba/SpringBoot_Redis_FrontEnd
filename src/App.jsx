import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';

function App() {
    const [students, setStudents] = useState([]);
    const [courses, setCourses] = useState([]);
    const [editingStudent, setEditingStudent] = useState(null);
    const [editingCourse, setEditingCourse] = useState(null);

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

    const handleDeleteStudent = async (studentId) => {
        await fetch(`/api/students/${studentId}`, {
            method: 'DELETE',
        });
        fetchStudents();
    };

    const handleUpdateStudent = (student) => {
        setEditingStudent(student);
    };

    const handleDeleteCourse = async (courseId) => {
        await fetch(`/api/courses/${courseId}`, {
            method: 'DELETE',
        });
        fetchCourses();
    };

    const handleUpdateCourse = (course) => {
        setEditingCourse(course);
    };

    useEffect(() => {
        fetchStudents();
        fetchCourses();
    }, []);

    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                Student Management System
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper style={{ padding: 16 }}>
                        <Typography variant="h4" gutterBottom>
                            {editingStudent ? 'Edit Student' : 'Add Student'}
                        </Typography>
                        <StudentForm onStudentAdded={fetchStudents} student={editingStudent} />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper style={{ padding: 16 }}>
                        <Typography variant="h4" gutterBottom>
                            Student List
                        </Typography>
                        <StudentList students={students} onUpdate={handleUpdateStudent} onDelete={handleDeleteStudent} />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper style={{ padding: 16 }}>
                        <Typography variant="h4" gutterBottom>
                            {editingCourse ? 'Edit Course' : 'Add Course'}
                        </Typography>
                        <CourseForm onCourseAdded={fetchCourses} course={editingCourse} />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper style={{ padding: 16 }}>
                        <Typography variant="h4" gutterBottom>
                            Course List
                        </Typography>
                        <CourseList courses={courses} onUpdate={handleUpdateCourse} onDelete={handleDeleteCourse} />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;

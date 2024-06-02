import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
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
        <Container>
            <Typography variant="h2" gutterBottom>
                Student Management System
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper style={{ padding: 16 }}>
                        <Typography variant="h4" gutterBottom>
                            Add Student
                        </Typography>
                        <StudentForm onStudentAdded={fetchStudents} />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper style={{ padding: 16 }}>
                        <Typography variant="h4" gutterBottom>
                            Student List
                        </Typography>
                        <StudentList students={students} />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper style={{ padding: 16 }}>
                        <Typography variant="h4" gutterBottom>
                            Add Course
                        </Typography>
                        <CourseForm onCourseAdded={fetchCourses} />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper style={{ padding: 16 }}>
                        <Typography variant="h4" gutterBottom>
                            Course List
                        </Typography>
                        <CourseList courses={courses} />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;

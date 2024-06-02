import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

function CourseList({ courses }) {
    return (
        <List>
            {courses.map((course) => (
                <ListItem key={course.courseId}>
                    <ListItemText primary={course.courseName} />
                </ListItem>
            ))}
        </List>
    );
}

export default CourseList;

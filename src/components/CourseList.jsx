import React from 'react';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function CourseList({ courses, onUpdate, onDelete }) {
    return (
        <List>
            {courses.map((course) => (
                <ListItem key={course.courseId} secondaryAction={
                    <>
                        <IconButton edge="end" aria-label="edit" onClick={() => onUpdate(course)}>
                            <EditIcon />
                        </IconButton>
                        <IconButton edge="end" aria-label="delete" onClick={() => onDelete(course.courseId)}>
                            <DeleteIcon />
                        </IconButton>
                    </>
                }>
                    <ListItemText primary={course.courseName} />
                </ListItem>
            ))}
        </List>
    );
}

export default CourseList;

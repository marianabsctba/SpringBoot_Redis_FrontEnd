import React from 'react';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function StudentList({ students, onUpdate, onDelete }) {
    return (
        <List>
            {students.map((student) => (
                <ListItem key={student.studentId} secondaryAction={
                    <>
                        <IconButton edge="end" aria-label="edit" onClick={() => onUpdate(student)}>
                            <EditIcon />
                        </IconButton>
                        <IconButton edge="end" aria-label="delete" onClick={() => onDelete(student.studentId)}>
                            <DeleteIcon />
                        </IconButton>
                    </>
                }>
                    <ListItemText primary={student.studentName} />
                </ListItem>
            ))}
        </List>
    );
}

export default StudentList;
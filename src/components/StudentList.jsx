import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

function StudentList({ students }) {
    return (
        <List>
            {students.map((student) => (
                <ListItem key={student.studentId}>
                    <ListItemText primary={student.studentName} />
                </ListItem>
            ))}
        </List>
    );
}

export default StudentList;

import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';

function StudyMaterialForm({ onMaterialAdded, material }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (material) {
            setTitle(material.title);
            setDescription(material.description);
        } else {
            setTitle('');
            setDescription('');
        }
    }, [material]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const method = material ? 'PUT' : 'POST';
        const url = material ? `/api/materials/${material.id}` : '/api/materials';
        const response = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, description }),
        });
        if (response.ok) {
            setTitle('');
            setDescription('');
            if (onMaterialAdded) {
                onMaterialAdded();
            }
        } else {
            alert('Failed to save study material');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                fullWidth
                margin="normal"
            />
            <Button type="submit" variant="contained" color="primary">
                {material ? 'Update Study Material' : 'Add Study Material'}
            </Button>
        </form>
    );
}

export default StudyMaterialForm;

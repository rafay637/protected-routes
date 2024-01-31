import { Box, TextField } from '@mui/material';
import React from 'react';

export const Input = (props) => {

    let { id, type, onChange, label, required } = props;

    return (
        <>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id={id} type={type} required={required} onChange={onChange} label={label} variant="standard" />
            </Box>
        </>
    );
};

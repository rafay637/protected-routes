import { Button, Paper, Stack, Typography } from '@mui/material';
import React from 'react';

export const Dashboard = () => {

    // let onChangeHandle = () => { };
    // let submitHandle = () => { };

    return (
        <>
            <Stack className='main'>
                <div className='container'>
                    <Paper component="form" elevation="10" className='paper'>
                        <Typography align='center' fontWeight="bold" variant='h5'>Dashboard</Typography>

                        <div className="button">
                            <Button variant='contained'>Here u go!</Button>
                        </div>
                    </Paper>
                </div>
            </Stack>
        </>
    );
};

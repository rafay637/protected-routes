import { Button, Paper, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { Input } from '../components/Input';
import { useNavigate } from 'react-router-dom';
import { credentials_data } from '../utils/Credentials_data';

export const Login = () => {

    // user data is {here}
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();

    let onChangeHandle = (e) => {
        let { value, id } = e.target;
        console.log(id, value)
        setUserData({ ...userData, [id]: value })
    };

    let submitHandle = (e) => {
        e.preventDefault();
        // let { email, password } = userData;

        // if (email === credentials_data.email && 
        //     password === credentials_data.password) {
        //         alert("pass");
        //         navigate("dashboard")
        // } else {
        //     alert("fail")
        // }
    };

    return (
        <>
            <Stack className='main'>
                <div className='container max-w-md'>
                    <Paper component="form" onSubmit={submitHandle} elevation={10} className='paper'>
                        <Typography align='center' fontWeight="bold" className='text-primary' variant='h5'>Login</Typography>

                        <Input
                            label="Enter email"
                            id="email"
                            type="email"
                            className="input"
                            required={true}
                            onChange={onChangeHandle}
                        />

                        <Input
                            label="Enter Passowrd"
                            id="password"
                            type="password"
                            className="input"
                            required={true}
                            onChange={onChangeHandle}
                        />

                        <div className="button">
                            <Button type='submit' variant='contained'>Submit</Button>
                        </div>
                    </Paper>
                </div>
            </Stack>
        </>
    );
};

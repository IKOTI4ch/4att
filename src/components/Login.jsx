import React from 'react';
import classes from '../styles/Login.module.css'
import {Container, Grid} from "@mui/material";

const Login = () => {
    return (
        <div className={classes.Login}>
            <Container className={classes.Container}>
                <Grid className={classes.Box} container>
                    <Grid className={classes.Title} md={10} item>Create account</Grid>
                    <Grid className={classes.Item} md={10} item>
                        Already have an account? <a display='inline-block'>Sign in</a>
                    </Grid>
                    <Grid className={classes.Item} md={10} item>text</Grid>
                    <Grid className={classes.Item} md={10} item>text</Grid>
                    <Grid className={classes.Item} md={10} item>text</Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Login;
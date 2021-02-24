import React from 'react';
import Grid from "@material-ui/core/Grid";
import {Box} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const Loader = () => {
    return (
        <Container>
            <Grid container
                  style={{height: window.innerHeight - 50}}
                  alignItems={"center"}
                  justify={"center"}
            >
                <Grid  container alignItems={"center"} direction={"column"}>
                    <div className="lds-spinner">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Loader;
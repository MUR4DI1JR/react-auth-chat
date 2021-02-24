import React, {useContext} from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";

const Navbar = () => {
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);
    return (
        <AppBar color={"secondary"} position="static">
            <Toolbar variant={"dense"}>
                <Grid container justify={"flex-end"}>
                    {user ?
                        <Button onClick={() => auth.signOut()} variant={"outlined"}>ВЫЙТИ</Button>
                        :
                        <NavLink to={LOGIN_ROUTE}>
                            <Button variant={"outlined"}>ЛОГИН</Button>
                        </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
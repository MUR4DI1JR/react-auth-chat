import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "./Loader";
import firebase from "firebase";
import Avatar from "@material-ui/core/Avatar";

const Chat = () => {
    const {auth, firestore} = useContext(Context);
    const [user] = useAuthState(auth);
    const [value, setValue] = useState('');
    const [messages, loading] = useCollectionData(firestore.collection('messages').orderBy('createdAt'));

    const sendMessage = async () =>{
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            textMessage: value,
            createdAt : firebase.firestore.FieldValue.serverTimestamp()
        });
        setValue('')
    };

    if(loading){
        return <Loader/>
    }

    return (
        <Container>
            <Grid container
                  justify={"center"}
                  style={{height: window.innerHeight - 50, marginTop: 20}}>
                <div style={{width: '80%', height: '60vh', border: '1px solid gray', overflowY: 'auto'}}>
                    {messages.map(messages=>
                        <div style={{
                            margin: 10,
                            border: user.uid === messages.uid ? '2px solid green' : '2px dashed red',
                            marginLeft: user.uid === messages.uid ? 'auto' : '10px',
                            width: 'fit-content',
                            padding: 5,
                        }}>
                            <Grid container>
                                <Avatar src={messages.photoURL}/>
                                <div>{messages.displayName}</div>
                            </Grid>
                            <div>{messages.textMessage}</div>
                        </div>
                    )}
                </div>
                <Grid container
                      direction={"column"}
                      alignItems={"flex-end"}
                      style={{width: '80%', }}
                >
                    <TextField
                        fullWidth
                        rowsMax={2}
                        variant={"outlined"}
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <Button onClick={sendMessage} variant={"outlined"}>Send message</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Chat;
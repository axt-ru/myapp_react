import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addChat } from "../../store/chats/actions";
import TextField from '@material-ui/core/TextField';

export const AddChat = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!value) {
            return;
        }

        const newId = `chat-${Date.now()}`;
        dispatch(addChat(newId, value));
        setValue('');
    };

    return ( 
        <form onSubmit={handleSubmit}>
            {/* <input onChange={handleChange} value={value}/>  */}
            <TextField id="standard-basic" label="Введите имя чата" variant="filled" className="textField" value={value} onChange={handleChange}></TextField>
        </form>
    );
};
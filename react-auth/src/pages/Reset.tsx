import React, { SyntheticEvent, useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const Reset = ({ match }: { match: any }) => {
    const [password, setPassword] = useState('');
    const [passwordConfirm, setConfirmPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const token = match.params.token;

        await axios.post('reset', {
            token,
            password,
            password_confirm: passwordConfirm
        });

        setRedirect(true);
    }
    if (redirect) {
        return (
            <Redirect to="/login" />
        )
    }
    return (
        <form className="form-signin" onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Reset your password</h1>
            <input type="password" className="form-control" placeholder="Password" required
                onChange={e => setPassword(e.target.value)}
            />

            <input type="password" className="form-control" placeholder="Confirm Password" required
                onChange={e => setConfirmPassword(e.target.value)}
            />

            <button className="w-100 btn btn-lg btn-primary" type="submit">Reset Password</button>
        </form>
    );
};

export default Reset;
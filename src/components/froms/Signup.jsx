import { If, useObjectState } from 'mg-js'
import React, { useEffect } from 'react'
import { SIGN_UP_URL } from '../../routes/urls';
import { useAxios } from 'frontend-essentials';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const nav = useNavigate()
    const [form, setForm, reset] = useObjectState(["name", "email", "password"]);


    const { loading, error, data, activate, status } = useAxios({
        method: 'post',
        url: SIGN_UP_URL,
        manual: true,
        onSuccess: () => nav("/login"),

    })




    const submitForm = (e) => {
        e.preventDefault();
        activate({ data: form })
    }

    if (!loading) return (
        <form onSubmit={submitForm} className='w-25 mx-auto mt-4'>
            <h2 className='text-center'>Signup</h2>
            <div className="mb-3">
                <label htmlFor="Name" className="form-label">Name</label>
                <input value={form.name} onChange={(e) => setForm("name", e.target.value)} type="text" className="form-control" id="Name" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input value={form.email} onChange={(e) => setForm("email", e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input value={form.password} onChange={(e) => setForm("password", e.target.value)} type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <If condition={error && status == 409}>
                <p className='text-danger text-end'>user alrady exists</p>
            </If>


        </form>
    )
    return <h2>loading...</h2>
}

export default Signup
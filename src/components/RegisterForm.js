import { useState } from "react";

function RegisterForm(){
    const [form, setForm] = useState(
        {
            firstName: 'Ishani',
            lastName: 'Kapoor',
            email: 'ishani_kaps@hotmail.com'
        }
    )
    return (
        <>
            <label>
                First Name:
                <input 
                value={form.firstName}
                onChange={e => {
                    setForm({
                        ...form,
                        firstName: e.target.value
                    });
                }}/>
            </label>
            <label>
                Last Name:
                <input 
                value={form.lastName}
                onChange={e => {
                    setForm({
                        ...form,
                        lastName: e.target.value
                    });
                }}/>
            </label>
            <label>
                Email:
                <input 
                value={form.email}
                onChange={e => {
                    setForm({
                        ...form,
                        email: e.target.value
                    });
                }}/>
            </label>
        </>
    );
};

export default RegisterForm;
import React from 'react';
import Input from "./Input";

const AuthorForm = ({ form, handleChange, handleSubmit, submitValue, errors }) => {
    return (
        <form className="col-5 mx-auto" onSubmit={(e) => handleSubmit(e)}>
            <Input
                type="text"
                name="name"
                value={form.name}
                handleChange={handleChange}
                error={errors.name ? errors.name.message : null}
                label="Name: "
            /> 

            <Input
                type="text"
                name="bookOne"
                value={form.bookOne}
                handleChange={handleChange}
                label="Book One:"
            /> 

            <Input
                type="text"
                name="bookTwo"
                value={form.bookTwo}
                handleChange={handleChange}
                label="Book Two:"
            /> 

            <Input
                type="text"
                name="bookThree"
                value={form.bookThree}
                handleChange={handleChange}
                label="Book Three:"
            />

            <input className="btn btn-success" type="submit" value={submitValue} />
        </form>
    )
}

export default AuthorForm;
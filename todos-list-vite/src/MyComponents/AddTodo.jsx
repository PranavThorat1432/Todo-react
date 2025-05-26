import React, { useState } from 'react'

const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        props.addTodo(title, desc);
    }
    return (
        <div className='container text-center mx-auto my-5'>
            <h3>Add Todo</h3>
            <form onSubmit={submit}>
                <div className='d-flex flex-column align-items-center justify-content-center'>
                    <label htmlFor="title" className='m-3'>Todo Title</label>
                    <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} placeholder="Enter your Title" className="form-control mb-3"/>

                    <label htmlFor="desc" className='m-3'>Todo Description</label>
                    <input type="text" value={desc} onChange={(e) => {setDesc(e.target.value)}} placeholder="Enter your todo" className="form-control mb-3"/>
                </div>
                
                <button 
                    className='btn btn-primary mt-2 px-4 py-2 fw-bold text-uppercase shadow-sm bg-blue-500 hover:bg-blue-600 text-white rounded' type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    )
}

export default AddTodo

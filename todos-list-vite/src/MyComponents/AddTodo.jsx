import React from 'react'

const AddTodo = () => {
return (
    <div className='container text-center mx-auto my-5'>
        <h3>Add Todo</h3>
        <form>
            <input type="text" placeholder="Enter your todo" className="form-control mb-3" />
            <button 
                className='btn btn-primary mt-2 px-4 py-2 fw-bold text-uppercase shadow-sm bg-blue-500 hover:bg-blue-600 text-white rounded' 
                type="button"
            >
                Add Todo
            </button>
        </form>
    </div>
)
}

export default AddTodo

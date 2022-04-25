import React from 'react';
import {useNavigate} from "react-router-dom";

const bookAdd = (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate= useNavigate();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [formData,updateFormData] =React.useState({
        name:"",
        bookCategory:0,
        authorId: 1,
        availableCopies: 1
    })

    const handleChange=(e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }
    const onFormSubmit =(e) =>{
        e.preventDefault();
        const name = formData.name;
        const bookCategory = formData.bookCategory;
        const authorId = formData.authorId;
        const availableCopies = formData.availableCopies;
        props.onAddBook(name,bookCategory,authorId,availableCopies);
        navigate("/books");
    }
    return (
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Book name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder="Enter book name"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bookCategory">Category</label>
                        <select name="bookCategory" className="form-control" onChange={handleChange}>
                            {props.categories.map((term) =>
                                <option>{term}</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <select name="authorId" className="form-control" onChange={handleChange}>
                            {props.authors.map((term) =>
                                <option value={term.id}>{term.name} {term.surname}</option>
                            )}

                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="availableCopies">Available Copies</label>
                        <input type="number"
                               className="form-control"
                               id="availableCopies"
                               name="availableCopies"
                               placeholder="Available Copies"
                               onChange={handleChange}
                        />
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>

    )
}


export default bookAdd;
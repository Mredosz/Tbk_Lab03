import React, {useState} from 'react';
import Input from "./Input";

export default function AddBook({add}) {
    const initial = {
        title: "",
        author: "",
        category: "",
        description: "",
    };

    const [enteredData, setEnteredData] = useState(initial);

    const handleChange = (id, event)=>{
        setEnteredData(prevState => {
            return {
                ...prevState,
                [id]: event.target.value
            }
        })
    }

    const handleSubmit = (event) => {
        setEnteredData(initial);
        add(enteredData, event);
    }

    return (
        <div>
            <form>
                <Input label="Title" type="text" onChange={(event) => handleChange("title", event)} value={enteredData.title}/>
                <Input label="Author" type="text" onChange={(event) => handleChange("author", event)} value={enteredData.author}/>
                <Input label="Category" type="text" onChange={(event) => handleChange("category", event)} value={enteredData.category}/>
                <Input label="Description" type="text" onChange={(event) => handleChange("description", event)} value={enteredData.description}/>
                <button onClick={handleSubmit}>Add new book</button>
            </form>
        </div>
    );
}
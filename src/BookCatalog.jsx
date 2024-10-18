import React, {useState} from 'react';
import AddBook from "./AddBook";

export default function BookCatalog({books}) {
    const [booksNew, setBooksNew] = useState(books);

    const categories = books.reduce((acc, el) => {
        if (!acc.includes(el.category)) {
            acc.push(el.category);
        }
        return acc;
    }, []);

    const handleFilter = (event) => {
        const selectedCategory = event.currentTarget.value;
        if (selectedCategory) {
            setBooksNew(books.filter(
                (book) =>
                    event.currentTarget.value === book.category));
        }else {
            setBooksNew(books);
        }
    }

    const addBook = (book, event) =>{
        event.preventDefault();
        setBooksNew(prevState => {
            return [
                ...prevState,
                book
            ]
        });
    }

    return (
        <div className="main">
            <div>
                <h1>Add new book</h1>
                <AddBook add={addBook}/>
            </div>
            <div>
                <h1>Catalog</h1>
                <select onChange={handleFilter}>
                    <option value="">All</option>
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
                <ul>
                    {booksNew.map(book => (
                        <div key={book.title} className="div">
                            <li>Title: {book.title}</li>
                            <li>Author: {book.author}</li>
                            <li>Category: {book.category}</li>
                            <li>Description: {book.description}</li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
}

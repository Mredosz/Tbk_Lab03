import React from 'react';
import BookCatalog from "./BookCatalog";

export default function App (){
    const books = [
        {
            title: "Władca Pierścieni",
            author: "J.R.R. Tolkien",
            category: "Fantasy",
            description: "Epicka opowieść o walce dobra ze złem w Śródziemiu."
        },
        {
            title: "Harry Potter i Kamień Filozoficzny",
            author: "J.K. Rowling",
            category: "Fantasy",
            description: "Historia młodego czarodzieja, który odkrywa swoje niezwykłe dziedzictwo."
        },
        {
            title: "Zbrodnia i Kara",
            author: "Fiodor Dostojewski",
            category: "Klasyka",
            description: "Psychologiczna analiza zbrodni i jej konsekwencji."
        },
        {
            title: "Rok 1984",
            author: "George Orwell",
            category: "Dystopia",
            description: "Przerażająca wizja totalitarnego świata, gdzie państwo kontroluje każdy aspekt życia."
        },
        {
            title: "Opowieść Podręcznej",
            author: "Margaret Atwood",
            category: "Dystopia",
            description: "Opowieść o świecie, w którym kobiety są podporządkowane surowym zasadom totalitarnego reżimu."
        }
    ];

    return (
        <div>
            <BookCatalog books={books}/>
        </div>
    );
};

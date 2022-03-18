import React, { useState } from 'react'

import Input from '../input'

import Book from '../book'

const Content = () => {
    const [bookList, setBookList] = useState([])
    const [newBookData, setNewBook] = useState({title: "", author: ""})

    const handleAddBook = () => {
        setBookList([...bookList, newBookData])
    }

    const onInputChange = (key, value) => {
        setNewBook(
            {
                ...newBookData,
                [key]: value
            }
        )
    }

    const onClose = (key) => {
        const newBookList = []
        for (let i = 0; i < bookList.length ; i ++) {
            if (i !== key) {
                newBookList.push(bookList[i])
            }
        }
        setBookList(newBookList)
    }

    return (
        <div className="p-4 pt-5 justify-start">
            <div className="flex flex-col justify-start max-h-96 overflow-auto">
                {
                    bookList.map((item, key) => {
                        return <Book title={item.title} key={key} onClose={() => onClose(key)} authorName={item.author} />
                    })
                }
            </div>

            <div className="mt-10">
                <Input onChange={(val) => onInputChange('title', val)} value={newBookData.title} placeholder="Book Title"/>
                <Input onChange={(val) => onInputChange('author', val)} value={newBookData.author} className="mt-5" placeholder="Author"/>
            </div>

            <button className="rounded-full bg-orange-500 p-10 pt-2 pb-2 text-white font-medium mt-5 float-left" onClick={() => handleAddBook()}>Create</button>
        </div>
    )
}

export default Content
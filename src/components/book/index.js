import React from 'react'

const Book = (props) => {
    const {
        title,
        authorName,
        onClose
    } = props
    return (
        <div className="w-100 text-left bg-orange-100 p-3 mt-3">
            <div className="flex flex-row justify-between">
                <div>
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="text-lg text-orange-600">{authorName}</p>
                </div>
                <div>
                    <button onClick={() => onClose()} className="button">X</button>
                </div>
            </div>
        </div>
    )
}

export default Book
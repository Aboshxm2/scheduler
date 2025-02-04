import { useState } from "react"

export default function Panel({ title, setScheduler }) {
    const [items, setItems] = useState([])

    const addItem = () => {

    }

    const removeItem = (i) => {

    }

    const openScheduler = (i) => {

    }

    return (
        <>
            <div>
                <p>{title}</p>
                <button onClick={() => addItem()}>add</button>
            </div>
            {items.map(i => (
                <div onClick={() => openScheduler(i)}>
                    <p>{i}</p>
                    <button onClick={() => removeItem(i)}>remove</button>
                </div>
            ))}
        </>
    )
}
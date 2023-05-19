import React, { useState, useEffect } from 'react'
import { app, database } from "../../firebase";
import { collection, addDoc, getDocs } from 'firebase/firestore';
const index = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [point, setPoint] = useState("")
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [name, setName] = useState("")
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [points, setPoints] = useState([])

    const db = collection(database, "discussions");
    const addPoint = (e) => {
        e.preventDefault();
        if (name !== "" && point !== "") {
            addDoc(db, {
                name,
                point
            })
        }
    }
    const getPoints = () => {
        getDocs(db)
            .then((data) => {
                setPoints(data.docs.map((item) => {
                    return { ...item.data(), id: item.id }
                }));
            })
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => getPoints(), [point])
    // console.log(points);
    return (
        <div className='p-16'>
            <div>
                {
                    points.map((item) => {
                        return (
                            <div key={item.id}>
                                <div className='text-white'>{item.point}</div>
                                <div className='text-gray-400'>{item.name}</div>
                            </div>
                        )
                    })
                }
            </div>
            <form action="submit">
                <input
                    required
                    placeholder='Message'
                    value={point}
                    onChange={(e) => setPoint(e.target.value)}
                    type="text" />
                <input
                    required

                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text" />
                <button
                    type='submit'
                    className='text-white'
                    onClick={addPoint}
                >Share</button>
            </form>
        </div>
    )
}

export default index
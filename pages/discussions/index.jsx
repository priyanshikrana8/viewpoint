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
                point,
                timestamp: Date.now()
            })
            setName("");
            setPoint("")
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
    useEffect(() => getPoints(), [point]);
    const bg = {
        background: "url('/images/bg.jpg') ",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        // backgroundAttachment: "fixed"
    }
    // console.log(points);
    return (
        <div style={bg} className='p-16 w-full flex flex-col '>
            <div className='font-bold text-4xl py-12 text-center text-white h-[50vh] flex items-center justify-center '>Discussions</div>
            <form className='w-full gap-6 flex justify-between my-16' action="submit">
                <input
                    required
                    className="p-2 w-1/4 backdrop-blur-md bg-white"
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text" />
                <textarea
                    required
                    placeholder='Message'
                    value={point}
                    onChange={(e) => setPoint(e.target.value)}
                    className='p-3 w-2/4 backdrop-blur-md flex justify-start items-center max-w-2/4  bg-white'
                    type="text" />
                <button
                    className="p-2 w-1/4 text-white bg-blue-800"
                    type='submit'
                    onClick={addPoint}
                >Share</button>
            </form>
            <div style={bg} className="flex flex-col gap-6">
                {
                    points.sort((a, b) => b.timestamp - a.timestamp).map((item) => {
                        return (
                            <div className='flex gap-6 w-full border-2 border-solid border-blue-800 rounded-xl p-3 backdrop-blur-md' key={item.id}>
                                <div className='text-gray-400 min-w-fit'>{item.name} | </div>
                                <div className='text-white'>{item.point}</div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default index
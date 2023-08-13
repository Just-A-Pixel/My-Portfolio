import React from 'react'



const Works = () => {
    const list = [
        {
            name: "a",
            desc: "dwadawdwa"
        }, 
        {
            name: "b",
            desc: "zxczxczc"
        }, 
        {
            name: "c",
            desc: "zxawdadawc"
        }
    ]
    
    // const res = 
    return (
        <>
            {
                list.map(item => {
                    return (
                        <ul>
                            <li>{item.name}</li>
                            <li>{item.desc}</li>
                        </ul>
                    )
                })
            }
        </>
    )
}

export default Works
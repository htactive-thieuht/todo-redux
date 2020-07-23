import React, { useState, useEffect } from "react";


export default function DataLoader() {
    const [data, setData] = useState([]);
    const [userData, setUserData] = useState({});
    const [url, setUrl] = useState("");

    // useEffect(() => {
    //     console.log('url', url);
    //     fetch("https://5ee6f6f952bb0500161fd241.mockapi.io/HookTest/")
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log('data', data);
    //             setData(data)
    //         });
    // });

    useEffect(() => {
        fetch("https://5ee6f6f952bb0500161fd241.mockapi.io/HookTest/")
            .then(response => response.json())
            .then(data => {
                console.log('data', data);
                setData(data)
            });
    }, []);

    useEffect(() => {
        console.log('url', url);
        fetch("https://5ee6f6f952bb0500161fd241.mockapi.io/HookTest/" + url) //hien thi theo id mik nhap tu ban phim
            .then(response => response.json())
            .then(data => {
                console.log('data', data);
                setUserData(data)
            });
    }, [url]);


    // console.log([data], 'aaaaaaaaaaa');

    return (
        <div className="container">
            <h1>CRUD App with Hooks</h1>
            <input type="text" onChange={(e) => setUrl(e.target.value)} />
            <div className="flex-row">
                <div className="flex-large">
                    <h2>All users</h2>
                    <ul>
                        {data.map(el => (
                            <li key={el.id}>{el.name}</li>
                        ))}
                       
                    </ul>
                    <h2>User detail</h2>
                    
                        {userData && 
                            <p key={userData.id}>{userData.name}</p>
                        }
                   
                </div>
            </div>
        </div>

    );
}
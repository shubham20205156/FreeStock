import { React, useEffect } from 'react'

const fetchBalance = () => {
    useEffect(async () => {
        const response = await fetech("http://localhost:5000/api/auth/getBalance", {

           method:'POST',
           headers:{
            "Content-Type":"application/json"
           },
           body:('id')
        })
    }, [])

    return (
        <div>fetchBalance</div>
    )
}

export default fetchBalance
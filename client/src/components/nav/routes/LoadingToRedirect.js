import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

const LoadingToRedirect = () => {
    const [count, setCount] = useState(5)
    let history = useHistory()

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(c => --c)
        }, 1000);
        count === 0 && history.push('/')
        // eslint-disable-next-line react-hooks/exhaustive-deps
        return () => clearInterval(interval)
    }, [count])
    return (
        <div className='container p-5 text-center'>
            <p>Redirecting you in {count} seconds</p>
        </div>
    )
}
export default LoadingToRedirect
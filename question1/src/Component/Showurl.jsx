import React,{useEffect,useState} from 'react'

const Showurl = () => {
const [addedurl, setaddedUrl] = useState([]);
const [message,setMessage] = useState('');
useEffect(() => {
     setMessage('Loading ...');
    fetch('http://localhost:5000/shorturls',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }.then(response => response.json())
        .then(data => {
            setaddedUrl(data);
        })
        .catch(error => {
            console.error('Error fetching URLs:', error);
            setMessage('Failed to load URLs');
        })
        
    })
    setMessage('');
}, []);
  return (
    <div>
        <h1>Shortened URLs</h1>
        {message && <p>{message}</p>}
       {
            addedurl.length > 0 ? (
                <ul>
                    {addedurl.map((item, index) => (
                        <li key={index}>
                            <p>Original URL: {item.url}</p>
                            <p>Shortcode: {item.shortcode}</p>
                            <p>Validity: {item.validity} days</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No URLs added yet.</p>
            )
       }
      
    </div>
  )
}

export default Showurl

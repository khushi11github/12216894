import React,{useState,useEffect}from 'react'
import { useNavigate } from 'react-router-dom'

import './urlpage.css'




const UrlPage = () => {
    const Navigate = useNavigate();
    const [original,setUrl] = useState('')

    let [shortcode,setShortCode] = useState('')
    let [validity,setValidity] = useState('')
    const [ addedurl,setaddedUrl] = useState({})
    const [error, setError] = useState('');


const addurl = (e) => {
    e.preventDefault();
    if(addedurl.length >= 5){
        setError('You can only add up to 5 URLs');
        return;
    }
    if(original === ''){
        alert('Please enter a valid URL');
        return;
    }
    let tempShortcode = shortcode;
    let tempValidity = validity;
    if(tempShortcode === ''){
        tempShortcode = Math.random().toString(36).substring(2, 8);
    }
    if(tempValidity === ''){
        tempValidity = 30;
    }
    setaddedUrl(prev => [
        ...(Array.isArray(prev) ? prev : []),
        {
            url: original,
            shortcode: tempShortcode,
            validity: tempValidity
        }
    ]);
    setUrl('');
    setShortCode('');
    setValidity('');
};
    const handleSubmit = () => {


       fetch('http://loaclhost:5000/shorturls', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            url : original,
            validity : validity ? validity : 30,
            shortcode : shortcode 
           
        })
       });
       Navigate('/showurls');
    };
  return (
    <div className="container">
     <h1> URL Shortner </h1>
    <form>  
    <label>Enter Original URL:</label>
    <input type="url" placeholder="Enter Original URL" value={original}  onChange={(e)=>{setUrl(e.target.value)}}/><br/><br/>
    <label>Enter preferred ShortCode(Optional): </label>
    <input type="txt" placeholder="Enter preferred Shortcode" value={shortcode} onChange={(e)=>{setShortCode(e.target.value)}}/><br/><br/>
    <label> Enter Validity Period(in minutes)</label>
    <input type="text" placeholder="Enter Validity Period" value={validity} onChange={(e)=>{setValidity(e.target.value)}} /><br/><br/>
    <button onClick={addurl}>Add URL</button>
    <button onClick={handleSubmit}>Submit</button>
    </form>

    <div className='addedurl'>
        {error && <p className="error">{error}</p>}
        <h2>Added URLs:</h2>
        <p>Note: You can add up to 5 URLs only.</p>
        {addedurl.length > 0 ? (
            addedurl.map((item, index) => (
                <div key={index}>
                    <p>Original URL: {item.url}</p>
                    <p>Shortcode: {item.shortcode}</p>
                    <p>Validity: {item.validity} minutes</p>
                </div>
            ))
        ) : (
            <p>No URLs added yet.</p>
        )}
       
    </div>

    </div>
  )
}

export default UrlPage

import React,{useState} from 'react'
export default function Textform(props)
{
    const handleupclick = ()=>
    {
        // console.log("hello");
        let n = text.toUpperCase();
        settext(n);
    };
    const handleonchange = (event)=>
    {
        // console.log("hiii");
        settext(event.target.value);
    }
    const handlelower = ()=>
    {
        settext(text.toLowerCase());
    }
    const handleCopy = ()=>
    {
        navigator.clipboard.writeText(text);
    }
    const [text,settext] = useState('enter the value');
    return(
        <>
        <div>
        <h1 className={`text-${props.mode==='light'?'dark':'light'} mxs-7`}>{props.head}</h1>
         <div className="form-group text-light" >
             <textarea className="form-control" value={text} id="exampleFormControlTextarea1" rows="8" onChange={handleonchange} ></textarea>
             <button className="btn btn-primary my-3 mx-3" onClick={handleupclick}>covert to uppercase</button>
             <button className='btn btn-primary my-3 mx-3' onClick={handlelower}>convert to lower</button>
             <button className='btn btn-primary my-3 mx-3' onClick={handleCopy}>copyText</button>
         </div>
         <div className={`container text-${props.mode==='light'?'dark':'light'}`} style={{
            // color : props.mode === 'dark'?'light':'light'
         }}>
            <h2 >{text.split(" ").length} words and {text.length} characters</h2>
         </div>
        </div>
        </>
    );
}
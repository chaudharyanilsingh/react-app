import React,{useState} from 'react'
function UseStatedemo()
{
    const[num,setnumber]=useState(0)
    
    const Incrementfive = ()=>{
        for(let i=0;i<5;i++)
        {
            setnumber(prevNum=>prevNum+1)
        }
    }
    const [count , setCount]=useState({firstname:'anil', lastname:'chaudhary'})
    return(
        <div>
            num : {num}
            <button onClick={()=> setnumber(num+1)}>INC </button><br></br>
            <button onClick={()=> setnumber(num-1)}>DEC </button><br></br>
            <button onClick={()=> setnumber(0)}>RESET   </button><br></br>
            <button onClick={Incrementfive}>RESETklsjlkkl  </button><br></br>

            <h1> your first name is : {count.firstname}</h1>
            
            <h1> your last name is : {count.lastname}</h1>

            <input type="text"  onChange={e =>setCount({ ...count, firstname: e.target.value})} />
            
           <input type="text" value={count.lastname} onChange={e =>setCount({...count, lastname: e.target.value})} />
        </div>
    )
}
export default UseStatedemo
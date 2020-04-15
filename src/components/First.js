import React from 'react';
function First(props)
{
    return <div>
        <h1> this is inside function</h1>
<h2> hello {props.name}</h2>
{props.children}
</div>
}
export default First

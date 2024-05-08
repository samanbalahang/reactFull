// import React, { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import { useState } from 'react';
// let context = {
//     title : "عنوان",
//     para  :"    این یک اپلیکیشن تحت ریکت است.",
//  };
// let lists= [
//     {title : "لیست"},
//     {title : "لیست"},
//     {title : "لیست"},
// ];
// const listItems = lists.map(list =>
//     <li>
//       {list.title}
//     </li>
// );
// let template = (
// <>
// <h1>
//     {context.title}
// </h1>
// {context.para ? <p>    {context.para}</p> : false}
// {listItems.length > 0 ? <p>hear your options</p> : <p>hear no options</p>}
// <ol>
//     {listItems}
// </ol>
// </>
// );
// let user ={
//     name : "my name",
//     age  : 30,
//     location : "philadelphia"
// }
// function getLocation(location){
//     // دستورات شرطی در ریکت
//     if(location){
//         return <p> location: {location} </p>;
//     }
// }
// // شرط های یک خطی در ریکت
// let template = (
//     <div>
//     <h1>
//        {user.name}
//     </h1>
//     {user.age && user.age >= 18 ? <p> age : {user.age } </p> : false}
//         {getLocation(user.location)}

//     <ol>
//         <li>
//         لیست
//         </li>
//         <li>
//         لیست
//         </li>
//         <li>
//         لیست
//         </li>
//     </ol>
//     </div>
// )


/* -----------------------------------------------
|
|                  counter
|
|-------------------------------------------------*/

const title = "عنوان سایت";
let count   = 0;
let appRoot = document.getElementById("app");

const plus =()=>{
  count++;
 renderCounterApp();

}
const minus =()=>{
  count--;
  renderCounterApp();
}
const reseter =()=>{
  count = 0;
  renderCounterApp();
}
// const count = 0
const renderCounterApp = ()=>{
let template = (
    <div>
      <h1>
        عنوان سایت
      </h1>
      <p>
        شمارنده
        <span>
          {count}
        </span>
      </p>
      <button id="plus" className="btn btn-success" onClick={plus}>
        +1
      </button>
      <button id="plus" className="btn btn-danger" onClick={minus}>
      -1
      </button>
      <button id="plus" className="btn btn-warning" onClick={reseter}>
        reset
      </button>
      
    </div>
  );


  ReactDOM.render(template,appRoot);

}

renderCounterApp();

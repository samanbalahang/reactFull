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
// const title = "عنوان سایت";
// let count   = 0;


// const plus =()=>{
//   count++;
//  renderCounterApp();

// }
// const minus =()=>{
//   count--;
//   renderCounterApp();
// }
// const reseter =()=>{
//   count = 0;
//   renderCounterApp();
// }
// // const count = 0
// const renderCounterApp = ()=>{
// let template = (
//     <div>
//       <h1>
//         عنوان سایت
//       </h1>
//       <p>
//         شمارنده
//         <span>
//           {count}
//         </span>
//       </p>
//       <button id="plus" className="btn btn-success" onClick={plus}>
//         +1
//       </button>
//       <button id="plus" className="btn btn-danger" onClick={minus}>
//       -1
//       </button>
//       <button id="plus" className="btn btn-warning" onClick={reseter}>
//         reset
//       </button>
      
//     </div>
//   );


//   ReactDOM.render(template,appRoot);

// }

// renderCounterApp();

/*-------------------------------
|
|
|           FORM
|
|
|--------------------------------*/
let appRoot = document.getElementById("app");
const app = {
    title    : "اپلیکیشن",
    subtitle : "موضوع اپلیکیشن",
    options  :[],
  };
const onFormSubmit = e=>{
    e.preventDefault();
    const options = e.target.elements.options.value;
    if(options != ''){
      app.options.push(options);
      e.target.elements.options.value = ''
      formSubmitionsApp();
    }
  }
const emptyList = ()=>{
  app.options = [];
  formSubmitionsApp();  
}
const randomSelect = ()=>{
  randomNum = Math.floor(Math.random()* app.options.length)
  console.log(randomNum);
  alert(app.options[randomNum]);
}
const formSubmitionsApp = ()=>{
  const template = (
    <div>
      <h1>
        {app.title}
      </h1>
      <p>
        {app.subtitle}
      </p>
      <p>
        {app.options.length > 0? "here your option":"no options"}
      </p>
      <p>
        {app.options.length}
      </p>

      <ol>
          {app.options.map(e=><li key = {e}>{e}</li>)}
      </ol> 
      <form onSubmit={onFormSubmit}>
        <input type="text" name="options" id="options" />
        <input type="submit" value="addOption" />
      </form>
      <button onClick={emptyList}>
        حذف همه آیتم های لیست
      </button>
      <button onClick={randomSelect} disabled={app.options.length === 0}>
       انتخاب تصادفی
      </button>
    </div>
  )
  ReactDOM.render(template,appRoot);
}
formSubmitionsApp();
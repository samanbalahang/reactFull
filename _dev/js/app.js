let context = {
    title : "عنوان",
    para  :"    این یک اپلیکیشن تحت ریکت است.",
 };
let lists= [
    {title : "لیست"},
    {title : "لیست"},
    {title : "لیست"},
];
const listItems = lists.map(list =>
    <li>
      {list.title}
    </li>
);
let template = (
<>
<h1>
    {context.title}
</h1>
{context.para ? <p>    {context.para}</p> : false}
{listItems.length > 0 ? <p>hear your options</p> : <p>hear no options</p>}
<ol>
    {listItems}
</ol>
</>
);




let user ={
    name : "my name",
    age  : 30,
    location : "philadelphia"
}
function getLocation(location){
    if(location){
        return <p> location: {location} </p>;
    }
}
let template2 = (
    <div>
    <h1>
       {user.name}
    </h1>
    {user.age && user.age >= 18 ? <p> age : {user.age } </p> : false}
        {getLocation(user.location)}

    <ol>
        <li>
        لیست
        </li>
        <li>
        لیست
        </li>
        <li>
        لیست
        </li>
    </ol>
    </div>
)
let appRoot = document.getElementById("app");
ReactDOM.render(template,appRoot);
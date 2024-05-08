const title = "some title";
let   buttnText = "show deitails";
let appRoot = document.getElementById("app");
let   thestyle  = "display:none";
let   showAble  = "d-none";
const showThedetaile = ()=>{
        if(showAble == "d-none"){
            showAble = "d-block";
            theShowAbleApp();
        }else{
            showAble = "d-none";
            theShowAbleApp();
        }
}
const theShowAbleApp = ()=>{

   
    const template =(
        <div>
            <h1>
                {title}
            </h1>
            <button onClick={showThedetaile}>
                {buttnText}
            </button>
            <div  className={showAble}>
                <p>
                    جزئیات نمایش داده شده!
                </p>
            </div>
        </div>
    ) 

  
    ReactDOM.render(template,appRoot);
}
theShowAbleApp();

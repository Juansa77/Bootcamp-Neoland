import "./Figure.css"


const Figure =({data})=>{


return(

<div className="imgDiv">

<img className="nasaImage" src ={data.url} alt ={data.title}/>
<div class="window">
<h1 className="title">{data.title}</h1>


</div>

<div className="details-bar">
<span>{data.date}</span>
<span>{data.copyright}</span>

</div>
<div className="window-pane">{data.explanation}</div>

</div>

)


}

export default Figure
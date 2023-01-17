
import "./Footer.css"
const Footer=(props)=>{

return <div className="footer"><p className="author">{props.author}</p>
<img className="logoPicture" src={props.src}/>
<p className="copyrightText">{props.copyright}</p>


</div>



}

export default Footer
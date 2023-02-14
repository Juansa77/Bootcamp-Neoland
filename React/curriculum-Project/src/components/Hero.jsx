import "./Hero.css"

const Hero =({hero})=>{

return  (

<div className="hero">

<img src={hero.image} alt=""/>
<div className="heroCard">
<h1>{hero.name} {hero.surname}</h1>
<p>🗺️{hero.city}</p>
<p>🗓️{hero.birthDate}</p>
<p>📧<a href={"mailto:" + hero.email}>dedalus1977@gmail.com</a></p>
<p>{hero.phone}</p>
<p>💾<a href={hero.gitHub}>GitHub</a></p>


</div>

</div>

)


}

export default Hero
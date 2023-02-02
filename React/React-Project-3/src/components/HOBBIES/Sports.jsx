import "./Sports.css"

const Sports = ({data}) =>{


return(

    <div className="sportsDiv">
    {
        
data.sports.map((element, index) =>(

<div key={index}>
<h3>Name: {element.name}</h3>
<h3>Indoor: {element.indoor}</h3>
<h3>Favourite Team: {element.favoriteTeam}</h3>

</div>

))

    }

    </div>


)


}

export default Sports
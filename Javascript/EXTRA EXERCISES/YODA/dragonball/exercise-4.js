async function dragonBall() {
  const planetsUrl = new URL("http://localhost:3000/planets");

  const rawPlanets = await fetch(planetsUrl);
  const formattedPlanets = await rawPlanets.json();

  for (const iterator in formattedPlanets) {
    var div = document.createElement("div");
   div.style.flexDirection="column"
    
    div.id = "div" + formattedPlanets[iterator].name;
    console.log(div.id);
    document.body.appendChild(div);

    var imagPlanet = document.createElement("img");

    imagPlanet.id = "img" + formattedPlanets[iterator].id;
    console.log(imagPlanet.id);

    div.append(imagPlanet);
    imagPlanet.src = formattedPlanets[iterator].image;
    imagPlanet.style.width = "350px";
    imagPlanet.style.margin = "10px";
    div.align = "middle";

    const charactersPlanet = new URL(
      "http://localhost:3000/characters?idPlanet=" +
        formattedPlanets[iterator].id
    );
    const rawCharac = await fetch(charactersPlanet);
    const formattedCharac = await rawCharac.json();

    imagPlanet.addEventListener("click", function relatedChracter() {
      for (const key in formattedCharac) {
 
          let div = document.getElementById(
            "div" + formattedPlanets[iterator].name
          );

          var img = document.createElement("img");

          img.src = formattedCharac[key].avatar;
          div.append(img);

          console.log(formattedCharac[key].name);
        
      }
    });
  }
}

dragonBall();

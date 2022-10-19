const country = [
  { country_id: "CO", probability: 0.115 },

  { country_id: "ES", probability: 0.088 },

  { country_id: "AR", probability: 0.087 },

  { country_id: "CL", probability: 0.087 },

  { country_id: "MX", probability: 0.084 },
];

for (const iterator of country) {
  for (const claves in iterator) {
    const countryName = iterator["country_id"];
    const probal = iterator["probability"];
    let h4 = document.createElement("h4");
    document.body.appendChild(h4);
    h4.innerHTML =
      "El nombre " +
      " tiene una probabilidad de " +
      probal +
      " de ser de " +
      countryName;

    h4.id = "h4" + claves;
  }
}

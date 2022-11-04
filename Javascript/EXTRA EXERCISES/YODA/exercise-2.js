const baseUrl = "http://localhost:3000/diary";
const url = new URL(baseUrl);

async function diaryGet() {
  const rawData = await fetch(url);
  const formatted = await rawData.json();
  const orderedByDate = formatted.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  console.log(orderedByDate);

  orderedByDate.forEach((element) => {
    let div = document.createElement("div");
    document.body.appendChild(div);

    let h3 = document.createElement("h3");
    div.append(h3);
    h3.innerText = element.title;

    let h5 = document.createElement("h5");
    div.append(h5);
    h5.innerText = element.date;

    let p = document.createElement("p");
    div.append(p);
    p.innerText = element.description;

    let button = document.createElement("button");
    div.append(button);
    button.innerText = "Borra esto";

    button.addEventListener("click", function eraser() {
      var div = document.querySelector("div");
      document.body.removeChild(div);
    });
  });
}

diaryGet();

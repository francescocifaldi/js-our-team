const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

let cardsContainer = document.getElementById('cards');
for (let i = 0; i < teamMembers.length; i++) {
  let card = document.createElement("div");
  card.classList.add("col-lg-4", "debug");
  let cardRows = document.createElement("div");
  cardRows.classList.add("row");
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("col-4", "p-0")
  imgContainer.innerHTML = `<img src="./${teamMembers[i].img}">`
  let description = document.createElement("div");
  description.classList.add("col");
  description.innerHTML = `<p>${teamMembers[i].name.toUpperCase()}</p>`
  //cardsContainer.append(card, cardRows, imgContainer)
  cardRows.append(imgContainer)
  cardRows.append(description)
  card.append(cardRows)
  cardsContainer.append(card)
}


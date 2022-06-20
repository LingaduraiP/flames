const boyName = document.querySelector(".boyName");
const girlName = document.querySelector(".girlName");
const submitBtn = document.querySelector(".submitbtn");
const image = document.querySelector(".img");
const text = document.querySelector(".text");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const result = document.querySelector(".result");
const backBtn = document.getElementById("backBtn");

// let flames = ["friend", "love", "arrange", "mrage", "enemy", "sister"];

let flames = [
  {
    text: "Friend",
    img: "./img/friends.jpg",
  },
  {
    text: "Love",
    img: "./img/lovers.jpg",
  },
  {
    text: "Arranged",
    img: "./img/arrangedmarriage.jpg",
  },
  {
    text: "Marriage",
    img: "./img/marriage.jpg",
  },
  {
    text: "Enemy",
    img: "./img/enemy.jpg",
  },
  {
    text: "Sister",
    img: "./img/sister.jpg",
  },
];

// ---------- Scripts for Flames  ----------

// Submit Handlwe
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // Checking Values
  if (boyName.value !== "" && girlName.value !== "") {
    const name = boyName.value + girlName.value;
    const totalLength = name.length;

    while (flames.length !== 1) {
      flames = flames.splice(totalLength % 6, 1);
    }
    if (flames.length === 1) {
      two.classList.remove("disable");
      one.classList.add("disable");
      text.textContent = flames[0].text;
      image.src = flames[0].img;
    }
  }

  //   Else Case
  else {
    alert(boyName.value != "" ? "Enter the Girl Name" : "Enter the boy Name");
  }
});

// BackbtnHandler
backBtn.addEventListener("click", function (e) {
  e.preventDefault();
  two.classList.add("disable");
  one.classList.remove("disable");
  girlName.value = "";
  boyName.value = "";
  flames = [
    {
      text: "Friend",
      img: "./img/friends.jpg",
    },
    {
      text: "Love",
      img: "./img/lovers.jpg",
    },
    {
      text: "Arranged",
      img: "./img/arrangedmarriage.jpg",
    },
    {
      text: "Marriage",
      img: "./img/marriage.jpg",
    },
    {
      text: "Enemy",
      img: "./img/enemy.jpg",
    },
    {
      text: "Sister",
      img: "./img/sister.jpg",
    },
  ];
});

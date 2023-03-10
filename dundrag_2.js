const dnd5eapiLink = "https://www.dnd5eapi.co/graphql";

function apiCallClass() {
  return fetch(dnd5eapiLink, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: "{classes {name hit_die class_levels { level } } }",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      const characterClass = [];
      for (let i = 0; i < data.data.classes.length; i++) {
         characterClass.push(data.data.classes[i].name);
      }
      return characterClass;
    });
}

apiCallClass().then((characterClass) => {
  console.log('characterClassArray ~>', characterClass);

  const container = document.getElementById('container');

  for (let i = 0; i < characterClass.length; i++) {
    const newH2 = document.createElement("h2");
    newH2.innerHTML = characterClass[i];
    container.appendChild(newH2);
  }
});


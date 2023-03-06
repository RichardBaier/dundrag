fetch("https://www.dnd5eapi.co/graphql", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query: "{ spells { desc name } }" }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));

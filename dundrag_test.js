const dnd5eapiLink = "https://www.dnd5eapi.co/graphql";

function apiCallClass() {
  fetch(dnd5eapiLink, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: "{classes {name hit_die class_levels { level } } }",
    }),
  })
    .then((response) => response.json())
    .then((data) => {

      console.log("class >>", data)
      // console.log('I WANT THIS ~>', data.data.classes.length);



      
      const characterClasses = {};
      for (let i = 0; i < data.data.classes.length; i++) {
        const className[i] = data.data.classes[i].name;

        console.log(className[i])




        // characterClasses[className] = `class${i}`;
      }
      // console.log(characterClasses);

    })

    

   
    
}

apiCallClass();

// apiCallClass().then((classes) => {
//   const characterClasses = {};
//   for (let i = 0; i < classes.length; i++) {
//     const className = classes[i].name;
//     characterClasses[className] = `class${i}`;
//   }
//   console.log(characterClasses);
// });
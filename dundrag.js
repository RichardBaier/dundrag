const dnd5eapiLink = "https://www.dnd5eapi.co/graphql";

function apiCallSpells() {
  fetch(dnd5eapiLink, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: "{ spells { desc name } }" }),
  })
    .then((response) => response.json())
    .then((data) => console.log("spells >>", data));
}
apiCallSpells();

function apiCallSkills() {
  fetch(dnd5eapiLink, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: "{ skills { name desc } }" }),
  })
    .then((response) => response.json())
    .then((data) => console.log("skills >>", data));
}

apiCallSkills();

function apiCallClass() {
  fetch(dnd5eapiLink, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: "{classes {name hit_die class_levels { level } } }",
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log("class >>", data));
}

apiCallClass();

function apiCallEquipments() {
  fetch(dnd5eapiLink, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query:
        "{equipments {... on Gear {name desc cost { quantity unit } } ... on Weapon { name desc cost { quantity unit } damage { damage_dice damage_type { name desc } } weapon_range } ... on Pack { name desc cost { quantity unit } contents { quantity } } ... on Armor { name desc cost { quantity unit } weight armor_class { base dex_bonus max_bonus } } ... on Ammunition { name desc quantity cost { quantity unit } }}}",
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log("equipments >>", data));
}

apiCallEquipments();

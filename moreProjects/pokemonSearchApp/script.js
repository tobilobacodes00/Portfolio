document.getElementById("search-button").addEventListener("click", async () => {
  const input = document.getElementById("search-input").value.toLowerCase().trim();
  const url = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${input}`;

  if (input === "red") {
    alert("Pokémon not found");
    return;
  }

  try {
    const res = await fetch(url);
    
    if (!res.ok) {
      alert("Pokémon not found");
      return;
    }

    const data = await res.json();

    document.getElementById("pokemon-name").textContent = data.name;
    document.getElementById("pokemon-id").textContent = `#${data.id}`;

    const statsMap = {
      hp: 0,
      attack: 1,
      defense: 2,
      "special-attack": 3,
      "special-defense": 4,
      speed: 5
    };

    for (const [statId, index] of Object.entries(statsMap)) {
      const element = document.getElementById(statId);
      if (element) {
        element.textContent = data.stats[index].base_stat;
      }
    }

    document.getElementById("weight").textContent = `Weight: ${data.weight}`;
    document.getElementById("height").textContent = `Height: ${data.height}`;

    const spriteContainer = document.getElementById("sprite-container");
    spriteContainer.innerHTML = "";

    const sprite = document.createElement("img");
    sprite.id = "sprite";
    sprite.src = data.sprites.front_default;
    sprite.alt = data.name;
    spriteContainer.appendChild(sprite);

    const typesContainer = document.getElementById("types");
    typesContainer.innerHTML = "";

    data.types.forEach(t => {
      const span = document.createElement("span");
      span.textContent = t.type.name.toUpperCase();
      typesContainer.appendChild(span);
    });

  } catch (error) {
    console.error("Error:", error.message);
    alert("Pokémon not found. Please try again!");
  }
});
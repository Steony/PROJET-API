"use.strict";

//ACCES AU DOM
const btnRandom = document.querySelector(".btnRandom");
const recipedisplay = document.querySelector(".recipedisplay");
const container = document.querySelector(".container");

//au clic un recipe random va s'afficher avec le titre, l'image, les ingrédients et la recette
btnRandom.addEventListener("click", () => {
  fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=4c9614227abd4b6bb7c4206d0ba422ad&include-tags=asian`
  )
    .then((res) => res.json())
    .then((data) => {
      const recipe = data.recipes[0];
      const ingredients = recipe.extendedIngredients
        .map((ingredient) => `<li>${ingredient.original}</li>`)
        .join("");

      // affichage sur le html
      const recipeHTML = `

  <h2>${recipe.title}</h2>

  <img src="${recipe.image}">

<div class = "ingredient">
  <h3> Ingredients: </h3>
  <p>${ingredients}  </p>
</div>

<div class = "instructions">
  <p>${recipe.instructions}</p>
  </div>
`;
      recipedisplay.innerHTML = recipeHTML;
    })

    .catch((error) => console.error("Error recipe:", error));
});

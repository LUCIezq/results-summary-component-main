// Selecciona todos los elementos que contienen los puntajes
const scores = document.querySelectorAll(".summary__element-right");
const container = document.querySelector(".result");

const state = () => {
  const averageElement = document.querySelector(".avg__top");
  const averageElementInteger = parseInt(averageElement.textContent);

  const title = document.querySelector(".result__information-title");

  if (averageElementInteger >= 0 && averageElementInteger <= 30) {
    title.textContent = "Bad";
    container.style.background= '#ca0808';

  
  } else {
    if (averageElementInteger > 30 && averageElementInteger < 70) {
      title.textContent = "Okay";
      container.style.background= '#caad08';

   
    } else {
      title.textContent = "Great";
      container.style.background= '#5eaa47';
    }
  }
};

const button = document.querySelector(".button__submit");

button.addEventListener("click", (e) => {
  const scores = document.querySelectorAll(".summary__element-right");

  scores.forEach((score) => {
    const random = Math.random() * (100 - 0) + 0;
    score.textContent = Math.round(random) + " / 100";
  });

  // Extrae los valores de los puntajes y almacénalos en un array
  const scoreValues = [];

  scores.forEach((score) => {
    const value = parseInt(score.textContent.split("/")[0].trim());

    /* SPLIT DIVIDE LA CADENA EN DOS USANDO EL SLASH COMO REFERENCIA QUEDANDOSE CON EL ELEMENTO EN LA POSICION 0 Y ELIMINA LOS ESPACIOS EN BLANCOS*/

    scoreValues.push(value); //PUSH AGREGA AL ARRAY
  });

  // Calcula el promedio de los puntajes
  const average =
    scoreValues.reduce((acc, score) => acc + score, 0) / scoreValues.length; //ACC - ACUMULADOR / SCORE =ELEMENTO / ACC+SCORE ES LA SUMA Y 0 LA POSICION INICIAL

  // Selecciona el elemento donde se mostrará el promedio y lo actualiza
  const averageElement = document.querySelector(".avg__top");
  averageElement.textContent = Math.round(average);

  state();
});

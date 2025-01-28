/*
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail 
!generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
!Bonus
Abbellire con CSS o Bootstrap
Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)
Buon Lavoro
 */

const listaMail = document.getElementById("listaMail");

// for (let i = 0; i <= 9; i++) {
//   axios
//     .get("https://flynn.boolean.careers/exercises/api/random/mail")
//     .then((risposta) => {
//       console.log(risposta.data.response);

//      let  emailGenerator = risposta.data.response;

//       listaMail.innerHTML += `
//         <li class="list-group-item">${emailGenerator}</li>
//         `;
//     });
// }

function generator() {
  for (let i = 0; i <= 9; i++) {
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((risposta) => {
        console.log(risposta.data.response);

        let emailGenerator = risposta.data.response;

          listaMail.innerHTML +=
            `
              <li class="list-group-item">${emailGenerator}</li>    
            `;
      });
  }
}
generator();

rigenera.addEventListener("click", function () {
    listaMail.innerHTML = "";
  generator();
});

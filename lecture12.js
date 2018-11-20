function winOrLoose(cbWin,cbLoose) {
    let veroqtnost = Math.floor(Math.random() * 10) + 1;
    console.log(veroqtnost);
    if (veroqtnost <= 5) {
        cbWin();
    } else {
        cbLoose();
    }
}

// function youLoose(){
//     console.log("You loose");
// }

// function youWin() {
//     console.log("Now you are a millioner!");
// }

//winOrLoose(youWin,youLoose);

// winOrLoose(
//     function(){
//         console.log("Now you are a millioner!");
//     },
//     function(){
//         console.log("You loose");
//     }
// );

// //lambda izrazi
// winOrLoose(
//     () => console.log("Now you are a millioner!"),
//     () => console.log("You loose")
// );


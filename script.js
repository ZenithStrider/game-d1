let character = document.querySelector(".character");
let block = document.querySelector(".block");



const getRandomInt = function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomNum = function(){
    return getRandomInt(1,2);
}



let isCharacterType1 = true;

const updateCharacterType = function(){
    character.classList.remove("character-type-1");
    character.classList.remove("character-type-2");
    character.classList.add("character-type-1");

    if (isCharacterType1) {
        character.classList.remove("character-type-2");
        character.classList.add("character-type-1");
    } else {
        character.classList.remove("character-type-1");
        character.classList.add("character-type-2");
    }
    isCharacterType1 = !isCharacterType1;
    
}

const updateCharacter = function(){
    updateCharacterType();
}

updateCharacter();




const updateBlockType = function(){
    const blockType = getRandomNum();
    block.classList.remove("block-type-1");
    block.classList.remove("block-type-2");

    block.classList.add(`block-type-${blockType}`);
}

const updateBlock = function(){
    updateBlockType();
}

updateBlock();




document.addEventListener('keydown', function(e){
    e.preventDefault();
    let characterColor = (window.getComputedStyle(character).getPropertyValue("background-color"));
    let blockColor = (window.getComputedStyle(block).getPropertyValue("background-color"));
    if(e.key === ' '){
        updateCharacterType();
    }
});



let changeColor = setInterval(function(){
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft < 20 && blockLeft > 0){

        updateBlock();

    }

},1);


let checkDead = setInterval(function(){
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    
    // if(blockLeft < 20 && blockLeft > 0) {
    //     setTimeout(function() {
    //         let characterColor = window.getComputedStyle(character).getPropertyValue("background-color");
    //         let blockColor = window.getComputedStyle(block).getPropertyValue("background-color");

    //         let characterRGB = characterColor.match(/\d+/g);
    //         let blockRGB = blockColor.match(/\d+/g);

    //         console.log(characterRGB, blockRGB);
    //         if (!(characterRGB.toString() === blockRGB.toString())) {
    //             block.style.animation = "none";
    //             block.style.display = "none";
    //             alert("You lost!");
    //             updateBlock();
    //         }
    //     }, 100);
    // }






    let characterColor = window.getComputedStyle(character).getPropertyValue("background-color");
    let blockColor = window.getComputedStyle(block).getPropertyValue("background-color");


    let characterRGB = characterColor.match(/\d+/g);
    let blockRGB = blockColor.match(/\d+/g);

    console.log(characterRGB, blockRGB);
    if(blockLeft < 20 && blockLeft > 0 && !(characterRGB.toString() === blockRGB.toString())){
        block.style.animation = "none";
        block.style.display = "none";

        alert("nigga u lost");
        updateBlock();
    }

},1);
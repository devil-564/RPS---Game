let x = prompt("Enter Your User Name")
let user_name = document.getElementById("user_name");
let computer_count = document.getElementById("computer_count")
let user_count = document.getElementById("user_count")
if(x == "")
user_name.innerHTML = "Unknown Player";
else
user_name.innerHTML = x;

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function animation(user) {
    user.style.animation = "flip 2200ms ease forwards";  
}

// function allAnimation(u1, u2, u3) {
//     u1.style.animation = "bigShake 0.7s ease forwards"
//     u2.style.animation = "bigShake 0.7s ease forwards"
//     u3.style.animation = "bigShake 0.7s ease forwards"
// }

let user1 = document.getElementById("sub_container1");
let user2 = document.getElementById("sub_container2");
let user3 = document.getElementById("sub_container3");
let show_section = document.getElementById("show_section")
let result_area = document.getElementById("battle_area")
let computer_input = getRandom(0, 3);
let uc = 0;
let cc = 0;

// 0 -> Rock
// 1 -> Paper
// 2 -> Scissors
// console.log(computer_input)

user1.addEventListener("click", () => {

    // console.log("clicked")
    show_section.innerHTML = "";
    battle_area.innerHTML = ""
    animation(user1);
    // allAnimation(user1, user2, user3);

    if (computer_input == 0){
       
        setTimeout(() => {
            battle_area.innerHTML = "Rock vs. Rock";
            show_section.innerHTML = "Draw";
            user1.style.animation = "shake 1s ease forwards"
        }, 2200);
        
    }

    else if (computer_input == 1){
        cc++;
        setTimeout(() => {
            battle_area.innerHTML = "Rock vs. Paper"
            show_section.innerHTML = "Computer Win"
            user1.style.animation = "fade-out 1s ease forwards"
            computer_count.innerHTML = cc;
        }, 2200);
    }
    else{
        uc++
        setTimeout(() => {
            battle_area.innerHTML = "Rock vs. Scissors"
            show_section.innerHTML = "You Win"
            user1.style.animation = "bounce2 1s ease forwards"
            user_count.innerHTML = uc;
        }, 2200);
    }
    computer_input = getRandom(0, 3);
});

user2.addEventListener("click", () => {
    // console.log("clicked")
    // show_section.appendChild(user2);
    battle_area.innerHTML = ""
    show_section.innerHTML = "";
    animation(user2)
    // allAnimation(user1, user2, user3);

    if (computer_input == 0){
        uc++
        setTimeout(() => {
            battle_area.innerHTML = "Paper vs. Rock"
            show_section.innerHTML = "You Win"
            user2.style.animation = "bounce2 1s ease forwards"
            user_count.innerHTML = uc;
        }, 2200);
        
    }
    else if (computer_input == 1){
       
        setTimeout(() => {
            battle_area.innerHTML = "Paper vs. Paper"
            show_section.innerHTML = "Draw"
            user2.style.animation = "shake 1s ease forwards"
        }, 2200);
    }
    else{
        cc++
        setTimeout(() => {
            battle_area.innerHTML = "Paper vs. Scissors"
            show_section.innerHTML = "Computer Win"
            user2.style.animation = "fade-out 1s ease forwards"
            computer_count.innerHTML = cc;
        }, 2200);
        
    }
    computer_input = getRandom(0, 3);    
});

user3.addEventListener("click", () => {
    // console.log("clicked")
    // show_section.appendChild(user3);
    battle_area.innerHTML = ""
    show_section.innerHTML = ""
    animation(user3)
    // allAnimation(user1,user2, user3);

    if (computer_input == 0){
       cc++
        setTimeout(() => {
            battle_area.innerHTML = "Scissors vs. Rock"
            show_section.innerHTML = "Computer Win";
            user3.style.animation = "fade-out 1s ease forwards"
            computer_count.innerHTML = cc;
        }, 2200);
        
    }
    else if (computer_input == 1){
        uc++
        setTimeout(() => {
            battle_area.innerHTML = "Scissors vs. Paper"
            show_section.innerHTML = "You Win"
            user3.style.animation = "bounce2 1s ease forwards"
            user_count.innerHTML = uc;
        }, 2200);
        
    }
    else{
        
        setTimeout(() => {
            battle_area.innerHTML = "Scissors vs. Scissors"
            show_section.innerHTML = "Draw"
            user3.style.animation = "shake 1s ease forwards"
        }, 2200);
        
    }
    computer_input = getRandom(0, 3);
});

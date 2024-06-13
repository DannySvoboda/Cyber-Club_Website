function openNav() {
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  document.getElementById("mySidenav").style.width = "40%";
}

function closeNav() {
  document.body.style.backgroundColor = "mediumpurple";
  document.getElementById("mySidenav").style.width = "0";
}

function openNavNoCChange() {
  document.getElementById("mySidenav").style.width = "40%";
}

function closeNavNoCChange() {
  document.getElementById("mySidenav").style.width = "0";
}

/*SECRET CHECKER CODE*/

function checkCode() {
  const key = "124a"
  if (key == document.getElementById("Code").value.toLowerCase()){
    document.getElementById("gate").style.display = "block";
  }
}

/*WORD GAME CODE*/

const word_array = ["trunk", "grand", "blink", "black", "catch", "crust", "drama", "eagle", "fairy", "gifts", "great", "grand", "happy", "lemon", "mango", "names", "prank", "quest", "range", "spire", "trade", "waste", "yeast", "zebra"]

var current_word = ""

function select_word(){
  var select_word = word_array[Math.floor(Math.random() * word_array.length)]
  console.log(select_word)
  scramble(select_word)
  current_word = select_word
}

function scramble(base_word){
  var letter_list = []
  for (let i = 0; i < base_word.length; i++)
    letter_list.push(base_word.charAt(i))
  console.log("Original: " + letter_list)

  for (let i = 0; i <= 4; i++){
    randint = Math.floor(Math.random()*4)
    letter_list.push(letter_list[randint])
    letter_list.splice(randint, 1)
  }
  reassemble(letter_list,base_word)
}

function reassemble(l_list){
  var scrambled_word = ""
  scrambled_word = l_list.join()
  scrambled_word = scrambled_word.replace(/,/g, "");
  console.log("New: " + scrambled_word)
  document.getElementById("S_word").textContent = scrambled_word
}

function check_answer(scrambled_word){
  if (document.getElementById("Answer").value.toLowerCase() == current_word){
    console.log("You Passed!")
    document.getElementById("passfail").textContent = "You Passed!"
  }else{
    console.log("Try Again!")
    document.getElementById("passfail").textContent = "Try Again!"
  }
}
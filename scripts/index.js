"use strict"
//  console.log(test)



let teams = [
    {code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"},
    {code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
    {code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
    {code:"KAN", name:"Kansas City Chiefs", plays:"Kansas City, MO"},
];

window.onload = function(){


    initDropdown();
     //grab our button off the page 
    let theButton = document.querySelector("#theButton");
    
    //when tout button is clicked call displayFootballTeam
    theButton.addEventListener("click",displayFootballTeam);


}
// this funciton will display the details about our football team 
function displayFootballTeam(){
    // get the dropdown foirm the page 
    let theDropDown = document.querySelector("#footballSelect");

    let resultsParagraph = document.querySelector("#results");

    //get the index of the selected option in the dropdown 
    let selectedIndex = theDropDown.selectedIndex;

    let selectedTeam = teams[selectedIndex];

    resultsParagraph.innerHTML = ` You selected the ${selectedTeam.name} ${selectedTeam.code} who you play ${selectedTeam.plays}`

}
function initDropdown(){

    // get the dropdown from the HTML document and assign it to a variable 
    let theDropDown = document.querySelector("#footballSelect");
    //get the totatl number if team we gave for use use in the loop

    let numOfTeams = teams.length;

    //lets start looping over the teams 
    for(let i = 0;i<numOfTeams;i++){
        //lets create a new option 
        let newOption = document.createElement("option");

        // set the textContent for our new optioin, what suer sees

        newOption.textContent = teams[i].name

        //set the value for the option 
        newOption.value = teams[i].code

        // add thjis option to the dropdown 
        theDropDown.appendChild(newOption)

    }
}





    

﻿var sectionProfile = document.getElementsByClassName("profile")[0];
var sectionOrder = document.getElementsByClassName("order")[0];
var sectionFavorite = document.getElementsByClassName("favorite")[0];
var sectionAvaliation = document.getElementsByClassName("avaliation")[0];
var sectionInformation = document.getElementsByClassName("information")[0];

var optionSections = document.getElementsByClassName("titleSection");

function openSection(menuOption) {
    var optionSelected = menuOption.id;
    sectionProfile.style.display = "none";
    sectionOrder.style.display = "none";
    sectionFavorite.style.display = "none";
    sectionAvaliation.style.display = "none";
    sectionInformation.style.display = "none";

    switch (optionSelected) {
        case "profile":
            sectionProfile.style.display = "flex";
            break;
        case "order":
            sectionOrder.style.display = "flex";
            break;
        case "favorite":
            sectionFavorite.style.display = "flex";
            break;
        case "avaliation":
            sectionAvaliation.style.display = "flex";
            break;
        case "information":
            sectionInformation.style.display = "flex";
            break;
        default:
            console.error("Invalid option selected: " + optionSelected);
    }

    for (var i = 0; i < optionSections.length; i++) {
        optionSections[i].classList.remove('active');
    }

    menuOption.classList.add('active');
}
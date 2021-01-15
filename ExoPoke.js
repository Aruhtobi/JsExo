window.addEventListener('load', function(){
    if (localStorage.getItem("Pv")!=false){
        console.log(localStorage.getItem('Pv'))
        var pvActuel = localStorage.getItem('Pv')
        var pv1 = pvActuel
        document.getElementById("Hp1").style.width = pv1 + "%"
    }
})

var hymne = document.getElementById("atkV1")
var tank = document.getElementById("atkV2")
var manchette = document.getElementById("atkV3")
var cdp = document.getElementById("atkV4")
var ucsm = document.getElementById("atkJ1")
var rko = document.getElementById("atkJ2")
var fsb = document.getElementById("atkJ3")
var chaise = document.getElementById("atkJ4")
var Hp1 = document.getElementById("Hp1") //Vladimir hp
var Hp2 = document.getElementById("Hp2") //JohnCena hp

var Vladimir = {
    nom: "Poutine",
    niveau: 68,
    pvMax: 200,
    pvActuel: 200,
    Attaque: [
        {
        nom: "Hymne_Urss",
        puissance: 40,
        type: "normal",
        PP_Max: 05,
        PP_Min: 05,
        },
        {
          nom: "Tank",
            puissance: 60,
            type: "sol",
            PP_Max: 02,
            PP_Min: 02,
        },
        {
        nom: "Manchette",
            puissance: 50,
            type: "Combat",
            PP_Max: 20,
            PP_Min: 20,
        },
        {
            nom: "Coup_de_pied",
            puissance: 20,
            type: "Combat",
            PP_Max: 20,
            PP_Min: 20,
        }
    ],
    Status: "none",
    Nom_du_dresseur_qui_la_attraper: "Dieu",
    Est_il_KO : false,
    Type: "Président",
}
var Jcena = {
    nom: "John_Cena",
    niveau: 43,
    pvMax: 200,
    pvActuel: 200,
    Attaque: [
        {
        nom: "U_cant_see_me",
        puissance: 60,
        type: "normal",
        PP_Max: 05,
        PP_Min: 05,
        },
        {
          nom: "RKO",
            puissance: 80,
            type: "Combat",
            PP_Max: 02,
            PP_Min: 02,
        },
        {
        nom: "Flying_Shoulder_Block",
            puissance: 50,
            type: "Combat",
            PP_Max: 10,
            PP_Min: 10,
        },
        {
            nom: "Chaise",
            puissance: 30,
            type: "Combat",
            PP_Max: 20,
            PP_Min: 20,
        }
    ],
    Status: "none",
    Nom_du_dresseur_qui_la_attraper: "WWE",
    Est_il_KO : false,
    Type: "Catcheur",
}

function ilattaque(i,character,healthbar,character2){
    character.pvActuel = character.pvActuel - character2.Attaque[i].puissance
    if (character.pvActuel == 0)
        healthbar.style.display = "none"
    var pv1 = character.pvActuel / character.pvMax * 100
    console.log(pv1)
    healthbar.style.width = pv1 + "%" 
}
ucsm.addEventListener('click', function(){
    console.log('click')
    ilattaque(0,Vladimir,Hp1,Jcena)
    console.log('click')
})
rko.addEventListener('click', function(){
    ilattaque(1,Vladimir,Hp1,Jcena)
})
fsb.addEventListener('click', function(){
    ilattaque(2,Vladimir,Hp1,Jcena)
})
chaise.addEventListener('click', function(){
    ilattaque(3,Vladimir,Hp1,Jcena)
})
hymne.addEventListener('click', function(){
    console.log('click')
    ilattaque(0,Jcena,Hp2,Vladimir)
    console.log('click')
})
tank.addEventListener('click', function(){
    ilattaque(1,Jcena,Hp2,Vladimir)
})
manchette.addEventListener('click', function(){
    ilattaque(2,Jcena,Hp2,Vladimir)
})
cdp.addEventListener('click', function(){
    ilattaque(3,Jcena,Hp2,Vladimir)
})
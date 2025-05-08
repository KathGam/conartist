'use strict';

// Skjuler sectioner
function hideAllScenes () {
    document.querySelectorAll('.scenario').forEach(section => { // henter alle elementer med klassen "scenario" fra HTML.
      section.style.display = 'none'; // skjuler alle sectioner 
    });
  } 
  

  
// Definerer hvilken scene der er current og at denne skal vises, samt skjule de andre.   
function showScene (sceneId) { 
    hideAllScenes (); // Kalder på tidligere funktion der gemmer alle sectioner fra start.
    const scene = document.querySelector(sceneId); // Henter section med Id scene + det bestemte tal, der hører med til Id'et.
    if (scene) {
      scene.style.display = 'block'; // Viser den scene man er nået til. 
      localStorage.setItem('currentScene', sceneId) // Loger den nuværende scene i localstorage 
    }
  } // Denne funktion definerer hvilken section "scene", bruger er noget til.



// Bestemmer hvilke oplysninger der skal gemmes når bruger tager et valg på siden
function logChoice (label) {
    const timestamp = new Date().toLocaleTimeString(); // Er med til at tilføje dato og tid for valg i localstorage. 
    let choices = localStorage.getItem('userChoices') || '';
    choices += (choices ? ',' : '') + `${label} (${timestamp})`; 
    localStorage.setItem('userChoices', choices); 
  } // Denne functioner definerer hvad der skal gemmes, når bruger tager et valg på websitet, i localstorage 



document.addEventListener('DOMContentLoaded', () => {
    let lastScene = localStorage.getItem('currentScene') || '#scene1'; 
    if (lastScene === '#facts') {
      lastScene = '#scene1';
    } // Bestemmer at hvis sidste scene bruger har været på når websitet bliver lukket er "facts"-sectionen, så skal websitet åbne på scene1 
  
    showScene(lastScene);
    

    document.querySelectorAll('.knap').forEach(knap => { // Henter alle elementer med klassen "knap" fra HTML.
      knap.addEventListener('click',() => { // Tilføjer funktion til hver knap, så knappen reagere på clicks.  
        const knapId = knap.id;

        switch (knapId) {

          case 'knap1':
            showScene ('#scene2');
            logChoice('Valgt: Scene 2');
            break; // Bestemmer at knap1 skal gå til scene2, samt at dette bliver logget i localstorage. 

          case 'knap2':
            showScene ('#scene3-1');
            logChoice('Valgt: Scene 3-1');
            break; // Bestemmer at knap2 skal gå til scene3-1, samt at dette bliver logget i localstorage. 
          
          case 'knap3':
            showScene ('#scene3-2');
            logChoice('Valgt: Scene 3-2');
            break; // Bestemmer at knap3 skal gå til scene3-2, samt at dette bliver logget i localstorage. 

          case 'knap4':
            showScene ('#scene3-3');
            logChoice('Valgt: Scene 3-3');
            break; // Bestemmer at knap3 skal gå til scene3-3, samt at dette bliver logget i localstorage. 

          case 'knap5':
          case 'knap6':
          case 'knap7':
            showScene ('#facts');
            logChoice('Valgt: facts');
            break; // Bestemmer at knap5-6-7 skal gå til facts-sectionen, samt at dette bliver logget i localstorage. 

          case 'knap8':
            showScene ('#scene1');
            logChoice('Valgt: scene1');
            break; // Bestemmer at knap8 skal gå til scene1, samt at dette bliver logget i localstorage. Her starter scenariet forfra :). 

          case 'knap9':
            showScene ('#scene5');
            logChoice('Valgt: scene5');
            break; // Bestemmer at knap 9 skal gå til scene5.

          case 'knap10':
            showScene ('#scene1');
            logChoice('Valgt: scene1');
            break; // Bestemmer at knap10 skal gå til scene1, samt at dette bliver logget i localstorage. Her starter scenariet forfra :). 
        }
      });
    });
  });


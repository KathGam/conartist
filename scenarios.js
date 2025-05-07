'use strict';

function hideAllScenes() {
    document.querySelectorAll('.scenario').forEach(section => {
      section.style.display = 'none';
    });
  }
  
function showScene(sceneId) {
    hideAllScenes();
    const scene = document.querySelector(sceneId);
    if (scene) {
      scene.style.display = 'block';
      localStorage.setItem('currentScene', sceneId)
    }

  }
  
document.addEventListener('DOMContentLoaded', () => {
    let lastScene = localStorage.getItem('currentScene') || '#scene1'; 
  
    
    if (lastScene === '#facts') {
      lastScene = '#scene1';
    }
  
    showScene(lastScene);
  

    document.querySelectorAll('.knap').forEach(knap => {
      knap.addEventListener('click',() => {
        const knap = knap.id;

        switch (knap) {

          case 'knap1':
            showScene ('#scene2');
            break;

          case 'knap2':
            showScene ('#scene3-1');
            break;
          
          case 'knap3':
            showScene ('#scene3-2');
            break;

          case 'knap4':
            showScene ('#scene3-3');
            break;

          case 'knap5':
            showScene
        }


      }
      )
    })
    



    document.querySelector('#knap1').addEventListener('click', () => showScene('#scene2'));
    document.querySelector('#knap2').addEventListener('click', () => showScene('#scene3-1'));
    document.querySelector('#knap3').addEventListener('click', () => showScene('#scene3-2'));
    document.querySelector('#knap4').addEventListener('click', () => showScene('#scene3-3'));
    document.querySelector('#knap5').addEventListener('click', () => showScene('#facts'));
    document.querySelector('#knap6').addEventListener('click', () => showScene('#facts'));
    document.querySelector('#knap7').addEventListener('click', () => showScene('#facts'));
  });


'use strict';

function hideAllScenes () {
    document.querySelectorAll('.scenario').forEach(section => {
      section.style.display = 'none';
    });
  }
  
function showScene (sceneId) {
    hideAllScenes ();
    const scene = document.querySelector(sceneId);
    if (scene) {
      scene.style.display = 'block';
      localStorage.setItem('currentScene', sceneId)
    }
  }

  function logChoice (label) {
    const timestamp = new Date().toLocaleTimeString();
    let choices = localStorage.getItem('userChoices') || '';
    choices += (choices ? ',' : '') + `${label} (${timestamp})`;
    localStorage.setItem('userChoices', choices);
  }

document.addEventListener('DOMContentLoaded', () => {
    let lastScene = localStorage.getItem('currentScene') || '#scene1'; 
    if (lastScene === '#facts') {
      lastScene = '#scene1';
    }
  
    showScene(lastScene);

    document.querySelectorAll('.knap').forEach(knap => {
      knap.addEventListener('click',() => {
        const knapId = knap.id;

        switch (knapId) {

          case 'knap1':
            showScene ('#scene2');
            logChoice('Valgt: Scene 2');
            break;

          case 'knap2':
            showScene ('#scene3-1');
            logChoice('Valgt: Scene 3-1');
            break;
          
          case 'knap3':
            showScene ('#scene3-2');
            logChoice('Valgt: Scene 3-2');
            break;

          case 'knap4':
            showScene ('#scene3-3');
            logChoice('Valgt: Scene 3-3');
            break;

          case 'knap5':
          case 'knap6':
          case 'knap7':
            showScene ('#facts');
            logChoice('Valgt: facts');
            break;

          case 'knap8':
            showScene ('#scene1');
            logChoice('Valgt: scene1');
            break;
        }
      });
    });
  });


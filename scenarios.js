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
        const knapId = knap.id;

        switch (knapId) {

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
            showScene ('#facts');
            break;

          case 'knap6':
            showScene ('#facts');
            break;

          case 'knap7':
            showScene ('#facts');
            break;
        }
      }
      )
    })
  });


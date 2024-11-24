var click_count;


click_count = 0;


document.getElementById('appreciation-button').addEventListener('click', (event) => {
  click_count = (typeof click_count === 'number' ? click_count : 0) + 1;
  event.target.innerText = `${click_count} of you showed their love 😍`;

});
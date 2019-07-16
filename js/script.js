
const cardTitles = Array.from(document.querySelectorAll('.card-title span'));
cardTitles.forEach((title, i) => {
  if (title.innerText.length > 14) {
    let newTitle = `${title.innerText.slice(0, 12)}...`;
    cardTitles[i].innerText = newTitle;
  }
});


/*
z-index: 1003;, display block
opacity 1
top 10%, transform scalex1 scaley1

 const modal = document.getElementById('modal1');
    modal.style.display = 'block';
    modal.style.opacity = 1;
    modal.style.top = '10%';
    modal.style.zIndex = '1003';

*/
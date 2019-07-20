
const paginationUL = document.querySelector('ul.pagination');
const cardContainer = document.querySelector('main div.container');
let displayQty = 8;
const displayQtyForm = document.getElementById('displayQty');
let currentList = products;
console.log(currentList);

function showPage(list, page, displayQty) {
  let start;
  let end;
  if (page === 0) {
    start = 0;
    end = list.length - 1;
  } else {
    start = ((page * displayQty) - 1) - (displayQty - 1);
    end = (page * displayQty) - 1;
    if (end >= list.length) {
      end = list.length - 1;
    }
  }

  console.log(start, end);

  let html = ``;
  let row = `<div class="row">`;
  for (let i = start; i <= end; i++) {
    row += productHtml(list[i], i);

    // console.log(i === 0, (i + 1) % 4 === 0, (i + 1) === list.length)

    if ((i + 1) === list.length) {
      row += `</div>`;
      html += row;
    } else if (i === 0) {
      // do nothing
    } else if ((i + 1) % 4 === 0) {
      row += `</div>`;
      html += row;
      row = `<div class="row">`;
    }
  }
  // console.log(html)
  cardContainer.innerHTML = html;
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, {
    'onOpenEnd': initCarouselModal
  });

  function initCarouselModal() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems);
    instances[0].set(2);
  }
}



/*
  Removes previous page links, if list.length is less than the displayQty,
  it will not show any links.  Otherwise, it will show links based on the list length
*/
function pageLinks(list, displayQty) {
  paginationUL.innerHTML = '';
  if (list.length <= displayQty) {
    //showPage(list, 0);
  } else {
    let pages = Math.ceil(list.length / displayQty);
    let left = `<li><a href="#!"><i class="material-icons">chevron_left</i></a></li>`;
    paginationUL.innerHTML = left;
    for (let i = 1; i <= pages; i++) {
      let li = document.createElement('li');
      if (i === 1) {
        li.classList.add('active');
      }
      let a = document.createElement('a');
      a.innerText = i;
      li.append(a);
      paginationUL.append(li);
    }
    let right = `<li><a href="#!"><i class="material-icons">chevron_right</i></a></li>`;
    paginationUL.innerHTML += right;
  }
  showPage(list, 1, displayQty);
}

pageLinks(currentList, displayQty);


paginationUL.addEventListener('click', e => {
  console.log(e.target.firstChild.tagName !== "I")
  if (e.target.tagName === 'A' && e.target.firstChild.tagName !== "I") {
    clearActive();
    e.target.parentNode.classList.add('active');
    showPage(currentList, e.target.innerText, displayQty)
  } else if (e.target.tagName === "I") {
    let active = document.querySelector('li.active').innerText;
    let pageLinks = document.getElementsByClassName('pagination')[0].childNodes;
    if (e.target.innerText === 'chevron_left') {
      if (active !== "1") {
        clearActive();
        let newPage = (parseInt(active) - 1).toString();
        for (let i = 0; i < pageLinks.length; i++) {
          if (pageLinks[i].childNodes[0].innerText === newPage) {
            pageLinks[i].classList.add('active');
            showPage(currentList, newPage, displayQty)
          }
        }
      }
    } else if (e.target.innerText === 'chevron_right') {
      if (active < pageLinks[pageLinks.length - 2].childNodes[0].innerText) {
        clearActive();
        let newPage = (parseInt(active) + 1).toString()
        for (let i = 0; i < pageLinks.length; i++) {
          if (pageLinks[i].childNodes[0].innerText === newPage) {
            pageLinks[i].classList.add('active');
            showPage(currentList, newPage, displayQty)
          }
        }

      }
    }
  }

})

function clearActive() {
  let links = document.querySelectorAll('.pagination li');
  links.forEach(link => {
    link.classList.remove('active');
  });
}




/*
  Creates the HTML to display a product as a card, with the "reveal" information, and the image carousel in the modal
  Takes in a product object
*/
function productHtml(product, index) {
  // console.log(product);
  let html = `
  <div class="col s12 m6 l3">
  <div class="card hoverable">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="${product.images[0]}">
    </div>
    <div class="card-content">
      <span class="activator grey-text text-darken-"><span><a class="modal-trigger" href="#modal${index}">More
            Images</a><i class="material-icons right">info_outline</i></span>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>

      <ul class="collection">
        <li class="collection-item"><span>Type: </span><span>${product.type}</span></li>
        <li class="collection-item"><span>Material: </span><span>${product.material}</span></li>
        <li class="collection-item"><span>Kit Type: </span><span>${product.kitType}</span></li>
        <li class="collection-item"><span>Kit Metal Color: </span><span>${product.kitColor}</span></li>
      </ul>
    </div>
  </div>
</div>

<div id="modal${index}" class="modal">
            <div class="carousel">
              <a class="carousel-item" href="#one!"><img src="${product.images[0]}"></a>
              <a class="carousel-item" href="#two!"><img src="${product.images[1]}"></a>
              <a class="carousel-item" href="#three!"><img src="${product.images[2]}"></a>
            </div>
          </div>
  `;
  return html;
}

function appendDisplayQty() {
  let html = `
  <form>
      <div class="row display">
        <div class="container">
          <div class="input-field col s2 offset-s5">
            <select class="center">
              <option value="4">4</option>
              <option value="8" class="center-align" selected>8</option>
              <option value="12">12</option>
              <option value="20">20</option>
            </select>
            <label class="teal-text display">Display Quantity:</label>
          </div>
        </div>
      </div>
    </form>
  `;
  displayQtyForm.innerHTML = html;
}

appendDisplayQty()

displayQtyForm.addEventListener('change', e => {
  console.log(e.target.value);
  displayQty = e.target.value;
  pageLinks(currentList, displayQty)
})

const productDiv = document.getElementById('products');
const paginationUL = document.querySelector('ul.pagination');
const cardContainer = document.querySelector('main div.container');
let displayQty = 8;
const displayQtyForm = document.getElementById('displayQty');
let currentList = products;
const filterDiv = document.getElementById('filterDiv');
console.log(currentList);
const numList = ["one", "two", "three", "four", "five", "six", "seven", "eight"]

function showPage(list, page, displayQty) {
  let newList = dateOrder(list);
  let start;
  let end;
  if (page === 0) {
    start = 0;
    end = newList.length - 1;
  } else {
    start = ((page * displayQty) - 1) - (displayQty - 1);
    end = (page * displayQty) - 1;
    if (end >= newList.length) {
      end = newList.length - 1;
    }
  }

  console.log(start, end);



  let html = ``;
  let row = `<div class="row">`;
  for (let i = start; i <= end; i++) {
    row += productHtml(newList[i], i);

    // console.log(i === 0, (i + 1) % 4 === 0, (i + 1) === list.length)

    if ((i + 1) === newList.length) {
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
  productDiv.innerHTML = html;
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, {
    'onOpenEnd': initCarouselModal
  });

  function initCarouselModal() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems);
    instances[0].set(2);
  }

  const images = Array.from(document.getElementsByTagName('img'));
  let imageFlag = 0;
  images.forEach(img => {
    img.addEventListener('load', () => {
      imageFlag++;
      if (imageFlag === (displayQty * 4)) {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
    });
  });
  var elems = document.querySelectorAll('.tooltipped');
  var instances = M.Tooltip.init(elems);


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
      <img class="activator card-image" src="${product.images[0]}">`
  /*
  if (product.available) {
    html += `
      <a class="btn-floating halfway-fab waves-effect waves-light teal darken-2 tooltipped" data-position="right" data-tooltip="Still Available"><i class="material-icons white-text available">monetization_on</i></a>`
  } else {
    html += `
        <a class="sold btn-floating halfway-fab waves-effect waves-light teal darken-2 tooltipped" data-position="right" data-tooltip="Sold"><i class="material-icons grey-text sold">money_off</i></a>
        `
  }
  */
  html += `
    </div >
    <div class="card-content">
      <span class="activator grey-text text-darken-"><span><a class="modal-trigger teal-text text-darken-2" href="#modal${index}"><strong>More
            Images</strong></a><i class="material-icons right">info_outline</i></span>
    </div>
      <div class="card-reveal">
        <div><span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span></div>
        <div id='coll'>
        <ul class="collection">

          <li class="collection-item"><span>Type: </span><span>${product.type}`
  if (product.pen_type) {
    html += `<span> - </span><span><em>${product.pen_type}</em></span>`
  }


  html += `
  </span></li><li class="collection-item"><span>Material: </span><span>${product.material}`;

  if (product.material_info) {
    html += `<span> - </span><span>${product.material_info}</span></li>`;
  }
  html += `
          <li class="collection-item"><span>Kit Type: </span><span>${product.kitType}</<span> - </span><span>${product.kitColor}</span></li>
          /*<li class="collection-item"><span>Price: </span><span><strong>${product.price}</strong></span></li>*/
          <li class="collection-item"><span>ID: </span><span>${product.id}</span></li>
         /* <li class="collection-item"><span>Available: </span><span>`*/
  if (product.available) {
    html += `Yes`;
  } else {
    html += `No`;
  }
  html += `
          </span></li>
        </ul>
        </div>
      </div>
    </div>
</div >

    <div id="modal${index}" class="modal">
      <div class="carousel">
      `
  for (let i = 0; i < product.images.length; i++) {
    let num = numList[i];
    html += `<a class="carousel-item" href="#${num}!"><img src="${product.images[i]}"></a>`;
  }


  // <a class="carousel-item" href="#one!"><img src="${product.images[0]}"></a>
  //   <a class="carousel-item" href="#two!"><img src="${product.images[1]}"></a>
  //     <a class="carousel-item" href="#three!"><img src="${product.images[2]}"></a>
  html += `
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
                <div class="input-field col s8 offset-s2">
                  <select class="">
                    <option value="4">4</option>
                    <option value="8" class="center-align" selected>8</option>
                    <option value="12">12</option>
                    <option value="20">20</option>
                  </select>
                  <label class="teal-text display center-align">Display Quantity:</label>
                </div>
              </div>
            </div>
          </form>
          `;
  displayQtyForm.innerHTML = html;
}

appendDisplayQty()

displayQtyForm.addEventListener('change', e => {
  console.log(e.target);
  displayQty = e.target.value;
  pageLinks(currentList, displayQty)
})




// returns product array in order by date descending
function dateOrder(array) {
  array.sort(function (a, b) {
    if (new Date(a.created) < new Date(b.created)) {
      return 1;
    }
    if (new Date(a.created) > new Date(b.created)) {
      return -1;
    }

    return 0;
  })
  return array
}


const typeSelect = document.getElementById('type');
const materialSelect = document.getElementById('material');
const kitTypeSelect = document.getElementById('kitType');
const kitColorSelect = document.getElementById('kitColor');

// Create Dropdowns for Filters
// @param filterString -- string of dropdown option, ex. type, material
// @param div -- the container div to set html to. 
function createDropdowns(filterString, div) {
  const options = [];
  products.forEach(prod => options.push(prod[filterString]));
  const reducedOptions = [... new Set(options)];

  // optionName is the lists display name for the default disabled option
  let optionName = "";
  if (filterString === 'kitType') {
    optionName = "Kit Type:";
  } else if (filterString === 'kitColor') {
    optionName = "Kit Color:";
  } else {
    optionName = filterString[0].toUpperCase() + filterString.slice(1) + ":";
  }

  //creates the html to append to the filter
  let html = "";
  html += `
    <option value="" disabled>${optionName}</option>
  `;
  reducedOptions.forEach(option => {
    html += `
      <option value="${option}" class="${filterString}">${option}</option>
    `;
  });

  div.innerHTML = html;
  console.log(html);

}
createDropdowns('type', typeSelect);
createDropdowns('material', materialSelect);
createDropdowns('kitType', kitTypeSelect);
createDropdowns('kitColor', kitColorSelect);



/**** FILTERS ****/

let filterFlag = false;
const selectFilters = document.getElementById('filters');
const filter = document.getElementById('filter'); // opens and closes filter box
const clear = document.getElementById('clear'); // clears filters
const apply = document.getElementById('apply'); // applies filters
const clearAndApply = document.getElementById('filterbuttons');
selectFilters.style.display = "none";
clearAndApply.style.display = "none";
selectFilters.style.backgroundColor = '#ffffff90';
selectFilters.style.border = "5px black solid";
selectFilters.style.borderRadius = "10px";



// changes the text of the filter on/off button from FILTER to X
// Opens and close the Filter Selects.
filter.addEventListener('click', e => {
  filterFlag = filterFlag ? false : true;
  if (!filterFlag) {
    filter.innerText = "FILTER";
    selectFilters.style.display = "none";
    clearAndApply.style.display = "none";
  } else {
    filter.innerText = "X"
    selectFilters.style.display = "block";
    clearAndApply.style.display = "block";
  }
});
window.onload = function () {
  const eachFilter = document.getElementsByClassName('input-field');

  const available = eachFilter[0].querySelectorAll('[type="checkbox"]');
  const type = eachFilter[1].querySelectorAll('[type="checkbox"]');
  const material = eachFilter[2].querySelectorAll('[type="checkbox"]');
  const kitType = eachFilter[3].querySelectorAll('[type="checkbox"]');
  const kitColor = eachFilter[4].querySelectorAll('[type="checkbox"]');
  const checkboxes = document.querySelectorAll('[type="checkbox"]')



  apply.addEventListener('click', () => {
    let searchTerm = {
      available: [],
      type: [],
      material: [],
      kitType: [],
      kitColor: [],
    };
    available.forEach((item, i) => {
      if (i === 1) {
        if (item.checked) {
          searchTerm.available.push(true);
        }
      } else if (i === 2) {
        if (item.checked) {
          searchTerm.available.push(false);
        }
      }
    });
    type.forEach((item, i) => {
      if (i > 0) {
        if (item.checked) {
          searchTerm.type.push(item.parentNode.innerText);
        }
      }
    });
    material.forEach((item, i) => {
      if (i > 0) {
        if (item.checked) {
          searchTerm.material.push(item.parentNode.innerText);
        }
      }
    });
    kitType.forEach((item, i) => {
      if (i > 0) {
        if (item.checked) {
          searchTerm.kitType.push(item.parentNode.innerText);
        }
      }
    });
    kitColor.forEach((item, i) => {
      if (i > 0) {
        if (item.checked) {
          searchTerm.kitColor.push(item.parentNode.innerText);
        }
      }
    });
    // console.log("search:");
    // console.log(searchTerm.available);
    search(products, searchTerm)

  });

  // Uses the object searchTerm gotten form the apply click listener
  // performs search through products array and sets currentList to it.
  // Then calls pageList()

  function search(productList, searchTerm) {
    // console.log(productList);
    let newList = [];
    productList.forEach(product => {
      let flag = [];
      if (searchTerm.available.length > 0) {
        let availableFlag = false;
        let i = 0
        searchTerm.available.forEach(term => {
          if (!availableFlag) {
            if (product.available === term) {
              availableFlag = true;
            }
          }
        });
        flag.push(availableFlag)
      }

      if (searchTerm.type.length > 0) {
        let typeFlag = false;
        searchTerm.type.forEach(term => {
          if (!typeFlag) {
            // console.log(product.type == term.toLowerCase());
            if (product.type.toLowerCase() == term.toLowerCase()) {
              typeFlag = true;
            }
          }
        });
        flag.push(typeFlag);
      }

      if (searchTerm.material.length > 0) {
        let materialFlag = false;
        searchTerm.material.forEach(term => {
          if (!materialFlag) {
            if (product.material.toLowerCase() == term.toLowerCase()) {
              materialFlag = true;
            }
          }
        });
        flag.push(materialFlag);
      }

      if (searchTerm.kitType.length > 0) {
        let kitTypeFlag = false;
        searchTerm.kitType.forEach(term => {
          if (!kitTypeFlag) {
            if (product.kitType.toLowerCase() == term.toLowerCase()) {
              kitTypeFlag = true;
            }
          }
        });
        flag.push(kitTypeFlag);
      }

      if (searchTerm.kitColor.length > 0) {
        let kitColorFlag = false;
        searchTerm.kitColor.forEach(term => {
          if (!kitColorFlag) {
            if (product.kitColor.toLowerCase() == term.toLowerCase()) {
              kitColorFlag = true;
            }
          }
        });
        flag.push(kitColorFlag);
      }
      // console.log(flag.includes(false));
      if (!flag.includes(false)) {
        newList.push(product);
      }
    });
    currentList = newList;
    pageLinks(currentList, displayQty);
  }

  console.log("test:", checkboxes[2].checked)
  clear.addEventListener('click', e => {
    // location.reload();
    // console.log(checkboxes[1].checked)
    checkboxes.forEach(box => {
      console.log(box.checked)
      if (box.checked) {
        box.click()
        box.checked = false;
      }
    })
    console.log(checkboxes);
    currentList = products;
    pageLinks(currentList, displayQty);
  })










  //takes in an array
  // function createConditional(terms, type) {
  //   let newTerm = "";
  //   if (terms.length > 0) {
  //     terms.forEach((term, i) => {
  //       if (i === 0) {
  //         newTerm = `product.${type} == "${term}" `
  //       } else {
  //         newTerm += `|| product.${type} == "${term}" `
  //       }
  //     });
  //   }
  //   // console.log(newTerm);
  //   return newTerm;
  // }





















} //closes window.onload


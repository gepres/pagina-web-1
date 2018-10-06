const web = matchMedia('(min-width: 752px)');
const changeSize2 = mq => {
  if(mq.matches === true){
    const masonryLayout = (containerElem, itemsElems, columns) => {
      containerElem.classList.add('masonry-layout', `columns-${columns}`)
      let columnsElements = []

      for (let i = 1; i <= columns; i++) {
        let column = document.createElement('div')
        column.classList.add('masonry-column', `column-${i}`)
        containerElem.appendChild(column)
        columnsElements.push(column)
      }

      for (let m = 0; m < Math.ceil(itemsElems.length / columns); m++) {
        for (let n = 0; n < columns; n++) {
          let item = itemsElems[m * columns + n]
          columnsElements[n].appendChild(item)
          item.classList.add('masonry-item')
        }
      }
    }
    masonryLayout(document.getElementById('gallery'), document.querySelectorAll('.gallery-item'), 3);
  }
  }
web.addListener(changeSize2);
changeSize2(web);

const table = matchMedia('(max-width: 750px)');
const changeSize = mq => {
  if (mq.matches === true) {
    const masonryLayout = (containerElem, itemsElems, columns) => {
      containerElem.classList.add('masonry-layout', `columns-${columns}`)
      let columnsElements = []

      for (let i = 1; i <= columns; i++) {
        let column = document.createElement('div')
        column.classList.add('masonry-column', `column-${i}`)
        containerElem.appendChild(column)
        columnsElements.push(column)
      }

      for (let m = 0; m < Math.ceil(itemsElems.length / columns); m++) {
        for (let n = 0; n < columns; n++) {
          let item = itemsElems[m * columns + n]
          columnsElements[n].appendChild(item)
          item.classList.add('masonry-item')
        }
      }
    }
    masonryLayout(document.getElementById('gallery'), document.querySelectorAll('.gallery-item'), 2);
   }
 }
 table.addListener(changeSize);
 changeSize(table);


// carousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
})
// console.log('hello  init page')

// document.querySelector('body').style.background = 'red'
// window.onload = (e)=> {
//   // console.log('init')
//   let header = document.querySelector('.uk-container.x-container')
//   // console.log(header, 'header')
//   header.parentElement.removeChild(header)
//   let ads = document.querySelector('#x-sidebar-left-bottom')
//   ads.parentElement.removeChild(ads)
// }

function removeElement(selector) {
  if (typeof selector !== 'string') {
    alert('选择器应该是字符串')
  }
  let el = document.querySelectorAll(selector)
  if (!el) {
    return
  }
  el.forEach(item => {
    item.parentElement.removeChild(item)
  })
  // console.log(el.parentElement, 'parent')
  // return true
}

function removeNode(node) {
  if(!node) {
    return
  }
  node.parentElement.removeChild(node)
}

/**
 * 
 * @param {当前的选择器} selector 选择器
 * @param {number} length 所选择的元素的后几个
 */
function getAndRemoveNextSiblings(selector, length) {
  let mainEl = document.querySelector(selector)
  let el = mainEl
  let result = []
  while(length--) {
    el = el['nextElementSibling']
    result.push(el)
  }
  console.log(result)
  result.forEach(item => {
    removeNode(item)
  })
  // return result
} 

// function removeSibling(el, length) {
//       let siblingArrays = getNextSibling(el, length)
//     removeElement(nextSibling)
//   // }
// }


function removeAds() {
  removeElement('#header')
  removeElement('#x-sidebar-left-bottom')
  removeElement('#sponsor-a')
  removeElement('.x-placeholder-50')
  removeElement('.x-placeholder')
  removeElement('#x-content-comment')
  removeElement('#footer')
  removeElement('.x-goto-top')
  getAndRemoveNextSiblings('.x-wiki-content.x-main-content', 4)
}

if (document.readyState === 'loading') {  // Loading hasn't finished yet
  document.addEventListener('DOMContentLoaded', removeAds);
} else {  // `DOMContentLoaded` has already fired
  if(window.location.hostname !== "www.zhihu.com") {
    removeAds();
  }
}

// window.addEventListener('DOMContentLoaded', (e)=> {
//   console.log('DOMContentLoaded')
//   removeElement('#header')
//   removeElement('#x-sidebar-left-bottom')
//   removeElement('#sponsor-a')
//   removeElement('.x-placeholder-50')
//   removeElement('.x-placeholder')
//   // // console.log(header, 'header')
//   // header.parentElement.removeChild(header)
//   // let ads = document.querySelector('#x-sidebar-left-bottom')
//   // ads.parentElement.removeChild(ads)
//   // let sponsor = document.querySelector('#sponsor-a')
//   // sponsor.parentElement.removeChild(sponsor)
// })
function getFirstSelector(selector) {
  // accepts a selector and returns the first element that matches.
  const selection = document.querySelector(selector);
  return selection;
}

function nestedTarget() {
  // pulls a .target out of #nested.
  const selection = document.getElementById('nested');
  const targetSelection = selection.querySelector('.target');
  return targetSelection;
}
function increaseRankBy(n) {
  // increases the ranks in all of the .ranked-lists by n
  const list = document.querySelectorAll('.ranked-list ul li');

  for (let i=0; i < list.length; i++) {
    list.innerHTML += n;
  }
  return null;
  /*

  let current = list;
  let next = [];

  <ul class="ranked-list">
    <li>1</li>
    <li>2</li>
  </ul>

  <ul class="ranked-list">
    <li>12</li>
    <li>11</li>
    <li>10</li>
  </ul>

  while (current) {
    if (parseInt(current.innerHTML) >= 0) {
      current.innerHTML++;
    }
    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i]);
      }
    }
    current = next.shift();
  }

  return lists;
  */

}
function deepestChild() {
  // pulls out the most deeply nested child from div#grand-node
  const grandNode = document.querySelector('#grand-node');
  const deepest = grandNode.querySelector('div div div div div');
  return deepest;
}

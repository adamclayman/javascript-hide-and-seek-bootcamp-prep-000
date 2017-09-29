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
function increaseRankBy() {
  // increases the ranks in all of the .ranked-lists by n
  const lists = document.querySelectorAll('.ranked-list');

  let current = lists;
  let next = [];

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

}
function deepestChild() {
  // pulls out the most deeply nested child from div#grand-node
  const grandNode = document.querySelector('#grand-node');
  const deepest = grandNode.querySelector('div div div div div');
  return deepest;
}

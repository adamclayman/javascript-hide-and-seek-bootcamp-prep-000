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
  lists = document.querySelectorAll('.ranked-list');
  
}
function deepestChild() {
  // pulls out the most deeply nested child from div#grand-node
  const grandNode = document.querySelector('#grand-node');
  const deepest = grandNode.querySelector('div div div div div');
  return deepest;
}

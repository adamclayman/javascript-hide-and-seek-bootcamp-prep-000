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
  const lists = document.querySelectorAll('.ranked-list');
  const firstList = lists[0];
  const secondList = lists[1];
  let firstListChildren = firstList.children;
  let secondListChildren = secondList.children;

  for (i = 0; i < firstListChildren.length; i++) {
    firstListChildren[i] = parseInt(firstListChildren[i]) + n;
  }
  for (i = 0; i < secondListChildren.length; i++) {
    secondListChildren[i] = parseInt(secondListChildren[i]) + n;

  }
  /*
        const rankedLists = document.querySelectorAll('.ranked-list')
        const firstList = rankedLists[0]
        const secondList = rankedLists[1]

        let children = firstList.children
        let start = 1
        for (let i = 0, l = children.length; i < l; i++) {
          expect(parseInt(children[i].innerHTML)).toEqual(start + i + 3)
        }

        children = secondList.children
        start = 12

        for (let i = 0, l = children.length; i < l; i++) {
          expect(parseInt(children[i].innerHTML)).toEqual(start - i + 3)
        }
*/
  for (let i=0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + n;
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

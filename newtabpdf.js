var anchorList = document.getElementsByTagName('a');

for (var i = 0; i < anchorList.length; i++) {
  var anchor = anchorList[i];
  var href = anchor.href;
  if (isPDF(href)) {
    if (!anchor.hasAttribute('target')) {
      anchor.setAttribute('target', '_blank');
    }
  }
}

function isPDF(href) {
  return href.match(/^.*\.pdf/i);
}

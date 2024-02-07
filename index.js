function search() {
  document.getElementById("search-results").innerHTML = "";

  var searchTerm = document.getElementById("search-input").value.toLowerCase();

  var paragraphs = document.querySelectorAll("p, h1");

  var results = [];
  paragraphs.forEach(function (paragraph) {
    var paragraphText = paragraph.textContent.toLowerCase();
    var foundIndex = paragraphText.indexOf(searchTerm);
    if (foundIndex !== -1) {
      var highlightedText = paragraphText.substring(
        foundIndex,
        foundIndex + searchTerm.length
      );
      var startIndex = paragraphText.indexOf(highlightedText);
      var endIndex = startIndex + highlightedText.length;
      var highlightedParagraph =
        paragraph.innerHTML.substring(0, startIndex) +
        '<span class="highlight">' +
        highlightedText +
        "</span>" +
        paragraph.innerHTML.substring(endIndex);
      paragraph.innerHTML = highlightedParagraph;
      results.push(paragraph);
    }
  });

  var resultsContainer = document.getElementById("search-results");
  if (results.length === 0) {
    resultsContainer.innerHTML = "No results found.";
  } else {
    results.forEach(function (result) {
      resultsContainer.appendChild(result);
    });
  }
}

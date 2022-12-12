let searchResults = [];

function searchGitHub() {
  const searchQuery = document.getElementById('search-query').value;

  fetch(`https://api.github.com/search/repositories?q=${searchQuery}`)
    .then(response => response.json())
    .then(data => {
      searchResults = data.items;
      renderResults();
    });
}

function sortResults() {
  searchResults.sort((a, b) => a.name.localeCompare(b.name));

  renderResults();
}

function renderResults() {
  const resultsContainer = document.getElementById('results-container');

  resultsContainer.innerHTML = '';

  for (let i = 0; i < searchResults.length; i++) {
    const result = searchResults[i];
    const item = document.createElement('div');
    item.innerHTML = `<h2>${result.name}</h2><p>${result.description}</p>`;
    resultsContainer.appendChild(item);
  }
}
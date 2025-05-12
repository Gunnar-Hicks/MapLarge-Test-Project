// Fetch the articles from the news.json file
fetch('../../news.json')
  .then(response => response.json())
  .then(data => {
    const articles = data.articles; // Extract articles from the JSON data

    // Get the category from the URL (e.g., /sports.html will get "sports")
    const category = getCategoryFromURL();

    // Filter articles based on the category
    const filteredArticles = articles.filter(article => article.category.toLowerCase() === category.toLowerCase());

    // Display filtered articles
    displayArticles(filteredArticles);
  })
  .catch(error => console.error('Error loading JSON:', error));

// Function to get category from the URL
function getCategoryFromURL() {
  // Get the full URL of the current page
  const currentUrl = window.location.pathname;
  // Extract the category from the URL (e.g., "sports" from "/sports.html")
  const categoryMatch = currentUrl.match(/\/([a-zA-Z]+)\.html/);
  if (categoryMatch && categoryMatch[1]) {
    return categoryMatch[1]; // Return the category name, e.g., "sports"
  } else {
    return ''; // Default to empty if no category is found
  }
}

// Function to display articles on the page
function displayArticles(articles) {
  const container = document.getElementById('article-container'); // Get the container where articles will be displayed

  // Clear the container before displaying the new articles
  container.innerHTML = '';

  articles.forEach(article => {
    const card = document.createElement('div');
    card.classList.add('card', 'mb-4');

    // Build card content
    card.innerHTML = `
      <img src="${article.image}" class="card-img-top" 
          style="max-height: 250px; width: auto; object-fit: cover;"
          alt="${article.title}"
          onerror="this.outerHTML='<div class=\'card-img-top bg-secondary d-flex align-items-center justify-content-center text-white\' style=\'height: 500px;\'>No image available</div>'">
      <div class="card-body">
        <h5 class="card-title">${article.title}</h5>
        <p class="card-date text-muted">${article.date_posted.split('T')[0]}</p>
        <p class="card-text">${article.excerpt}</p>
        <a href="/article.html#${article.id}" class="btn btn-primary">Read more</a>
      </div>
    `;



    // Append the card to the container
    container.appendChild(card);
  });
}

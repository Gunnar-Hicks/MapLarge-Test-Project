document.addEventListener("DOMContentLoaded", () => {
  const articleId = parseInt(window.location.hash.substring(1));

  fetch("/news.json")
    .then(res => res.json())
    .then(data => {
      const article = data.articles.find(a => a.id === articleId);

      if (!article) {
        document.getElementById("article-container").innerHTML = `<p>Article not found.</p>`;
        return;
      }

      const formattedDate = new Date(article.date_posted).toLocaleDateString(undefined, {
        year: 'numeric', month: 'long', day: 'numeric'
      });

      document.getElementById("article-container").innerHTML = `
        <h3 class="mb-3 text-uppercase text-warning">${article.category}</h3>
        <h2 class="fw-bold">${article.title}</h2>

        <div class="row g-4 my-3 align-items-start">
          <div class="col-md-5">
            <img src="${article.image}" alt="${article.title}" class="img-fluid rounded bg-light" style="width: 100%; max-height: 400px; object-fit: cover;" onerror="this.onerror=null; this.src='images/placeholder.png';">
          </div>
          <div class="col-md-6">
            <div class="row g-4 my-3 align-items-start">
                <h3>${article.excerpt}</h3>
            </div>
            <div class="row g-4 my-3 align-items-start">
                <h3 class="text-muted">${formattedDate} – ${article.author}</h3>
            </div>
          </div>
        </div>

        <div class="article-body">
          <h3>${article.full_article.replace(/\n\n/g, '</h3><h3>')}</h3>
        </div>
      `;
    })
    .catch(error => {
      console.error("Error loading article:", error);
      document.getElementById("article-container").innerHTML = `<p>Error loading article.</p>`;
    });
});

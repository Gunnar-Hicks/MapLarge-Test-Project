# MapLarge-Test-Project
 A simple and responsive news article website to display articles.

## A fully functional and responsive news website
This project was created as an example for MapLarge to demonstrate the ability to create responsive and dynamic websites using Bootstrap and Javascript.

## Authored by Gunnar Hicks

## How to install
The simplest way to view this project would be to clone the respository locally and then launch index.html with VS Code's Live Server extension.

Once index.html is launched with Live Server, the website should be navigatable and interactable from your preferred web browser.

## Known Issues
Currently there is an issue with the sidebar menu on some medium sized screens. This may create some readability issues when viewing on screens slightly larger than small size.

## Features
* Scalability - The site will resize content and menus based on screen size, collapsing menus to drop downs when veiwing on mobile.
* Dynamic Content Loading - Articles are displayed and categorized based on object data pulled from news.json. This means that new objects and articles can be added to news.json and then dynamically displayed on their corresponding pages without having to manually create a page each time.
* Fall Back Content - Some image links that were provided are no longer available, for convenience I have incldued a fall back image that will be displayed in the event that desired visual content is unavailable.
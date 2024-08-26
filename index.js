// Function to initialize the event listener on the form
const init = () => {
    // Select the form element
    const inputForm = document.querySelector("form");
  
    // Add event listener to handle form submission
    inputForm.addEventListener("submit", (event) => {
      // Prevent the default form submission behavior (page refresh)
      event.preventDefault();
      
      // Get the value entered by the user in the input field
      const input = document.querySelector("input#searchByID");
  
      // Make a fetch request to the JSON server with the specific movie ID
      fetch(`http://localhost:3000/movies/${input.value}`)
        .then((response) => response.json()) // Parse the JSON response
        .then((data) => {
          // Select the elements where movie details will be displayed
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p");
  
          // Update the DOM with the movie's title and summary
          title.innerText = data.title;
          summary.innerText = data.summary;
        })
        .catch((error) => {
          // Handle errors (e.g., movie not found)
          console.error("Error fetching movie data:", error);
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p");
          title.innerText = "Movie not found";
          summary.innerText = "";
        });
    });
  };
  
  // Add an event listener to ensure the script runs after the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", init);
  
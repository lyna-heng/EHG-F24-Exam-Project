// Function to toggle the 'active' class on the navigation links
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

// Select the HTML element with the ID 'burger-menu'
// Add a 'click' event listener to the 'burger-menu' element
// When the 'burger-menu' element is clicked, call the 'toggleMenu' function
document.getElementById("burger-menu").addEventListener("click", toggleMenu);


/* to top button */
const scrollTopbtn = document.getElementById("back-to-top")

scrollTopbtn.addEventListener("click", () => {
    window.scrollTo({ // Built in browser API
        top: 0, // Vertical scroll position
        behavior: "smooth" // Smooth scrolling
    });
});

/* FISH Pop-ups */

const fishContainer = document.querySelector(".fish-container");
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupImage = document.getElementById("popup-image");
const popupDescription = document.getElementById("popup-description");
const closePopup = document.getElementById("close-popup");

// Identify the current page using a data attribute in the HTML body
const currentPage = document.body.getAttribute("data-page") || "default";

fetch('../js/fish.json')
    .then(response => response.json()) // Parse JSON
    .then(fishData => {
        console.log("Current Page:", currentPage); // Debugging the current page
        console.log("Full Fish Data:", fishData); // Debugging full JSON data

        // Filter fish for the current page or all pages
        const pageFish = fishData.filter(fish => 
            fish.page.includes(currentPage) || fish.page.includes("all")
        );

        console.log("Filtered Fish Data:", pageFish); // Debugging filtered fish data

        // Clear the container to avoid duplicates
        fishContainer.innerHTML = "";

        // Dynamically create fish cards for filtered data
        pageFish.forEach((fish) => {
            const card = document.createElement("div");
            card.className = "fishbox";
            card.style.backgroundImage = `url(${fish.image})`;
            card.title = fish.name; // Optional tooltip

            // Add click event for popups
            card.addEventListener("click", () => {
                popupTitle.textContent = fish.name;
                popupImage.src = fish.image;
                popupDescription.textContent = `
                    Bait: ${fish.bait.join(", ")} 
                    \nRod: ${fish.rod} 
                    \nWeight: ${fish.weight}
                `;
                popup.style.display = "flex";
            });

            fishContainer.appendChild(card);
        });
    })
    .catch(error => console.error('Error loading JSON:', error));

// Close popup event
closePopup.addEventListener("click", () => {
    popup.style.display = "none";
});

popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});
    
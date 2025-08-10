
const stories = [
    {
        id: 1,
        title: "The Marriage of Shiva and Parvati",
        excerpt: "The divine love story of how Parvati won Shiva's heart through her devotion and penance.",
        image: "images/shiva.jpeg",
        tags: ["love", "marriage", "devotion"],
        href: "shivparvati.html"
    },
    {
        id: 2,
        title: "Shiva and Nandi",
        excerpt: "The divine bond between Lord Shiva and his sacred bull Nandi, symbolizing devotion, strength, and eternal service.",
        image: "images/Nandii.jpeg",
        tags: ["devotion", "vehicle", "faith"],
        href: "nandi.html"
    },
    {
        id: 3,
        title: "Shiva and the Demon Tripurasura",
        excerpt: "How Shiva destroyed the three flying cities of the demon Tripurasura with a single arrow from his divine bow.",
        image: "images/tripura.jpeg",
        tags: ["destruction", "demon", "trishul"],
        href: "Tripur.html"
    },
    {
        id: 4,
        title: "The Legend of Neelkanth",
        excerpt: "The story of how Lord Shiva drank the poison Halahala during the Samudra Manthan to save the universe, turning his throat blue.",
        image: "images/Neelkanth.jpeg",
        tags: ["mythology", "poison", "sacrifice"],
        href: "Neelkanth.html"       
    },
    {
        id: 5,
        title: "The Origin of the Lingam",
        excerpt: "The story of how the infinite Jyotirlinga appeared when Brahma and Vishnu searched for Shiva's beginning and end.",
        image: "images/linga.jpeg",
        tags: ["lingam", "brahma", "vishnu"],
        href: "shivlinga.html"
    },
    {
        id: 6,
        title: "Shiva as Nataraja",
        excerpt: "The cosmic dance of Shiva that creates, sustains, and destroys the universe in cycles.",
        image: "images/natrajja.jpeg",
        tags: ["dance", "art", "cosmos"],
        href: "natraj.html"
    },
    {
        id: 7,
        title: "Shiva and Goddess Kali",
        excerpt: "The fierce tale of how Shiva calmed the wrath of Goddess Kali during her destructive dance, restoring balance in the cosmos.",
        image: "images/kali.jpeg",
        tags: ["shakti", "balance", "tandava", "divine"],
        href: "kali.html"
    },

    {
        id: 8,
        title: "The Story of Markandeya",
        excerpt: "How the child sage Markandeya was saved from Yama by Lord Shiva's divine intervention.",
        image: "images/Mahamritunjay.jpeg",
        tags: ["devotion", "death", "miracle"],
        href: "Mahamritunjay.html"
    }
];

// ======================
// DOM ELEMENTS
// ======================
const themeToggle = document.getElementById('theme-toggle');
const gridContainer = document.querySelector('.grid-container');
const backToTopButton = document.getElementById('back-to-top');
const loader = document.querySelector('.loader');

// ======================
// DARK MODE FUNCTIONALITY
// ======================
/**
 * Toggles between light and dark mode
 */
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
    localStorage.setItem('darkMode', isDarkMode);
}

// Initialize theme from localStorage
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
}

// Event listener for theme toggle
themeToggle.addEventListener('click', toggleDarkMode);

// ======================
// STORY RENDERING
// ======================
/**
 * Renders all stories to the grid container
 */
function renderStories() {
    gridContainer.innerHTML = stories.map(story => `
        <div class="story-card">
            <img src="${story.image}" alt="${story.title}">
            <div class="story-content">
                <h3>${story.title}</h3>
                <p>${story.excerpt}</p>
                <div class="tags">
                    ${story.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
                </div>
                <a href="${story.href}" class="read-more">Read More</a>

            </div>
        </div>
    `).join('');
}

// ======================
// SMOOTH SCROLLING
// ======================
/**
 * Sets up smooth scrolling for all anchor links
 */
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ======================
// BACK TO TOP BUTTON
// ======================
/**
 * Shows/hides back to top button based on scroll position
 */
function handleScroll() {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
}

/**
 * Scrolls to top when back to top button is clicked
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ======================
// LOADING ANIMATION
// ======================
/**
 * Hides the loading animation when page is fully loaded
 */
function hideLoader() {
    loader.style.opacity = '0';
    setTimeout(() => {
        loader.style.display = 'none';
    }, 500); // Match this with the CSS transition duration
}

// ======================
// INITIALIZATION
// ======================
/**
 * Initializes all functionality when DOM is loaded
 */
function init() {
    // Render stories
    renderStories();
    
    // Set up smooth scrolling
    setupSmoothScrolling();
    
    // Set up back to top button
    window.addEventListener('scroll', handleScroll);
    backToTopButton.addEventListener('click', scrollToTop);
    
    // Hide loader when page is loaded
    window.addEventListener('load', hideLoader);
    
    // Fallback in case load event doesn't fire
    setTimeout(hideLoader, 3000);
}

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);

//Neelkanth

document.addEventListener("DOMContentLoaded", () => {
  const img = document.querySelector(".animated-img");
  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.05)";
  });
  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
  });
});

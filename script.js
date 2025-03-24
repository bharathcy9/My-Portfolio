// 🔄 Dynamic Typing Effect with Fade Transition
const dynamicText = document.getElementById("dynamic-text");
const words = ["Innovator", "Data Architect", "Power BI Expert"];
let index = 0;

function updateText() {
    dynamicText.style.opacity = 0; // Fade out
    setTimeout(() => {
        dynamicText.innerText = words[index];
        dynamicText.style.transition = "opacity 0.5s ease-in-out"; // Enhanced transition
        dynamicText.style.opacity = 1; // Fade in
        index = (index + 1) % words.length;
    }, 500);
}

setInterval(updateText, 2000);

// 🎭 Show Popup (For Skills & Contact) with Animation
function openPopup(title, description) {
    let popup = document.getElementById("popup");
    document.getElementById("popup-title").innerText = title;
    document.getElementById("popup-description").innerText = description;
    popup.style.display = "flex";
    popup.style.opacity = 0;
    setTimeout(() => {
        popup.style.opacity = 1;
    }, 100);
}

// ❌ Close Popup with Animation
function closePopup() {
    let popup = document.getElementById("popup");
    popup.style.opacity = 0;
    setTimeout(() => {
        popup.style.display = "none";
    }, 300);
}

// 🖼️ Open Report Image in Modal with Zoom Animation
function openReport(type) {
    let reportImage = document.getElementById("report-image");
    let modal = document.getElementById("report-modal");
    
    reportImage.src = type === "powerbi" ? "images/powerbi-report-1.png" : "images/tableau-report-1.png";
    
    modal.style.display = "flex";
    modal.style.transform = "scale(0.8)";
    modal.style.opacity = 0;
    
    setTimeout(() => {
        modal.style.transform = "scale(1)";
        modal.style.opacity = 1;
    }, 100);
}

// ❌ Close Report Modal
function closeReport() {
    let modal = document.getElementById("report-modal");
    modal.style.opacity = 0;
    setTimeout(() => {
        modal.style.display = "none";
    }, 300);
}

// 🌙 Smooth Scroll-Based Background Gradient Update
window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;
    let maxScroll = document.body.scrollHeight - window.innerHeight;
    let scrollRatio = scrollPosition / maxScroll;

    let r = Math.floor(34 + scrollRatio * 60); // Adjusted for smoother transition
    let g = Math.floor(40 + scrollRatio * 70); // Adjusted for smoother transition
    let b = Math.floor(50 + scrollRatio * 80); // Adjusted for smoother transition

    document.body.style.transition = "background 0.5s ease"; // Improved transition
    document.body.style.background = `linear-gradient(to bottom, rgb(30, 40, 50), rgb(${r}, ${g}, ${b}))`;
});

// 🛣️ Roadmap Animation with Milestones

document.addEventListener("DOMContentLoaded", function () {
    const milestones = document.querySelectorAll(".milestone");
    const milestoneCards = document.querySelectorAll(".milestone-card");

    function checkMilestones() {
        const triggerBottom = window.innerHeight * 0.8;
        const colors = ["#4A90E2", "#50E3C2", "#F5A623", "#D0021B", "#9013FE"]; // Modern color scheme
        
        milestones.forEach((milestone, index) => {
            const milestoneTop = milestone.getBoundingClientRect().top;
            if (milestoneTop < triggerBottom) {
                milestone.classList.add("show");
                milestone.style.color = colors[index % colors.length]; // Assign color dynamically
                milestone.style.opacity = 0; // Start with opacity 0
                milestone.style.transition = "opacity 0.5s ease, transform 0.5s ease"; // Smooth transition
                milestone.style.transform = `translateY(20px)`; // Slide effect
                setTimeout(() => {
                    milestone.style.opacity = 1; // Fade in
                    milestone.style.transform = `translateY(0)`; // Slide to original position
                }, 100);
            }
        });
        
        milestoneCards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < triggerBottom) {
                card.classList.add("show");
                card.style.opacity = 0; // Start with opacity 0
                card.style.transition = "opacity 0.5s ease, transform 0.5s ease"; // Smooth transition
                card.style.transform = `translateY(10px) scale(0.95)`; // Minimal impact effect
                setTimeout(() => {
                    card.style.opacity = 1; // Fade in
                    card.style.transform = `translateY(0) scale(1)`; // Slide to original position
                }, 100);
                card.style.padding = "10px 15px"; // Reduce padding to minimize size
                card.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.2)";
            }
        });
    }
    
    window.addEventListener("scroll", checkMilestones);
    checkMilestones();
});
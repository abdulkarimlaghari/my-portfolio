
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("popup-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalText = document.getElementById("modal-text");
    const modalIcon = document.getElementById("modal-icon");
    const closeBtn = document.querySelector(".close-btn");

    const skillsContainer = document.getElementById("skills-container");
    const experienceContainer = document.getElementById("experience-container");
    const educationContainer = document.getElementById("education-container");
    const projectsContainer = document.getElementById("projects-container");
    const resumeContainer = document.getElementById("resume-container");


    // Section Icons Mapping
    const sectionIcons = {
        "About Me": "icons/eject-solid.svg",
        "Skills": "icons/kitchen-set-solid.svg",
        "Experience": "icons/history-solid.svg",
        "Education": "icons/school-solid.svg",
        "Personal Projects": "icons/diagram-project-solid.svg",
        "Resume": "icons/file-solid.svg"
    };

    // Function to Open the Modal and Show Correct Section
    window.openModal = function (title, text) {
        modalTitle.textContent = title;
        modalText.textContent = text;
        modalIcon.src = sectionIcons[title] || "icons/default.png"; // Set icon

        // Hide all sections by default
        skillsContainer.style.display = "none";
        experienceContainer.style.display = "none";
        modalText.style.display = "block"; // Default text visibility

        // Show the correct section
        if (title === "Skills") {
            skillsContainer.style.display = "flex";
            modalText.style.display = "none";
            modalTitle.style.display = "none"; // Hide "Skills" text inside the modal
            modalIcon.style.display = "none"; // Hide the section icon
        } else if (title === "Experience") {
            experienceContainer.style.display = "block";
            modalText.style.display = "none";
            modalTitle.style.display = "none";
            modalIcon.style.display = "none";
            experienceContainer.scrollTop = 0; // Reset scroll to top when opening
        }
        else if (title === "Education") {
            educationContainer.style.display = "block"; // Show Education details
            modalText.style.display = "none"; // Hide default text
        }
        else if (title === "Projects") {
            projectsContainer.style.display = "block"; // Show Projects
            modalText.style.display = "none"; // Hide default text
        }
        else if (title === "Resume") {
            document.getElementById("resume-container").style.display = "block"; // Show Resume
            document.getElementById("cv-viewer").src = "Abdul-Karim-CV.pdf"; // Ensure correct file
            modalText.style.display = "none"; // Hide default text
        }





        modal.classList.add("show");
        modal.style.display = "flex";
    };

    // Function to Close the Modal
    function closeModal() {
        modal.classList.remove("show");
        setTimeout(() => {
            modal.style.display = "none";
        }, 300); // Smooth transition

        // Hide all sections when closing
        skillsContainer.style.display = "none";
        experienceContainer.style.display = "none";
        educationContainer.style.display = "none"; // Hide Education section
        projectsContainer.style.display = "none";
        resumeContainer.style.display = "none";
    }

    // Attach Close Events
    closeBtn.addEventListener("click", closeModal);
    window.addEventListener("click", (event) => {
        if (event.target === modal) closeModal();
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeModal();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const skillIcons = document.querySelectorAll(".skill-icon");

    skillIcons.forEach(icon => {
        const tooltip = document.createElement("div");
        tooltip.className = "tooltip";
        tooltip.textContent = icon.dataset.skill;
        document.body.appendChild(tooltip);

        icon.addEventListener("mouseenter", (event) => {
            tooltip.style.display = "block";
            tooltip.style.left = event.pageX + "px";
            tooltip.style.top = (event.pageY - 30) + "px";
        });

        icon.addEventListener("mouseleave", () => {
            tooltip.style.display = "none";
        });
    });
});

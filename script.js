document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menuIcon");
    const navbarList = document.querySelector(".navbar ul");
    const jobTitleElement = document.getElementById("jobTitle");
    const underConstructionElement = document.getElementById("underConstruction");

    const jobTitles = ["Software Engineer", "Full-Stack Developer"];
    let currentIndex = 0;
    let glitchInterval;

    menuIcon.addEventListener("click", () => {
        navbarList.classList.toggle("show");
        menuIcon.classList.toggle("open");
    });

    const updateJobTitle = () => {
        const currentJobTitle = jobTitles[currentIndex];
        const typingSpeed = 100;

        for (let i = 0; i <= currentJobTitle.length; i++) {
            setTimeout(() => {
                jobTitleElement.innerText = currentJobTitle.slice(0, i);
            }, i * typingSpeed);
        }

        setTimeout(() => {
            for (let i = currentJobTitle.length; i >= 0; i--) {
                setTimeout(() => {
                    jobTitleElement.innerText = currentJobTitle.slice(0, i);
                }, (currentJobTitle.length - i) * typingSpeed);
            }

            currentIndex = (currentIndex + 1) % jobTitles.length;
            setTimeout(updateJobTitle, currentJobTitle.length * typingSpeed);
        }, currentJobTitle.length * typingSpeed + 2000);
    };

    const glitchEffect = () => {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/~`";

        const doGlitch = () => {
            let glitchedText = underConstructionElement.innerText;
            const randomIndex = Math.floor(Math.random() * glitchedText.length);
            glitchedText =
                glitchedText.substring(0, randomIndex) +
                characters[Math.floor(Math.random() * characters.length)] +
                glitchedText.substring(randomIndex + 1);
            underConstructionElement.innerText = glitchedText;
        };

        const reverseGlitch = () => {
            let originalText = "Website is currently under construction...";
            let glitchedText = underConstructionElement.innerText;
            let currentIndex = glitchedText.length;

            const reverseInterval = setInterval(() => {
                if (currentIndex >= 0) {
                    glitchedText = originalText.substring(0, currentIndex) +
                        characters[Math.floor(Math.random() * characters.length)] +
                        originalText.substring(currentIndex + 1);
                    underConstructionElement.innerText = glitchedText;
                    currentIndex--;
                } else {
                    clearInterval(reverseInterval);
                    setTimeout(startNextCycle, 2000);
                }
            }, 100);
        };

        const stopGlitch = () => {
            clearInterval(glitchInterval);
            reverseGlitch();
        };

        const startNextCycle = () => {
            glitchInterval = setInterval(() => {
                doGlitch();
            }, 25);
            setTimeout(() => {
                stopGlitch();
            }, 5000);
        };

        setTimeout(() => {
            startNextCycle();
        }, 2000);
    };

    const initializeParticles = () => {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 5,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true,
            "config_demo": {
                "hide_card": false,
                "background_color": "#b61924",
                "background_image": "",
                "background_position": "50% 50%",
                "background_repeat": "no-repeat",
                "background_size": "cover"
            }
        });
    };

    initializeParticles();
    updateJobTitle();
    glitchEffect();
});
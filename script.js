
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".from-bottom, .from-left, .from-right, .from-top");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // Evita que se vuelva a animar
            }
        });
    }, { threshold: 0.3 }); // Se activa cuando el 30% del elemento es visible

    elements.forEach(element => {
        observer.observe(element);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Función para animar la escritura de texto (efecto máquina de escribir)
    function animateTyping(element) {
        element.classList.add("show");
    }

    // Función para hacer aparecer el texto poco a poco (letra por letra)
    function animateTextFade(element) {
        const letters = element.textContent.split("");
        element.innerHTML = "";
        
        letters.forEach((letter, index) => {
            let span = document.createElement("span");
            span.textContent = letter;
            span.style.transitionDelay = `${index * 50}ms`; // Ajustar velocidad
            element.appendChild(span);
        });

        setTimeout(() => element.classList.add("show"), 300);
    }

    // Observer para los efectos
    const elements = document.querySelectorAll(".text-typing, .text-fade");
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains("text-typing")) {
                    animateTyping(entry.target);
                } else if (entry.target.classList.contains("text-fade")) {
                    animateTextFade(entry.target);
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    elements.forEach(element => {
        observer.observe(element);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    function animateCounter(element, start, end, duration) {
        let startTime = null;
        function updateCounter(timestamp) {
            if (!startTime) startTime = timestamp;
            let progress = timestamp - startTime;
            let currentValue = Math.min(start + (progress / duration) * (end - start), end);
            element.textContent = Math.floor(currentValue);
            if (progress < duration) {
                requestAnimationFrame(updateCounter);
            }
        }
        requestAnimationFrame(updateCounter);
    }

    const counterElement = document.getElementById("counter");
    animateCounter(counterElement, 0, 50000, 1500); // De 0 a 50,000 en 3s
});
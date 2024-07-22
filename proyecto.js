document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll('.rating input');
    const labels = document.querySelectorAll('.rating label');

    labels.forEach((label, index) => {
        label.addEventListener('click', () => {
            stars.forEach(star => star.checked = false);
            stars[index].checked = true;
        });

        label.addEventListener('mouseover', () => {
            resetStars();
            for (let i = 0; i <= index; i++) {
                labels[i].style.color = '#ffd700';
            }
        });

        label.addEventListener('mouseout', () => {
            resetStars();
        });
    });

    function resetStars() {
        labels.forEach(label => label.style.color = '#ddd');
        const checkedStar = document.querySelector('.rating input:checked');
        if (checkedStar) {
            const index = [...stars].indexOf(checkedStar);
            for (let i = 0; i <= index; i++) {
                labels[i].style.color = '#ffd700';
            }
        }
    }
});



document.addEventListener('DOMContentLoaded', function() {
    // Lista de imágenes de perfil y nombres de usuario
    const profiles = [
        { img: 'IMG Rachel/perfil1.jpg', name: 'Mariela Gomez', username: '@marillaagom' },
        { img: 'IMG Rachel/perfil2.jfif', name: 'Joseline Sanchez', username: '@josssms' },
        { img: 'IMG Rachel/perfil3.jpg', name: 'Cesia Cruz', username: '@cesisscaa' },
        { img: 'IMG Rachel/perfil4.jfif', name: 'Paula Cuadros', username: '@pauuumcdr' },
        { img: 'IMG Rachel/perfil5.jpeg', name: 'Pablo Rios', username: '@pauriosss' },
        { img: 'IMG Rachel/perfil6.jpeg', name: 'Alondra Palacios', username: '@aloPcios' },
        { img: 'IMG Rachel/perfil7.jpeg', name: 'Daniela Villeda', username: '@Danilleda' },
        { img: 'IMG Rachel/perfil8.jpeg', name: 'David Arturo', username: '@Artuum00' },
        { img: 'IMG Rachel/perfil9.jpeg', name: 'Alex Jimenez', username: '@AlexJxmez' },
        { img: 'IMG Rachel/perfil10.jpeg', name: 'Agustin Medina', username: '@AgusMdina' },
        { img: 'IMG Rachel/perfil11.jpeg', name: 'Jimin Velasquez', username: '@Jiminss' },
        { img: 'IMG Rachel/perfil12.jpeg', name: 'Ashley Duarte', username: '@DuarteAhs' }
        // Agrega más perfiles según sea necesario
    ];

    // Cargar comentarios desde localStorage
    function loadReviews() {
        let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        reviews.forEach(review => {
            displayReview(review);
        });
    }

    // Mostrar un comentario en el DOM
    function displayReview(review) {
        let newReview = document.createElement('div');
        newReview.classList.add('testimonial-box');

        newReview.innerHTML = `
            <div class="box-top">
                <div class="profile">
                    <div class="profile-img">
                        <img src="${review.img}" alt="Imagen de perfil">
                    </div>
                    <div class="name-user">
                        <strong>${review.name}</strong>
                        <span>${review.username}</span>
                    </div>
                </div>
                <div class="reviews">
                    ${'<i class="fas fa-star"></i>'.repeat(review.rating)}
                    ${'<i class="far fa-star"></i>'.repeat(5 - review.rating)}
                </div>
            </div>
            <div class="client-comment">
                <p>${review.text}</p>
            </div>
        `;

        document.getElementById('testimonial-box-container').appendChild(newReview);
    }

    // Guardar un nuevo comentario
    document.getElementById('submit-review').addEventListener('click', function() {
        let rating = document.querySelector('input[name="rating"]:checked');
        if (!rating) {
            alert('Por favor selecciona una calificación.');
            return;
        }

        let reviewText = document.querySelector('.review-input textarea').value.trim();
        if (reviewText === '') {
            alert('Por favor ingresa un comentario.');
            return;
        }

        // Seleccionar aleatoriamente un perfil
        let randomProfile = profiles[Math.floor(Math.random() * profiles.length)];

        let review = {
            img: randomProfile.img,
            name: randomProfile.name,
            username: randomProfile.username,
            rating: rating.value,
            text: reviewText
        };

        // Guardar el comentario en localStorage
        let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        reviews.push(review);
        localStorage.setItem('reviews', JSON.stringify(reviews));

        // Mostrar el comentario en el DOM
        displayReview(review);

        document.querySelector('input[name="rating"]:checked').checked = false;
        document.querySelector('.review-input textarea').value = '';
    });

    // Cargar los comentarios al iniciar la página
    loadReviews();
});



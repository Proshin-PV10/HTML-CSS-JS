document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const applicationList = document.getElementById('applicationList');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const date = new Date().toLocaleString();

            const application = {
                name,
                phone,
                email,
                message,
                date
            };

            const applications = JSON.parse(localStorage.getItem('applications')) || [];
            applications.push(application);
            localStorage.setItem('applications', JSON.stringify(applications));

            contactForm.reset();
            alert('Ваша заявка отправлена!');
        });
    }

    if (applicationList) {
        const applications = JSON.parse(localStorage.getItem('applications')) || [];
        
        if (applications.length === 0) {
            applicationList.innerHTML = '<p>Текущих заявок нет.</p>';
        } else {
            applications.forEach((app, index) => {
                const appDiv = document.createElement('div');
                appDiv.innerHTML = `
                    <p><strong>Имя:</strong> ${app.name}</p>
                    <p><strong>Телефон:</strong> ${app.phone}</p>
                    <p><strong>Email:</strong> ${app.email}</p>
                    <p><strong>Сообщение:</strong> ${app.message}</p>
                    <p><strong>Дата отправки:</strong> ${app.date}</p>
                    <button onclick="deleteApplication(${index})">Удалить заявку</button>
                    <hr>
                `;
                applicationList.appendChild(appDiv);
            });
        }
    }
});

function deleteApplication(index) {
    const applications = JSON.parse(localStorage.getItem('applications')) || [];
    applications.splice(index, 1);
    localStorage.setItem('applications', JSON.stringify(applications));
    location.reload(); // Обновляем страницу, чтобы отобразить изменения
}

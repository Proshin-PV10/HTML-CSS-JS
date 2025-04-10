document.addEventListener('DOMContentLoaded', function() {
    var applicationList = document.getElementById('applicationList');
    var applications = JSON.parse(localStorage.getItem('applications')) || [];
    
    if (applicationList) {
        if (applications.length === 0) {
            applicationList.innerHTML = '<p>Текущих заявок нет.</p>';
        } else {
            applications.forEach((app, index) => {
                var appDiv = document.createElement('div');
                appDiv.innerHTML = `
                    <p><strong>Имя:</strong> ${app.name}</p>
					<p><strong>Город:</strong>${app.city}</p>
					<p><strong>Координаты:</strong>${app.coordinates}</p>
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
    var applications = JSON.parse(localStorage.getItem('applications')) || [];
    applications.splice(index, 1);
    localStorage.setItem('applications', JSON.stringify(applications));
    location.reload(); 
}

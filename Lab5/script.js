var phoneInput = document.getElementById('phone');
var nameInput = document.getElementById('name');
var addButton = document.getElementById('addButton');
var entriesDiv = document.getElementById('entries');

function displayEntries() {
    entriesDiv.innerHTML = ''; 
    var entries = JSON.parse(localStorage.getItem('phonebook')) || [];
    
    entries.forEach((entry, index) => {
        var entryDiv = document.createElement('div');
        entryDiv.className = 'entry';
        entryDiv.innerHTML = `
            <span>${entry.phone} - ${entry.name}</span>
            <span class="delete-button" onclick="deleteEntry(${index})">Удалить</span>
        `;
        entriesDiv.appendChild(entryDiv);
    });
}
addButton.addEventListener('click', () => {
    var phone = phoneInput.value;
    var name = nameInput.value;

    if (phone && name) {
        var entries = JSON.parse(localStorage.getItem('phonebook')) || [];
        entries.push({ phone, name });
        localStorage.setItem('phonebook', JSON.stringify(entries));
        phoneInput.value = '';
        nameInput.value = '';
        displayEntries();
    } else {
        alert('Заполните оба поля.');
    }
});

function deleteEntry(index) {
    var entries = JSON.parse(localStorage.getItem('phonebook')) || [];
    entries.splice(index, 1);
    localStorage.setItem('phonebook', JSON.stringify(entries));
    displayEntries();
}

displayEntries();

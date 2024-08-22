const elements = {
    sendFormButton: document.getElementById('send-form'),
    form: document.getElementById('form'),
    firstNameInput: document.getElementById('firstName'),
    lastNameInput: document.getElementById('lastName'),
    programmingLanguageSelect: document.getElementById('programmingLanguage'),
    developerList: document.getElementById('developer-list'),
    resetFormButton: document.getElementById('reset-form'),
};

function addDeveloperToTable() {
    const newDeveloper = {
        firstName: elements.firstNameInput.value.trim(),
        lastName: elements.lastNameInput.value.trim(),
        programmingLanguage: elements.programmingLanguageSelect.value
    };

    const developers = JSON.parse(localStorage.getItem("developers")) || [];
    developers.push(newDeveloper);
    localStorage.setItem("developers", JSON.stringify(developers));
    displayDevelopers();
    elements.form.reset();
}

function displayDevelopers() {
    elements.developerList.innerHTML = '';
    const developers = JSON.parse(localStorage.getItem("developers")) || [];

    developers.forEach(developer => {
        const listItem = document.createElement('tr');
        listItem.innerHTML = `
            <td>${developer.firstName}</td>
            <td>${developer.lastName}</td>
            <td>${developer.programmingLanguage}</td>`;
        elements.developerList.appendChild(listItem);
    });
}

function clearLocalStorage() {
    localStorage.removeItem('developers');
    displayDevelopers();
}

elements.sendFormButton.addEventListener('click', function(e) {
    e.preventDefault();
    addDeveloperToTable();
});

elements.resetFormButton.addEventListener('click', function(e) {
    e.preventDefault();
    clearLocalStorage();
});

document.addEventListener('DOMContentLoaded', displayDevelopers);



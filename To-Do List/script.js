document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const darkModeBtn = document.getElementById('darkModeBtn');
    
    let isDarkMode = false;
    
    darkModeBtn.addEventListener('click', function() {
        isDarkMode = !isDarkMode;
        toggleDarkMode();
    });
    
    function toggleDarkMode() {
        if (isDarkMode) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    }
    
    function enableDarkMode() {
        document.body.classList.add('dark-mode');
        darkModeBtn.textContent = 'Light Mode';
    }
    
    function disableDarkMode() {
        document.body.classList.remove('dark-mode');
        darkModeBtn.textContent = 'Dark Mode';
    }
    
    addTaskBtn.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        } else {
            alert('Please enter a task!');
        }
    });
    
    taskList.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-btn')) {
            event.target.parentElement.remove();
        }
    });
    
    function addTask(taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn">Delete</button>
        `;
        taskList.appendChild(li);
    }  
});
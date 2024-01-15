taskList.addEventListener('click', function(event) {
    // Check if the clicked element has the "delete-button" class
    if (event.target.classList.contains('delete-button')) {
        // Get the parent list item and remove it from the task list
        const listItem = event.target.parentNode;
        taskList.removeChild(listItem);
    }
});
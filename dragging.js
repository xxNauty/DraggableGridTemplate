const dropzones = document.querySelectorAll('.drop-zone');
const draggables = document.querySelectorAll('.tile');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', event.target.id); // Store dragged element ID
    });
});

dropzones.forEach((dropzone) => {
    dropzone.addEventListener('dragover', (event) => {
        event.preventDefault();
        dropzone.classList.add('hover');
    });

    dropzone.addEventListener('dragleave', () => {
        dropzone.classList.remove('hover');
    });

    dropzone.addEventListener('drop', (event) => {
        event.preventDefault();
        dropzone.classList.remove('hover');

        const draggedElementId = event.dataTransfer.getData('text/plain');
        const draggedElement = document.getElementById(draggedElementId);
        const currentDropzone = event.target.closest('.drop-zone');

        const existingElement = currentDropzone.querySelector('.tile');
        if (existingElement) {
            const originalDropzone = draggedElement.parentNode;
            originalDropzone.appendChild(existingElement);
        }

        currentDropzone.appendChild(draggedElement);
    });
});
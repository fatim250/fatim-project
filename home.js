document.addEventListener('DOMContentLoaded', function() {
    const categorySelect = document.getElementById('category');

    categorySelect.addEventListener('change', function() {
        const selectedCategory = categorySelect.value;

        if (selectedCategory !== 'choose') {
            alert('You selected the category: ' + selectedCategory);
        }
    });
});

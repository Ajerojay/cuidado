document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const sidebarItems = document.querySelectorAll('.sidebar-item a');

    if (!sidebar || !sidebarItems.length) return;

    sidebarItems.forEach(item => {
        item.addEventListener('click', () => {
            sidebar.classList.toggle('expanded');
            document.body.classList.toggle('sidebar-expanded');
        });
    });
});


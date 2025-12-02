document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const sidebarItems = document.querySelectorAll('.sidebar-item a');
    const body = document.body;

    if (!sidebar || !sidebarItems.length) return;

    const isExpanded = () => sidebar.classList.contains('expanded');

    const expandSidebar = () => {
        if (isExpanded()) return;
        sidebar.classList.add('expanded');
        body.classList.add('sidebar-expanded');
    };

    const collapseSidebar = () => {
        if (!isExpanded()) return;
        sidebar.classList.remove('expanded');
        body.classList.remove('sidebar-expanded');
    };

    sidebarItems.forEach(item => {
        item.addEventListener('click', event => {
            if (!isExpanded()) {
                event.preventDefault();
                expandSidebar();
            }
        });
    });

    document.addEventListener('click', event => {
        if (!isExpanded()) return;
        if (sidebar.contains(event.target)) return;
        collapseSidebar();
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            collapseSidebar();
        }
    });
});

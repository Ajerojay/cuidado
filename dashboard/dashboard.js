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

const ctx = document.getElementById('progressChart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ],
    datasets: [
      {
        label: 'Series 1',
        data: [10, 14, 13, 18, 16, 22, 19, 23, 21, 26, 24, 28],
        borderColor: '#18a999',
        backgroundColor: '#18a999',
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 6,
        fill: false
      },
      {
        label: 'Series 2',
        data: [12, 15, 14, 17, 19, 18, 21, 20, 23, 22, 27, 29],
        borderColor: '#f28f38',
        backgroundColor: '#f28f38',
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 6,
        fill: false
      }
    ]
  },
  options: {
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: {
        grid: { color: 'rgba(0,0,0,0.1)' }
      },
      y: {
        beginAtZero: false,
        grid: { color: 'rgba(0,0,0,0.1)' }
      }
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
    // View All button functionality
    const viewAllBtn = document.querySelector('.view-all-btn');
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', () => {
            // Show all hidden team members (4-6)
            for (let i = 4; i <= 6; i++) {
                const memberCard = document.querySelector(`#team-member-${i}-name`).closest('.doctor-card');
                if (memberCard) {
                    memberCard.style.display = 'block';
                }
            }
            // Hide the "View All" button after showing all members
            viewAllBtn.style.display = 'none';
        });
    }
});


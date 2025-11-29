document.addEventListener('DOMContentLoaded', () => {
    // Get all edit section buttons
    const editButtons = document.querySelectorAll('.admin-edit-section');
    const modals = document.querySelectorAll('.edit-modal');
    const closeButtons = document.querySelectorAll('.modal-close');
    const cancelButtons = document.querySelectorAll('.cancel-btn-modal');
    const saveButtons = document.querySelectorAll('.save-btn-modal');

    // Open modal when edit button is clicked
    editButtons.forEach(button => {
        button.addEventListener('click', () => {
            const section = button.getAttribute('data-section');
            const modal = document.getElementById(`${section}-modal`);
            if (modal) {
                modal.style.display = 'flex';
                // Load current values into modal
                loadModalData(section);
            }
        });
    });

    // Close modal functions
    function closeModal(modal) {
        modal.style.display = 'none';
    }

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.edit-modal');
            closeModal(modal);
        });
    });

    cancelButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.edit-modal');
            closeModal(modal);
        });
    });

    // Close modal when clicking outside
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });

    // Load current data into modal
    function loadModalData(section) {
        if (section === 'hero') {
            document.getElementById('modal-hero-title').value = document.getElementById('hero-title').textContent;
            document.getElementById('modal-hero-description').value = document.getElementById('hero-description').textContent;
        } else if (section === 'mission-vision') {
            document.getElementById('modal-mv-title').value = document.getElementById('mission-vision-title').textContent;
            document.getElementById('modal-mv-description').value = document.getElementById('mission-vision-description').textContent;
            document.getElementById('modal-mission-title').value = document.getElementById('mission-title').textContent;
            document.getElementById('modal-mission-text').value = document.getElementById('mission-text').textContent;
            document.getElementById('modal-vision-title').value = document.getElementById('vision-title').textContent;
            document.getElementById('modal-vision-text').value = document.getElementById('vision-text').textContent;
        } else if (section === 'about') {
            document.getElementById('modal-story-text').value = document.getElementById('story-text').textContent;
            document.getElementById('modal-about-description').value = document.getElementById('about-description').textContent;
            const features = document.querySelectorAll('#features-list li span');
            if (features.length >= 3) {
                document.getElementById('modal-feature-1').value = features[0].textContent;
                document.getElementById('modal-feature-2').value = features[1].textContent;
                document.getElementById('modal-feature-3').value = features[2].textContent;
            }
            document.getElementById('modal-about-conclusion').value = document.getElementById('about-conclusion').textContent;
        } else if (section === 'team') {
            document.getElementById('modal-team-title').value = document.getElementById('team-title').textContent;
            document.getElementById('modal-team-description').value = document.getElementById('team-description').textContent;
            // Load all 6 team members
            for (let i = 1; i <= 6; i++) {
                document.getElementById(`modal-team-member-${i}-name`).value = document.getElementById(`team-member-${i}-name`).textContent;
                document.getElementById(`modal-team-member-${i}-role`).value = document.getElementById(`team-member-${i}-role`).textContent;
            }
        }
    }

    // Save data from modal
    saveButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.edit-modal');
            const modalId = modal.id;

            if (modalId === 'hero-modal') {
                // Save hero section
                document.getElementById('hero-title').textContent = document.getElementById('modal-hero-title').value;
                document.getElementById('hero-description').textContent = document.getElementById('modal-hero-description').value;
                
                // Handle photo upload
                const photoInput = document.getElementById('modal-hero-photo');
                if (photoInput.files.length > 0) {
                    const file = photoInput.files[0];
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        // Update CSS background image
                        const heroSection = document.querySelector('.hero-section');
                        heroSection.style.setProperty('--hero-bg-image', `url(${e.target.result})`);
                        // Or update the ::before pseudo-element via a style tag
                        const style = document.createElement('style');
                        style.textContent = `.hero-section::before { background-image: url(${e.target.result}) !important; }`;
                        document.head.appendChild(style);
                    };
                    reader.readAsDataURL(file);
                }
            } else if (modalId === 'mission-vision-modal') {
                // Save mission & vision
                document.getElementById('mission-vision-title').textContent = document.getElementById('modal-mv-title').value;
                document.getElementById('mission-vision-description').textContent = document.getElementById('modal-mv-description').value;
                document.getElementById('mission-title').textContent = document.getElementById('modal-mission-title').value;
                document.getElementById('mission-text').textContent = document.getElementById('modal-mission-text').value;
                document.getElementById('vision-title').textContent = document.getElementById('modal-vision-title').value;
                document.getElementById('vision-text').textContent = document.getElementById('modal-vision-text').value;
            } else if (modalId === 'about-modal') {
                // Save about us
                document.getElementById('story-text').textContent = document.getElementById('modal-story-text').value;
                document.getElementById('about-description').textContent = document.getElementById('modal-about-description').value;
                const features = document.querySelectorAll('#features-list li span');
                if (features.length >= 3) {
                    features[0].textContent = document.getElementById('modal-feature-1').value;
                    features[1].textContent = document.getElementById('modal-feature-2').value;
                    features[2].textContent = document.getElementById('modal-feature-3').value;
                }
                document.getElementById('about-conclusion').textContent = document.getElementById('modal-about-conclusion').value;
                
                // Handle photo upload
                const photoInput = document.getElementById('modal-about-photo');
                if (photoInput.files.length > 0) {
                    const file = photoInput.files[0];
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const aboutLogo = document.querySelector('.about-logo');
                        aboutLogo.src = e.target.result;
                    };
                    reader.readAsDataURL(file);
                }
            } else if (modalId === 'team-modal') {
                // Save team section
                document.getElementById('team-title').textContent = document.getElementById('modal-team-title').value;
                document.getElementById('team-description').textContent = document.getElementById('modal-team-description').value;
                // Save all 6 team members
                for (let i = 1; i <= 6; i++) {
                    document.getElementById(`team-member-${i}-name`).textContent = document.getElementById(`modal-team-member-${i}-name`).value;
                    document.getElementById(`team-member-${i}-role`).textContent = document.getElementById(`modal-team-member-${i}-role`).value;
                    
                    // Handle photo upload for each member
                    const photoInput = document.getElementById(`modal-team-member-${i}-photo`);
                    if (photoInput.files.length > 0) {
                        const file = photoInput.files[0];
                        const reader = new FileReader();
                        reader.onload = (e) => {
                            const memberPhoto = document.getElementById(`team-member-${i}-photo`);
                            const memberPlaceholder = document.getElementById(`team-member-${i}-placeholder`);
                            memberPhoto.src = e.target.result;
                            memberPhoto.alt = document.getElementById(`modal-team-member-${i}-name`).value;
                            memberPhoto.style.display = 'block';
                            memberPlaceholder.style.display = 'none';
                        };
                        reader.readAsDataURL(file);
                    }
                }
            }

            closeModal(modal);
            alert('Changes saved successfully!');
        });
    });

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


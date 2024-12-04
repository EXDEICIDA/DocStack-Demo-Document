document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('videoModal');
    const btn = document.getElementById('watchDemoBtn');
    const closeBtn = document.querySelector('.close-modal');
    const video = document.getElementById('demoVideo');

    // Open modal
    btn.addEventListener('click', function() {
        modal.classList.add('active');
        video.play();
    });

    // Close modal
    closeBtn.addEventListener('click', function() {
        modal.classList.remove('active');
        video.pause();
        video.currentTime = 0;
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove('active');
            video.pause();
            video.currentTime = 0;
        }
    });

    // Handle escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            video.pause();
            video.currentTime = 0;
        }
    });
});

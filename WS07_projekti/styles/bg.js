document.addEventListener('DOMContentLoaded', function () {
    const root = document.documentElement;
    
    const MIN_WIDTH = 320;   
    const MAX_WIDTH = 1920; 

    function updateBgLevel() {
        const w = window.innerWidth || document.documentElement.clientWidth;
        let t = (w - MIN_WIDTH) / (MAX_WIDTH - MIN_WIDTH);
        t = Math.max(0.2, Math.min(1, t));
        root.style.setProperty('--bg-level', String(t));
    }

    // initialize and keep in sync while resizing
    updateBgLevel();
    window.addEventListener('resize', updateBgLevel, { passive: true });
});
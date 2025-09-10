// Get image elements for both images
const image1 = document.getElementById('zoom-image-1');
const image2 = document.getElementById('zoom-image-2');

// Initial zoom levels for both images
let zoomLevel1 = 1;
let zoomLevel2 = 1;

// Set zoom factor for each zoom in/out action
const zoomFactor = 0.1;

// Update zoom function for image 1
function updateZoom1() {
    image1.style.transform = `scale(${zoomLevel1})`;
}

// Update zoom function for image 2
function updateZoom2() {
    image2.style.transform = `scale(${zoomLevel2})`;
}

// Optional: Allow zooming with mouse wheel on each image
image1.addEventListener('wheel', (e) => {
    if (e.deltaY < 0) {
        zoomLevel1 += zoomFactor; // Zoom in
    } else {
        if (zoomLevel1 > zoomFactor) {
            zoomLevel1 -= zoomFactor; // Zoom out
        }
    }
    updateZoom1();
    e.preventDefault(); // Prevent page scroll
});

image2.addEventListener('wheel', (e) => {
    if (e.deltaY < 0) {
        zoomLevel2 += zoomFactor; // Zoom in
    } else {
        if (zoomLevel2 > zoomFactor) {
            zoomLevel2 -= zoomFactor; // Zoom out
        }
    }
    updateZoom2();
    e.preventDefault(); // Prevent page scroll
});


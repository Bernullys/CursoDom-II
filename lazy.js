//Only to check Total Loaded images and Charged images//
let totalLoadedImages = 0;
let chargedImages = 0;

export const silyObserver = () => {
    console.log(`🟣 Total Images       ${totalLoadedImages}`);
    console.log(`⚪ Charged Images     ${chargedImages}`);
};

export const resetSilyObserver = () => {
    totalLoadedImages=0;
    chargedImages=0;
};

////////////////////////////////////////////////////////

const observer = new IntersectionObserver((entries) => {
    entries.filter(intersecting).forEach(actionLoadImage)
});

const intersecting = (entry) => {
    return entry.isIntersecting;
};

const actionLoadImage = (entry) => {
    console.log("Printing in console");
    chargedImages++;
    silyObserver();
    const container = entry.target;
    const image = container.querySelector("img");
    const url = image.dataset.src;
    image.src = url;
    observer.unobserve(container);
};

export const registerImages = (image) => {
    totalLoadedImages++;
    silyObserver();
    observer.observe(image);
};
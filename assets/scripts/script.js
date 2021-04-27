/* Width of each carousel image, in pixels */
let carouselWidth = 600; 

/* Part 1.1: Get the elements */
let prevButton = document.getElementById("button-previous");
let nextButton = document.getElementById("button-next");
let imageRow = document.getElementById("carousel-image-row");

/* Part 1.2: Create variable to keep track of which image we're on */
let imageNum = 0 /*number of images to the left of the current*/


/* Part 1.3: The showNextImage function should shift the image row to the left */
function showNextImage() {
	// change imageNum
	imageNum = imageNum + 1;
	// how many pixels from the left should imageRow now be?

	let nextimg = imageNum * carouselWidth;
	imageRow.style.left = -nextimg;
	// change css for imageRow
	checkControls()

}

/* Part 1.4: Change the onclick property for the next button */
nextButton.onclick = showNextImage;

/* Part 1.5: The showPrevImage function should shift the image row to the right */
function showPrevImage() {
	imageNum = imageNum - 1;
	let nextimg = imageNum * carouselWidth;
	imageRow.style.left = -nextimg;
	checkControls();
}

/* Part 1.6: Change the onclick property for the prev button */
prevButton.onclick = showPrevImage;

/* Total number of images */
let totalImages = document.getElementsByClassName("carousel-image").length;

/* Part 1.7 */

function checkControls() {
	// This if-statement checks if we're at the first image.
	// In the parentheses below, check what imageNum is equal to.
	if (imageNum===0) {
		prevButton.classList.add("hidden");
		// What should happen if it's the first image?

	}
	else if (prevButton.classList.contains("hidden")) {
		prevButton.classList.remove("hidden");
		// otherwise, what should happen?
		
	}
	// This if-statement checks if we're at the last image.
	// In the parentheses below, check what imageNum is equal to.
	if (imageNum===4) {
		nextButton.classList.add("hidden");
		// What should happen it's the last image?
		
	}
	else if (nextButton.classList.contains("hidden")) {
		// otherwise, what should happen?
		nextButton.classList.remove("hidden");

	}
} 



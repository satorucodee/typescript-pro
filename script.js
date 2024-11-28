// URL of the PDF file
const pdfUrl = "js.pdf";

// PDF.js configuration
pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js";

let pdfDoc = null;
let currentPage = 1;
const leftCanvas = document.getElementById("pdf-left-page");
const rightCanvas = document.getElementById("pdf-right-page");
const leftPageNumber = document.getElementById("left-page-number");
const rightPageNumber = document.getElementById("right-page-number");
const bookContainer = document.querySelector(".book-container"); // Container for swipe detection

// Variables for swipe detection
let startX = 0;
let endX = 0;

// Load PDF document
async function loadPDF() {
  pdfDoc = await pdfjsLib.getDocument(pdfUrl).promise;
  renderPages();
}


// Render two pages at a time
async function renderPages() {
  if (!pdfDoc) return;

  // Render the current page on the left side
  const leftPage = await pdfDoc.getPage(currentPage);
  renderPageToCanvas(leftPage, leftCanvas);
  leftPageNumber.textContent = `Page ${currentPage}`;

  // Render the next page on the right side if it exists
  if (currentPage + 1 <= pdfDoc.numPages) {
    const rightPage = await pdfDoc.getPage(currentPage + 1);
    renderPageToCanvas(rightPage, rightCanvas);
    rightPageNumber.textContent = `Page ${currentPage + 1}`;
  } else {
    // Clear the right page canvas if no page exists
    rightCanvas
      .getContext("2d")
      .clearRect(0, 0, rightCanvas.width, rightCanvas.height);
    rightPageNumber.textContent = ""; // Hide right page number if no page
  }
}

// Render a single page to a given canvas
function renderPageToCanvas(page, canvas) {
  const context = canvas.getContext("2d");
  const viewport = page.getViewport({ scale: 1.5 }); // Adjust scale as needed
  canvas.width = viewport.width;
  canvas.height = viewport.height;

  page.render({
    canvasContext: context,
    viewport: viewport,
  });
}

// Swipe detection
bookContainer.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

bookContainer.addEventListener("touchmove", (e) => {
  endX = e.touches[0].clientX;
});

bookContainer.addEventListener("touchend", () => {
  handleSwipe();
});

function handleSwipe() {
  const swipeThreshold = 50; // Minimum swipe distance to detect as a swipe

  if (startX - endX > swipeThreshold && currentPage + 1 < pdfDoc.numPages) {
    // Swipe left (next page)
    currentPage += 2;
    renderPages();
  } else if (endX - startX > swipeThreshold && currentPage > 1) {
    // Swipe right (previous page)
    currentPage -= 2;
    renderPages();
  }

  // Reset swipe coordinates
  startX = 0;
  endX = 0;
}

// Load the PDF on page load
loadPDF();

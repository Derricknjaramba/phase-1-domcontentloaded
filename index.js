document.addEventListener('DOMContentLoaded', function() {
    // Target the paragraph element with id="text"
    const textParagraph = document.getElementById('text');
    
    // Replace the text content using textContent property
    if (textParagraph) {
        textParagraph.textContent = "This is really cool!";
    } else {
        console.error("Paragraph element with id='text' not found!");
    }
});

/**
   * read code from .pzl file
   * @param {*} file 
   * @author jtormoehlen
   */
function readFile(fileName) {
    if (selectedFile && selectedFile.name === fileName && selectedFile.type === "text/plain") {
        const reader = new FileReader();

        reader.onload = function(event) {
            const fileContent = event.target.result;
            document.getElementById('output').innerText = fileContent;
        };

        reader.onerror = function(event) {
            console.error("Datei konnte nicht gelesen werden: ", event.target.error);
        };

        reader.readAsText(selectedFile);
    } else {
        alert("Die ausgewählte Datei ist entweder nicht die richtige oder wurde nicht gewählt.");
    }
}
function loadXMLDoc(filename) {
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", filename, false);
    xhttp.send();
    return xhttp.responseXML;
}

function applyXSLT(xml, xsl) {
    if (window.ActiveXObject || "ActiveXObject" in window) {
        return xml.transformNode(xsl);
    } else if (document.implementation && document.implementation.createDocument) {
        let xsltProcessor = new XSLTProcessor();
        xsltProcessor.importStylesheet(xsl);
        let resultDocument = xsltProcessor.transformToFragment(xml, document);
        return resultDocument;
    }
}

function displayXMLAsText(xml) {
    let serializer = new XMLSerializer();
    let xmlStr = serializer.serializeToString(xml);
    document.getElementById("xmlContent").textContent = xmlStr;
}

function numberToWords(num) {
    const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const teens = ["", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const hundreds = ["", "one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"];

    if (num === 0) return "zero";

    if (num < 10) return ones[num];
    if (num > 10 && num < 20) return teens[num - 10];
    if (num < 100) return `${tens[Math.floor(num / 10)]} ${ones[num % 10]}`;
    if (num < 1000) return `${hundreds[Math.floor(num / 100)]} ${numberToWords(num % 100)}`;
    
    return "Number too large";
}

function generateTableFromXML(xml) {
    const books = xml.getElementsByTagName("Book");
    let tableHTML = "<table><tr><th>Title</th><th>Genre</th><th>Theme</th><th>Edited By</th><th>Total Copies</th><th>Copies Issued</th></tr>";

    for (let i = 0; i < books.length; i++) {
        const title = books[i].getElementsByTagName("Title")[0].textContent;
        const genre = books[i].getElementsByTagName("Genre")[0].textContent;
        const theme = books[i].getElementsByTagName("Theme")[0].textContent;
        const editedBy = books[i].getElementsByTagName("EditedBy")[0].textContent;
        const totalCopies = numberToWords(parseInt(books[i].getElementsByTagName("TotalCopies")[0].textContent, 10));
        const copiesIssued = numberToWords(parseInt(books[i].getElementsByTagName("CopiesIssued")[0].textContent, 10));

        tableHTML += `<tr><td>${title}</td><td>${genre}</td><td>${theme}</td><td>${editedBy}</td><td>${totalCopies}</td><td>${copiesIssued}</td></tr>`;
    }
    tableHTML += "</table>";

    document.getElementById("booksTable").innerHTML = tableHTML;
}

window.onload = function() {
    const xml = loadXMLDoc("../lab-xmls/lab10.xml");
    const xsl = loadXMLDoc("../lab-xsls/lab9.xsl");

    const transformedContent = applyXSLT(xml, xsl);
    document.getElementById("booksTable").appendChild(transformedContent);
    displayXMLAsText(xml);
    generateTableFromXML(xml);
};

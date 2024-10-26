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

function generateTableFromXML(xml, xsl, elem, preElem) {
    const transformedContent = applyXSLT(xml, xsl);
    document.getElementById(elem).appendChild(transformedContent);

    const xslText = new XMLSerializer().serializeToString(xsl);
    document.getElementById(preElem).textContent = xslText;
}

window.onload = function() {
    const xml = loadXMLDoc("../lab-xmls/lab9.xml");

    const xslOriginal = loadXMLDoc("../lab-xsls/lab9.xsl");
    generateTableFromXML(xml, xslOriginal, "originalTable", "xslOriginal");
    
    const xslSorted = loadXMLDoc("../lab-xsls/lab9.1.xsl");
    generateTableFromXML(xml, xslSorted, "sortedTable", "xslSorted");
    
    const xslFiltered = loadXMLDoc("../lab-xsls/lab9.2.xsl");
    generateTableFromXML(xml, xslFiltered, "filteredTable", "xslFiltered");
};
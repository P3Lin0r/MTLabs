<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    exclude-result-prefixes="xs"
    version="1.0">

    <!-- Sort books by title in ascending order -->
    <xsl:template match="/">
        <html>
            <body>
                <h2>Library Catalog</h2>
                <table border="1">
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Genre</th>
                        <th>Total Copies</th>
                        <th>Copies Issued</th>
                    </tr>
                    <xsl:apply-templates select="Library/Books/Book">
                        <xsl:sort select="Title" order="ascending"/>
                    </xsl:apply-templates>
                </table>
            </body>
        </html>
    </xsl:template>

    <!-- Filter books with more than 5 total copies -->
    <xsl:template match="Book">
        <xsl:if test="TotalCopies > 5">
            <tr>
                <td><xsl:value-of select="Title"/></td>
                <td><xsl:value-of select="Authors/Author/FirstName"/> <xsl:value-of select="Authors/Author/LastName"/></td>
                <td><xsl:value-of select="Shelf/Genre"/></td>
                <td><xsl:value-of select="TotalCopies"/></td>
                <td><xsl:value-of select="CopiesIssued"/></td>
            </tr>
        </xsl:if>
    </xsl:template>

</xsl:stylesheet>
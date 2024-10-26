<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="1.0">
    
    <xsl:key name="authorship-by-book" match="Authorship" use="BookID"/>
    <xsl:key name="author-by-id" match="Author" use="@id"/>
    
    <xsl:template match="/">
        <html>
            <body>
                <h3>Catalog of the Library (Sorted)</h3>
                <table border="1">
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Theme</th>
                        <th>Edited By</th>
                        <th>Total Copies</th>
                        <th>Copies Issued</th>
                        <th>Author</th>
                    </tr>
                    <xsl:apply-templates select="Library/Books/Book">
                        <xsl:sort select="Title" order="ascending"/>
                    </xsl:apply-templates>
                </table>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="Book">
        <tr>
            <td><xsl:value-of select="Title"/></td>
            <td><xsl:value-of select="Shelf/Genre"/></td>
            <td><xsl:value-of select="Shelf/Theme"/></td>
            <td><xsl:value-of select="EditedBy"/></td>
            <td><xsl:value-of select="TotalCopies"/></td>
            <td><xsl:value-of select="CopiesIssued"/></td>
            <td>
                <xsl:variable name="authorship" select="key('authorship-by-book', @id)"/>
                <xsl:variable name="author" select="key('author-by-id', $authorship/AuthorID)"/>

                <xsl:value-of select="$author/FirstName"/> 
                <xsl:text> </xsl:text>
                <xsl:value-of select="$author/LastName"/>
            </td>
        </tr>
    </xsl:template>

</xsl:stylesheet>
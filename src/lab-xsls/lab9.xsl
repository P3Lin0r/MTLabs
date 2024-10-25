<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="1.0">
    
    <xsl:key name="authorship-by-book" match="Authorship" use="BookID"/>
    <xsl:key name="author-by-id" match="Author" use="@id"/>
    <xsl:template match="/">
        <html>
            <body>
                <h2>Каталог Библиотеки</h2>
                <table border="1">
                    <tr>
                        <th>Название</th>
                        <th>Автор</th>
                        <th>Жанр</th>
                        <th>Всего Экземпляров</th>
                        <th>Выдано Экземпляров</th>
                    </tr>
                    <xsl:apply-templates select="Library/Books/Book">
                        <xsl:sort select="Title" order="ascending"/>
                    </xsl:apply-templates>
                </table>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="Book">
        <xsl:if test="TotalCopies > 10">
            <tr>
                <td><xsl:value-of select="Title"/></td>
                <td>
                    <xsl:variable name="authorship" select="key('authorship-by-book', @id)"/>
                    <xsl:variable name="author" select="key('author-by-id', $authorship/AuthorID)"/>

                    <xsl:value-of select="$author/FirstName"/> 
                    <xsl:value-of select="$author/LastName"/>
                </td>
                <td><xsl:value-of select="Shelf/Genre"/></td>
                <td><xsl:value-of select="TotalCopies"/></td>
                <td><xsl:value-of select="CopiesIssued"/></td>
            </tr>
        </xsl:if>
    </xsl:template>

</xsl:stylesheet>

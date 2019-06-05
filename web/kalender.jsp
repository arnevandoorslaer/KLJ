<%--
  Created by IntelliJ IDEA.
  User: arnevandoorslaer
  Date: 7/6/18
  Time: 6:07 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="nl-BE">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kalender - KLJ Hakendover</title>
    <link href="css/reset.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    <%@ page import="domain.db.ActiviteitenDB" %>
    <%@ page import="domain.model.Activiteit" %>
    <%ActiviteitenDB activiteitenDB = (ActiviteitenDB) request.getAttribute("activiteitenDB");%>
</head>
<body>
<%@ include file="header.jspf" %>
<% String[] maanden = new String[]{"September", "Oktober", "November", "December", "Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli"};%>
<main>
    <%for (String maand : maanden) {%>
    <div class="maand">
        <h2><%=maand%></h2>
        <%for (Activiteit activiteit : activiteitenDB.getActiviteitenByMaand(maand)) {%>
        <div>
            <p><%=activiteit.getUur()%>
            </p>
            <p><%=activiteit.getNaam()%>
            </p>
            <p><%=activiteit.getLocatie()%>
            </p>
            <p><%=activiteit.getWie()%>
            </p>
            <p><%=activiteit.getExtra()%>
            </p>
        </div>
        <%}%>
    </div>
    <%}%>
</main>
<%@ include file="footer.jspf" %>
</body>
</html>


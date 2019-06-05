<%--
  Created by IntelliJ IDEA.
  User: arnevandoorslaer
  Date: 7/6/18
  Time: 6:08 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="nl-BE">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact - KLJ Hakendover</title>
    <link href="css/reset.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    <%@ page import="domain.model.Leider" %>
    <%@ page import="java.util.ArrayList" %>

</head>
<body>
<%@ include file="header.jspf" %>
<main>
    <div class="contactgrid">
        <h2>VASTE LEIDING</h2>
        <%ArrayList<Leider> vasteleiding = (ArrayList) request.getAttribute("vasteleiding");%>
        <%for (Leider leider : vasteleiding) {%>
        <div><p><%=leider.getNaam()%>
        </p><img src="<%=leider.getFoto()%>" alt="<%=leider.getNaam()%>"></div>
        <%}%>
        <h2>HULPLEIDING</h2>
        <%ArrayList<Leider> hulpleiding = (ArrayList) request.getAttribute("hulpleiding");%>
        <%for (Leider leider : hulpleiding) {%>
        <div><p><%=leider.getNaam()%>
        </p><img src="<%=leider.getFoto()%>" alt="<%=leider.getNaam()%>"></div>
        <%}%>

    </div>
</main>
<%@ include file="footer.jspf" %>
</body>
</html>


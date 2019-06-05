package domain.controller;


import domain.db.ActiviteitenDB;
import domain.db.LeidingDB;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


/**
 * Servlet implementation class Controller
 */
@WebServlet("/Servlet")
public class Servlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    LeidingDB leidingDB = new LeidingDB();
    ActiviteitenDB activiteitenDB = new ActiviteitenDB();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public Servlet() {
        super();
        // TODO Auto-generated constructor stub
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
     * response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        ProcessRequest(request, response);
    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
     * response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        ProcessRequest(request, response);
    }

    public void ProcessRequest(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String command = "index";
        if (request.getParameter("command") != null) {
            command = request.getParameter("command");
        }
        String destination;
        switch (command) {
            case "index":
                destination = index(request, response);
                break;
            case "contact":
                destination = contact(request, response);
                break;
            case "informatie":
                destination = informatie(request, response);
                break;
            case "kalender":
                destination = kalender(request, response);
                break;
            default:
                destination = index(request, response);
                break;
        }
        request.getRequestDispatcher(destination).forward(request, response);
    }

    private String index(HttpServletRequest request, HttpServletResponse response) {
        return "index.jsp";
    }

    private String contact(HttpServletRequest request, HttpServletResponse response) {
        if (leidingDB.getLeiding().size() == 0) {
            leidingDB.fill(getServletContext().getRealPath("/WEB-INF/leiding.xml"));
        }
        request.setAttribute("vasteleiding", leidingDB.getVasteLeiding());
        request.setAttribute("hulpleiding", leidingDB.getHulpLeiding());
        return "contact.jsp";
    }

    private String informatie(HttpServletRequest request, HttpServletResponse response) {
        return "informatie.jsp";
    }

    private String kalender(HttpServletRequest request, HttpServletResponse response) {
        if (activiteitenDB.getActiviteiten().size() == 0) {
            activiteitenDB.fill(getServletContext().getRealPath("/WEB-INF/Kalender.xml"));
        }
        request.setAttribute("activiteitenDB", activiteitenDB);
        return "kalender.jsp";
    }
}

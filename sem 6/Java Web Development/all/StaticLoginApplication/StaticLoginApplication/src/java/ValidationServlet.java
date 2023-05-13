
import javax.servlet.http.*;
import javax.servlet.*;
import java.io.*;
import java.sql.*;
import java.util.logging.Level;
import java.util.logging.Logger;

public class ValidationServlet extends HttpServlet {

    public void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        res.setContentType("text/html");//setting the content type  
//writing html in the stream
        try (PrintWriter pw = res.getWriter()) //get the stream to write the data
        {
            String uname, pass, aa;
            uname = req.getParameter("username");
            pass = req.getParameter("password");
            //writing html in the stream
            pw.println("<html><body>");
//            if(uname.equals("admin") && pass.equals("welcome")){
//                pw.println("Welcome Admin");
//            }else{
//                pw.println("Bye not authorized");
//            }

            //for loading the driver, class is the base class (static method), 
//                to load the class dynamically into the program, to register the class with driver manager
            Class.forName("com.mysql.jdbc.Driver");
            //here student is database name, root is username and password
            Connection con = DriverManager.getConnection("jdbc:mysql://localhost/users", "root", "");

            ResultSet rs;

            String query = "select * from login where username=? and password=?";
            PreparedStatement pstatement = con.prepareStatement(query);
            pstatement.setString(1, uname);
            pstatement.setString(2, pass);

            rs = pstatement.executeQuery();

            if (rs.next()) {
                aa = rs.getString(2);
                pw.println("Welcome " + aa);
            } else {
                pw.println("Username or password is wrong");
            }
            pw.println("</body></html>");
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(ValidationServlet.class.getName()).log(Level.SEVERE, null, ex);
        }

    }
}

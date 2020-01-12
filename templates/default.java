
// Nexss PROGRAMMER 2.0.0 - Java
// Default template for JSON Data
// STDIN
import java.util.Scanner;

import org.json.JSONObject;

// import org.json.JSONArray;
// import java.util.Arrays;
// import java.util.Collections;


// IMPORTANT NOTE:
// class name must be exacly the same as file name. Below we have Main class so file MUST BE Main.class
public class Default {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        while(scanner.hasNext())
        {
            String NexssStdin = scanner.nextLine();
            JSONObject NexssStdout = new JSONObject(NexssStdin);         
            NexssStdout.put("test", "test");
            
            System.out.println(NexssStdout);
        }
        scanner.close();
    }
}

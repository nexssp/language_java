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
public class HelloWorld {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        while(scanner.hasNext())
        {
            String NexssStdin = scanner.nextLine();
            JSONObject NexssStdout = new JSONObject(NexssStdin);         
            // String cwd = (String) json.get("cwd"); // To get Values
            NexssStdout.put("HelloFromJava", Runtime.class.getPackage().getImplementationVersion());
            
            // NexssStdout.put("collection", new JSONArray(Arrays.asList(1, "Test array", 
            //     Collections.singletonMap("subarray", 12345))));
            
            System.out.println(NexssStdout);
        }
        scanner.close();
    }
}

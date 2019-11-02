
// Nexss PROGRAMMER 2.0.0 - Java
// Default template for JSON Data
// STDIN
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

class My {
    public static void main(String[] args) throws java.io.IOException {
        // Enter data using BufferReader
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        // Reading data using readLine
        String name = reader.readLine();

        // Printing the read line
        System.out.println(name);
        System.out.println("xxxxxxxxxxxxxx");
    }

}

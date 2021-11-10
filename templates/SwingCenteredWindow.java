
// Nexss Programmer 2.x - Java Swing Centered Window example

import javax.swing.*;  
import java.awt.*;

public class SwingCenteredWindow {  
    public static void main(String[] args) {  
        JFrame f=new JFrame();
        f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        f.setSize(400,200);//400 width and 500 height  
        f.setLayout(null);//using no layout managers  
        f.setVisible(true);//making the frame visible  
        centreWindow(f);
        
        JButton b=new JButton("click");
        b.setBounds(130,100,100, 40);      
        f.add(b);

        JLabel l=new JLabel("Nexss Programmer Java Demo", JLabel.CENTER);
        l.setSize(350,100);
        f.add(l);
    }  

    public static void centreWindow(JFrame frame) {
        Dimension objDimension = Toolkit.getDefaultToolkit().getScreenSize();
        int iX = (objDimension.width - frame.getWidth()) / 2;
        int iY = (objDimension.height - frame.getHeight()) / 2;
        frame.setLocation(iX, iY); 
    }

}  
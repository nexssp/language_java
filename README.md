# Java in Nexss Programmer

Nexss Programmer don't need Java to run. Please check the LICENSE at java.com <https://java.com/en/download/faq/distribution.xml>

To Install Nexss Programmer please go to [Nexss Programmer CLI](https://github.com/nexssp/cli#readme) for more information.

## Change different compiler versions

```sh
nexss java default compiler java8 # Version 8
nexss java default compiler java13 # Version 13
```

## CLASSPATH

Nexss Programmer 2.0 has **CLASSPATH** specified to the current folder lib/ .If you would like to include some jar files please make **lib** folder in your project and put your external libraries there. For example, nexss programmer uses **json-20190722.jar** file which allow to parse and make json format and file is copied during adding HelloWorld.java and Default.java Nexss Programmer templates.

[What is CLASSPATH](<https://en.wikipedia.org/wiki/Classpath_(Java)>)
[5 ways to add multiple JAR in to Classpath in Java](https://javarevisited.blogspot.com/2012/10/5-ways-to-add-multiple-jar-to-classpath-java.html)

## Useful commands 

```sh
java -version # check jre version
javac -version # check which compiler
java -XshowSettings:properties -version
```

## Links

<https://www.baeldung.com/java-org-json>  
<https://www.geeksforgeeks.org/parse-json-java/>
<https://www.edureka.co/blog/cheatsheets/java-cheat-sheet/>

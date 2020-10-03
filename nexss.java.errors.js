module.exports = {
  "symbol:   class (?<found1>.*?)\\r\\n": "Check the '<found1>' word..",
  "Could not find or load main class (.*?)":
    "Please make sure class name is the same as filename and starts with uppercase letter.",
  "variable inline might not have been initialized": `Variable is declared but not initialized. eg. string x; but must be string x=""`,
  "Caused by: java.lang.ClassNotFoundException:(.*?)": `Nexss Programmer has CLASSPATH specifiend to the ./lib folder. Please go to https://github.com/nexssp/language_java for more details.`,
  "has been compiled by a more recent version of the Java Runtime \\(class file version (?<found1>.*?)\\), this version of the Java Runtime only recognizes class file versions up to (?<found2>.*?)\r\n":
    "Java Compiler (javac) <found1> is different then your Java Runtime (java) <found2>. For more details please go to: https://github.com/nexssp/language_java/wiki/java.lang.UnsupportedClassVersionError-issue",
  "error: class (.*) is public, should be declared in a file named (.*)\n":
    "<found1> ffff <found2>xxx",
};

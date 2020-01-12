module.exports = {
  "Could not find or load main class (.*?)":
    "Please make sure class name is the same as filename and starts with uppercase letter.",
    "variable inline might not have been initialized":`Variable is declared but not initialized. eg. string x; but must be string x=""`,
    "Caused by: java.lang.ClassNotFoundException:(.*?)":
    `Nexss Programmer has CLASSPATH specifiend to the ./lib folder. Please go to https://github.com/nexssp/language_java for more details.`

};

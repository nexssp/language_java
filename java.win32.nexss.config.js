let languageConfig = Object.assign({}, require("../config.win32"));
languageConfig.title = "Java";
languageConfig.description =
  "Java is a programming language and computing platform first released by Sun Microsystems in 1995.";
languageConfig.url = "https://www.java.com/";
languageConfig.extensions = [".java"];
languageConfig.builders = {};
languageConfig.compilers = {
  java: {
    install: "scoop bucket add java && scoop install openjdk14 maven",
    // Cpp does not have possibility to compile and run on the fly. We need to save it as a exe file first.
    command: "javac",
    args: `<file> -Xlint:unchecked -cp .;lib/*;src/lib/* & java -cp .;lib/*;src/lib/* <fileNoExt>`,
    help: ``
  }
};
languageConfig.errors = require("./nexss.java.errors");
languageConfig.languagePackageManagers = {
  mvn: {
    installation: "scoop install maven",
    messageAfterInstallation: "",
    installed: "mvn installed",
    search: "mvn search",
    install: "mvn require",
    uninstall: "mvn remove",
    package: "mvn package",
    compile: "mvn compile",
    help: "mvn",
    version: "mvn version",
    init: () => {
      if (
        !require("fs").existsSync(
          require("path").join(process.cwd(), "pom.xml")
        )
      ) {
        try {
          require("child_process").execSync(
            "rm -rf my-app && mvn archetype:generate -DgroupId=com.mycompany.app -DartifactId=my-app -DarchetypeArtifactId=maven-archetype-quickstart -DarchetypeVersion=1.4 -DinteractiveMode=false && mv my-app/src/* ./src && rm -rf my-app/src && mv my-app/* . && rm -rf mv-app",
            { stdio: "inherit" }
          );
        } catch (error) {}

        console.log("initialized java/maven project.");
      } else {
        console.log("Maven already initialized.");
      }
    },
    // if command not found in specification
    // run directly on package manager
    else: "mvn"
  }
};

module.exports = languageConfig;

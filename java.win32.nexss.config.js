let languageConfig = Object.assign(
  {},
  require(`../config.${process.platform}`)
);
languageConfig.title = "Java";
languageConfig.description =
  "Java is a programming language and computing platform first released by Sun Microsystems in 1995.";
languageConfig.url = "https://www.java.com";
languageConfig.founders = ["James Gosling"];
languageConfig.developers = ["Oracle"];
languageConfig.years = ["1995"];
languageConfig.extensions = [".java"];
languageConfig.builders = {};
languageConfig.compilers = {
  java8: {
    install: "scoop bucket add java && scoop install adopt8-hotspot maven",
    command: "javac",
    // for dev helper with ' args: `<file> -Xlint:unchecked -cp '.;lib/*;src/lib/*' & java -D'file.encoding="UTF-8"' -cp '.;lib/*;src/lib/*' <fileNoExt>`,
    args: `<file> -Xlint:unchecked -cp .;lib/*;src/lib/* & java -Dfile.encoding="UTF-8" -cp .;lib/*;src/lib/* <fileNoExt>`,
    help: ``,
  },
  java13: {
    install: "scoop bucket add java && scoop install openjdk13 maven",
    command: "javac",
    args: `<file> -Xlint:unchecked -cp .;lib/*;src/lib/* & java -cp .;lib/*;src/lib/* <fileNoExt>`,
    help: ``,
  },
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
    else: "mvn",
  },
};

module.exports = languageConfig;

let languageConfig = Object.assign({}, require("../config.win32"));
languageConfig.title = "Java";
languageConfig.description =
  "Java is a programming language and computing platform first released by Sun Microsystems in 1995.";
languageConfig.url = "https://www.java.com/";
languageConfig.extensions = [".java"];
languageConfig.builders = {};
languageConfig.compilers = {
  java: {
    install: "scoop install java maven",
    // Cpp does not have possibility to compile and run on the fly. We need to save it as a exe file first.
    command: "javac",
    args: "-d java/ <file> & java java/<fileNoExt>",
    help: ``
  }
};
languageConfig.errors = require("./nexss.java.errors");
languageConfig.languagePackageManagers = {
  mvn: {
    installation: "scoop install maven",
    messageAfterInstallation: "",
    installed: "mvn installed ",
    search: "mvn search",
    install: "mvn require",
    uninstall: "mvn remove",
    help: "mvn",
    version: "mvn version",
    init: () => {
      if (
        !require("fs").existsSync(
          require("path").join(process.cwd(), "package.json")
        )
      ) {
        require("child_process").execSync("npm init -y", { stdio: "inherit" });
        console.log("initialized npm project.");
      } else {
        console.log("npm already initialized.");
      }
    },
    // if command not found in specification
    // run directly on package manager
    else: "composer <default> <args>"
  }
};

module.exports = languageConfig;

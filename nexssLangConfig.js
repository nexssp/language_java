module.exports = {
  description: "Java",
  type: "language",
  author: "Marcin Polak <mapoart@gmail.com>",
  version: "1.0",
  compiler: "javac",
  extension: ".java",
  errors: {
    "'java' is": {
      win32: "scoop install java maven",
      darwin: "brew install java maven",
      linux: "apt install java maven -y"
    },
    "error: package (.*?) does not exist": {
      win32: "mvn install <module>",
      darwin: "mvn install <module>",
      linux: "mvn install <module>"
    }
  },
  url: "https://java.com"
};

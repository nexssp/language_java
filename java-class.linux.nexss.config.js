let languageConfig = Object.assign({}, require(`./java.win32.nexss.config`));

const sudo = process.sudo;
const distName = process.distro;

languageConfig.dist = distName;

languageConfig.compilers = {
  java8: {
    install: `${sudo}apt install openjdk-8-jdk`,
    command: "java",
    args: `-Dfile.encoding=UTF-8 -cp '.:./lib/*:src/lib/*' <fileNoExt>`,
    help: ``,
  },
  java13: {
    install: `${sudo}apt install openjdk-13-jdk`,
    command: "java",
    args: `-cp '.:lib/*:src/lib/*' <fileNoExt>`,
    help: ``,
  },
};

switch (distName) {
  case process.distros.ORACLE:
    languageConfig.compilers.java8.install = `${sudo}yum install -y java-1.8.0-openjdk java-devel`;
    break;
  case process.distros.AMAZON:
  case process.distros.AMAZONAMI:
    languageConfig.compilers.java8.install = `${sudo}yum install -y java-1.8.0-openjdk java-devel`;
    break;
  case process.distros.ALPINE: // add java-devel??
    languageConfig.compilers.java8.install = `${sudo}apk add openjdk8
JAVA_HOME=/usr/lib/jvm/java-1.8-openjdk
PATH = "$JAVA_HOME/bin:\${PATH}"
${sudo}ln -sf /usr/lib/jvm/java-1.8-openjdk/bin/javac /usr/bin/javac`;
    break;
  case process.distros.DEBIAN:
    languageConfig.compilers.java8.install = `${sudo}apt install -y openjdk-11-jdk`;
    break;
  case process.distros.CENTOS:
  case process.distros.FEDORA:
    languageConfig.compilers.java8.install = process.replacePMByDistro(
      `${sudo}apt-get install -y java java-devel`
    );
    break;
  case process.distros.ARCH:
    languageConfig.compilers.java8.install = `${sudo}pacman -S --noconfirm jre-openjdk jdk-openjdk`; // error: package org.json does not exist
    break;
  default:
    languageConfig.compilers.java8.install = process.replacePMByDistro(
      languageConfig.compilers.java8.install
    );
    languageConfig.compilers.java13.install = process.replacePMByDistro(
      languageConfig.compilers.java13.install
    );
    break;
}

module.exports = languageConfig;

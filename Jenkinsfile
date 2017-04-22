pipeline {
  agent any
  stages {
    stage('Install packages') {
      steps {
        sh 'yarn'
      }
    }
    stage('Run the server') {
      steps {
        sh 'pm2 start process.json'
      }
    }
  }
}
pipeline {
  agent any
  stages {
    stage('Install/Update packages') {
      steps {
        sh 'yarn'
      }
    }
    stage('Start/restart server') {
      steps {
        sh 'pm2 start process.json'
      }
    }
  }
}
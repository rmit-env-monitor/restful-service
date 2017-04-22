pipeline {
  agent any
  stages {
    stage('Install packages') {
      steps {
        sh 'yarn'
      }
    }
    stage('Restart service') {
      steps {
        sh 'pm2 start process.json'
      }
    }
  }
}
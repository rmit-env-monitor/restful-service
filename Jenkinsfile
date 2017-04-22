pipeline {
  agent any
  stages {
    stage('Install packages') {
      steps {
        sh 'npm install'
      }
    }
    stage('Restart service') {
      steps {
        sh 'pm2 start process.json'
      }
    }
  }
}
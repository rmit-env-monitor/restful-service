pipeline {
  agent any
  stages {
    stage('Install packages') {
      steps {
        sh 'yarn install'
      }
    }
    stage('Restart service') {
      steps {
        sh 'pm2 restart restful-service'
      }
    }
  }
}
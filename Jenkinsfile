pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.61.1-noble'
            args '-u 0:0'
        }
    }

    environment {
        CI = 'true'
        HEADLESS = 'true'
        PLAYWRIGHT_JUNIT_OUTPUT_NAME = 'test-results/junit.xml'
    }

    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Run Playwright tests') {
            steps {
                sh 'npm test -- --reporter=line,html,junit'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**,test-results/**', allowEmptyArchive: true
            junit testResults: 'test-results/junit.xml', allowEmptyResults: true
        }
    }
}

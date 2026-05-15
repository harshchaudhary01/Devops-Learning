pipeline {
    agent any

    environment {
        IMAGE_NAME = "devops-learning"
        CONTAINER_NAME = "devops-learning-container"
    }

    stages {

        stage('Clone') {
            steps {
                echo 'Cloning repository...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing npm packages...'

                sh '''
                npm install
                chmod -R 755 node_modules
                chmod +x node_modules/.bin/vite
                '''
            }
        }

        stage('Build React App') {
            steps {
                echo 'Building Vite app...'
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t ${IMAGE_NAME} .'
            }
        }

        stage('Remove Old Container') {
            steps {
                script {
                    sh '''
                    docker stop ${CONTAINER_NAME} || true
                    docker rm ${CONTAINER_NAME} || true
                    '''
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                echo 'Running Docker container...'

                sh '''
                docker run -d \
                  --name ${CONTAINER_NAME} \
                  -p 3000:80 \
                  ${IMAGE_NAME}
                '''
            }
        }
    }

    post {
        success {
            echo 'Pipeline executed successfully!'
        }

        failure {
            echo 'Pipeline failed!'
        }
    }
}
pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // If Jenkins is on Windows, use 'bat' instead of 'sh'
                bat 'npm ci'
            }
        }
        stage('Test') {
            steps {
                bat 'npm test'
            }
        }
        stage('Deploy to EC2') {
            steps {
                // Requires the 'SSH Agent' or 'SSH Pipeline Steps' plugin,
                // or you can invoke ssh directly with credentialsId:
                withCredentials([sshUserPrivateKey(credentialsId: 'ec2-ssh-key', keyFileVariable: 'SSH_KEY', usernameVariable: 'SERVER_USER')]) {
                    bat """
                        ssh -o StrictHostKeyChecking=no -i %SSH_KEY% %SERVER_USER%@YOUR_EC2_IP "cd ~/express-devops && git fetch origin main && git reset --hard origin/main && npm ci --omit=dev && pm2 restart express-devops && pm2 status"
                    """
                }
            }
        }
    }
}
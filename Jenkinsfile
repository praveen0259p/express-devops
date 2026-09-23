pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
        EC2_HOST = '3.110.167.229'
        APP_DIR = '/home/ec2-user/express-devops'

        PATH = "/Users/praveenkumar/.nvm/versions/node/v20.19.2/bin:${env.PATH}"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Check Node') {
            steps {
                sh '''
                    node -v
                    npm -v
                    which node
                    which npm
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy to EC2') {
            steps {
                withCredentials([
                    sshUserPrivateKey(
                        credentialsId: 'ec2-ssh-key',
                        keyFileVariable: 'SSH_KEY',
                        usernameVariable: 'SERVER_USER'
                    )
                ]) {
                    sh '''
                        ssh -o StrictHostKeyChecking=no \
                            -i "$SSH_KEY" \
                            "$SERVER_USER@$EC2_HOST" \
                            "cd $APP_DIR && \
                             git fetch origin main && \
                             git reset --hard origin/main && \
                             npm ci --omit=dev && \
                             pm2 restart express-devops && \
                             pm2 status"
                    '''
                }
            }
        }
    }
}
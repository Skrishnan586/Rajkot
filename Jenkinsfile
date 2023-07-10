pipeline {
    agent any

    stages {
        stage('SCM checkout') {
            steps {
                git 'https://github.com/Skrishnan586/Rajkot.git'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                script {
                    def scannerHome = tool 'sonarscanner4'
                    withSonarQubeEnv('sonar-pro') {
                        sh "${scannerHome}/bin/sonar-scanner -Dsonar.projectKey=Rajkot"
                    }
                }
            }
        }

        stage('Quality Gate') {
            steps {
                sleep(time: 35, unit: 'SECONDS')
                timeout(time: 1, unit: 'HOURS') {
                    waitForQualityGate abortPipeline: true, credentialsId: 'sonar'
                }
            }
            post {
                failure {
                    echo 'Sending email notification from Jenkins'
                    step([$class: 'Mailer',
                          notifyEveryUnstableBuild: true,
                          recipients: emailextrecipients([[$class: 'CulpritsRecipientProvider'],
                                                          [$class: 'RequesterRecipientProvider']])])
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'cd /var/lib/jenkins/workspace/Rajkot'
                    def dockerImage = docker.build("harikrishnan/rajkot-hospital", "--file Dockerfile .")
                }
            }
        }

        stage('Push Image to ECR') {
            steps {
                script {
                    docker.withRegistry(
                        'https://572679073520.dkr.ecr.ap-south-1.amazonaws.com/automated-deployment',
                        'ecr:ap-south-1:my.aws.credentials') {
                        def myImage = docker.build('automated-deployment')
                        myImage.push('latest')
                    }
                }
            }
        }
        
        stage('Approval - Deploy on k8s') {
            steps {
                input 'Approve for EKS Deploy'
            }
        }
        
        stage('Deploy on k8s') {
            steps {
                parallel (
                    'deploy on k8s': {
                        script {
                            withKubeCredentials(kubectlCredentials: [[credentialsId: 'k8s', namespace: 'default']]) {
                                sh 'kubectl apply -f /var/lib/jenkins/mainservice.yaml'
                            }
                        }
                    }
                )
            }
        }
    }
}

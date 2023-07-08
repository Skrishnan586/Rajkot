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
                sleep(time: 20, unit: 'SECONDS')
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

        stage('Build Docker Image and push') {
            steps {
                sh """
                    docker build -t harikrishnan586/rajkothospitalimg .
                    docker push harikrishnan586/rajkothospitalimg
                    docker rmi harikrishnan586/rajkothospitalimg
                """
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
                                sh 'kubectl apply -f mainservice.yaml'
                            }
                        }
                    }
                )
            }
        }
    }
}

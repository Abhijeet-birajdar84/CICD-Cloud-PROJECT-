pipeline {
    agent any

    environment {
        KUBECONFIG = 'C:\\Program Files\\Jenkins\\.kube\\config'
    }

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Abhijeet-birajdar84/CICD-Cloud-PROJECT-.git'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t cicd-cloud-project .'
            }
        }

        stage('K8s Test') {
            steps {
                bat 'kubectl config current-context'
                bat 'kubectl get nodes'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                bat '''
                kubectl delete deployment cicd-cloud-deployment --ignore-not-found=true
                kubectl apply -f k8s/deployment.yaml --validate=false
                kubectl apply -f k8s/service.yaml --validate=false
                '''
            }
        }
    }
}

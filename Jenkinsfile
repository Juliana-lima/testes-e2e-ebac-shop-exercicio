pipeline {
    agent any

    stages {
        stage('Clonar o repositório') {
            steps {
                git branch: 'main', url: 'https://github.com/Juliana-lima/testes-e2e-ebac-shop-exercicio'
            }
        }
         stage('Instalar as dependencias') {
            steps {
                bat 'npm install'
            }
        }
         stage('Executar os testes') {
            steps {
                bat 'npm run cy:run'
            }
            
        }
        
    }

}

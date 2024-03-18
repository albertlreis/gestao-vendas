#!/bin/bash

# Função para verificar se o MySQL está pronto
wait_for_mysql() {
  echo "Esperando o MySQL estar disponível..."
  until timeout 3 bash -c "echo > /dev/tcp/mysql/3306"; do
    sleep 3
  done
  echo "MySQL está pronto!"
}

# Função para executar as migrações do Sequelize
run_migrations() {
  echo "Executando migrações do Sequelize..."
  npx sequelize-cli db:migrate
  echo "Migrações concluídas!"
}

# Executar as funções na ordem desejada
wait_for_mysql
run_migrations

# Iniciar o servidor
npm start

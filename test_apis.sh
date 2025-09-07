#!/bin/bash

echo "🧪 Testando APIs do Backend - Loja Maçônica Eliphas Levi"
echo "========================================================="

BASE_URL="http://localhost:3001"

echo -e "\n1. 🏥 Health Check"
curl -X GET $BASE_URL/health
echo -e "\n"

echo -e "\n2. 📋 Conteúdos Públicos"
curl -X GET $BASE_URL/api/public/contents
echo -e "\n"

echo -e "\n3. 📂 Categorias Públicas"
curl -X GET $BASE_URL/api/public/categories
echo -e "\n"

echo -e "\n4. 📝 Registro de Usuário"
curl -X POST $BASE_URL/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "João da Silva",
    "email": "joao@teste.com",
    "password": "123456"
  }'
echo -e "\n"

echo -e "\n5. 🔐 Login de Usuário"
curl -X POST $BASE_URL/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "joao@teste.com",
    "password": "123456"
  }'
echo -e "\n"

echo -e "\n6. 🏛️ Teste de Autenticação Maçon (sem senha configurada)"
curl -X POST $BASE_URL/api/mason/auth \
  -H "Content-Type: application/json" \
  -d '{
    "password": "senha_teste"
  }'
echo -e "\n"

echo -e "\n✅ Testes concluídos!"

/**
 * config.js - Configurações do quiz
 * 
 * Este arquivo contém as configurações personalizáveis do quiz.
 * Altere estas configurações para adaptar o quiz à sua matéria.
 */

// Configuração do quiz
const quizConfig = {
    // Título principal que aparece na tela de login
    title: "Quiz Farmaco",
    
    // Nome do localStorage para salvar os dados do usuário
    storageKey: "quizFarmaco",
    
    // Lista de módulos disponíveis
    // O nome do arquivo deve corresponder ao valor em 'file' (sem a extensão .json)
    modules: [
        {
            id: "aiesaines",
            name: "AIES e AINES",
            file: "questoes_AIESeAINES"
        },
        {
            id: "anestesicosgerais",
            name: "Anestésicos Gerais",
            file: "questoes_anestesicosgerais"
        },
        {
        id: "anestesicoslocais",
        name: "Anestésicos Locais",
        file: "questoes_anestesicoslocais"
          },
          {
        id: "antipsicoticos",
        name: "Antipsicóticos",
        file: "questoes_antipsicoticos"
          },
          {
        id: "opioides",
        name: "Opióides",
        file: "questoes_opioides"
          },
        {
            id: "aines2",
            name:"AINES e AIES 2",
            file: "questoes_AINES2"
        },
        // Adicione mais módulos conforme necessário
    ]
};

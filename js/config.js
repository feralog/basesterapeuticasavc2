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
        {
            id: "opioides2",
            name: "Opioides 2",
            file: "questoes_opioides2"
        },
        {
            id: "antipsicoticos2",
            name: "Antipsicóticos 2",
            file: "questoes_antipsicoticos2"
        },
        {
            id: "anestesicoslocais2",
            name: "Anestésicos Locais 2",
            file: "questoes_anestesicoslocais2"
        },
        {
            id: "anestesicosgerais2",
            name: "Anestésicos Gerais 2",
            file: "questoes_anestesicosgerais2"
        },
        // Adicione mais módulos conforme necessário
    ]
};

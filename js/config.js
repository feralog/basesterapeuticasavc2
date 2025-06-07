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
    storageKey: "quizFarmaco2",
    
    // Lista de módulos disponíveis
    // O nome do arquivo deve corresponder ao valor em 'file' (sem a extensão .json)
    modules: [
        
        {
            id: "aines2",
            name:"AINES e AIES ",
            file: "questoes_AINES2"
        },
        {
            id: "opioides2",
            name: "Opioides ",
            file: "questoes_opioides2"
        },
        {
            id: "antipsicoticos2",
            name: "Antipsicóticos ",
            file: "questoes_antipsicoticos2"
        },
        {
            id: "anestesicoslocais2",
            name: "Anestésicos Locais ",
            file: "questoes_anestesicoslocais2"
        },
        {
            id: "anestesicosgerais2",
            name: "Anestésicos Gerais ",
            file: "questoes_anestesicosgerais2"
        },
{
            id: "ansioliticos",
            name: "Ansioliticos",
            file: "ansioliticos"
        },
        {
            id: "antidepressivos",
            name: "Antidepressivos",
            file: "antidepressivos"
        },
                {
            id: "antidepressivos2",
            name: "Antidepressivos 2",
            file: "antidepressivos2"
        },
{
id: "hipnoticos",
name: "Hipnoticos",
file: "hipnoticos_questoes"
},
{
id: "anticon",
name: "Anticonvulsivantes",
file: "anticonvulsivantes_questoes"
},
{
id: "antimicro",
name: "Antimicrobianos",
file: "antimicrobianos"
},
{
id: "antimicoticos",
name: "Antimicoticos",
file: "antimicoticos_questoes"
},
{
id: "antimiparasi",
name: "Antiparasitarios",
file: "antiparasitarios"
},
{
id: "antivirais",
name: "Antivirais",
file: "antivirais_questoes"
},
{
id: "quimioterapicos",
name: "Quimioterapicos",
file: "quimioterapicos"
},
        // Adicione mais módulos conforme necessário
    ]
};

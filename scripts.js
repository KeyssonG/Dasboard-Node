document.addEventListener('DOMContentLoaded', function() {
    // Dados fictícios para simular o dashboard
    const totalClientes = 1500;
    const distribuicaoClientes = {
        pessoaFisica: 800,
        pessoaJuridica: 700
    };
    const evolucaoClientes = {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        novosClientes: [100, 120, 150, 130, 200, 180]
    };
    // Novos dados para gráficos demográficos
    const distribuicaoGeografica = {
        labels: ['Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul'],
        data: [300, 200, 100, 600, 300]
    };
    const faixaEtaria = {
        labels: ['18-25', '26-35', '36-45', '46-55', '56+'],
        data: [200, 500, 400, 300, 100]
    };
    const genero = {
        labels: ['Masculino', 'Feminino', 'Outro'],
        data: [700, 750, 50]
    };

    // Atualiza o número total de clientes cadastrados
    document.getElementById('total-clientes').textContent = totalClientes;

    // Configuração do gráfico de distribuição por tipo de cliente
    const tipoClienteChart = new Chart(document.getElementById('tipoClienteChart'), {
        type: 'doughnut',
        data: {
            labels: ['Pessoa Física', 'Pessoa Jurídica'],
            datasets: [{
                label: 'Distribuição por Tipo de Cliente',
                data: [distribuicaoClientes.pessoaFisica, distribuicaoClientes.pessoaJuridica],
                backgroundColor: ['#36a2eb', '#ff6384']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                position: 'right',
                labels: {
                    boxWidth: 12,
                    fontSize: 14,
                    padding: 20
                }
            }
        }
    });

    // Configuração do gráfico de evolução de novos clientes
    const evolucaoClientesChart = new Chart(document.getElementById('evolucaoClientesChart'), {
        type: 'line',
        data: {
            labels: evolucaoClientes.labels,
            datasets: [{
                label: 'Novos Clientes',
                data: evolucaoClientes.novosClientes,
                fill: false,
                borderColor: '#4bc0c0',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Configuração do gráfico de distribuição geográfica
    const distribuicaoGeograficaChart = new Chart(document.getElementById('distribuicaoGeograficaChart'), {
        type: 'bar',
        data: {
            labels: distribuicaoGeografica.labels,
            datasets: [{
                label: 'Clientes por Região',
                data: distribuicaoGeografica.data,
                backgroundColor: '#ff9f40'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Configuração do gráfico de faixa etária
    const faixaEtariaChart = new Chart(document.getElementById('faixaEtariaChart'), {
        type: 'bar',
        data: {
            labels: faixaEtaria.labels,
            datasets: [{
                label: 'Clientes por Faixa Etária',
                data: faixaEtaria.data,
                backgroundColor: '#9966ff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Configuração do gráfico de gênero
    const generoChart = new Chart(document.getElementById('generoChart'), {
        type: 'pie',
        data: {
            labels: genero.labels,
            datasets: [{
                label: 'Distribuição por Gênero',
                data: genero.data,
                backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                position: 'right',
                labels: {
                    boxWidth: 12,
                    fontSize: 14,
                    padding: 20
                }
            }
        }
    });
});

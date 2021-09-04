var clientes = document.getElementById('chartClientes').getContext('2d')

var chart = new Chart(clientes, {
  type: 'line',
  data: {
    labels: ['jan', 'feb', 'mar', 'april', 'may', 'june', 'jul', 'aug'],
    datasets: [
      {
        label: 'clientes',
        backgroundColor: '#fff',
        borderColor: '#4f48ec',
        data: [50, 30, 20, 60, 35, 55, 90, 80, 100],
      },
    ],
  },
})

var receites = document.getElementById('chartReceitas').getContext('2d')

var chart = new Chart(receites, {
  type: 'line',
  data: {
    labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug'],

    datasets: [
      {
        label: 'Receitas',
        backgroundColor: '#fff',
        borderColor: '#38d6eb',
        data: [5000, 3000, 8500, 7000, 15000, 1000, 17000, 15000, 36000, 85000, 10000],
      },
    ],
  },
})

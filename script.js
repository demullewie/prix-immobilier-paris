// Configuration du graphique
const ctx = document.getElementById('priceChart').getContext('2d');
let priceChart;
const arrondissementSelect = document.getElementById('arrondissement');

// Données historiques par arrondissement (à remplacer par les données réelles de Brave Search)
const historicalDataByArrondissement = {
    'all': {
        labels: ['Jan 2020', 'Fév 2020', 'Mar 2020', 'Avr 2020', 'Mai 2020', 'Juin 2020', 'Juil 2020', 'Août 2020', 'Sep 2020', 'Oct 2020', 'Nov 2020', 'Déc 2020'],
        prices: [10000, 10200, 10100, 9800, 9500, 9600, 9700, 9800, 9900, 10000, 10100, 10200]
    },
    '1': {
        labels: ['Jan 2020', 'Fév 2020', 'Mar 2020', 'Avr 2020', 'Mai 2020', 'Juin 2020', 'Juil 2020', 'Août 2020', 'Sep 2020', 'Oct 2020', 'Nov 2020', 'Déc 2020'],
        prices: [12000, 12200, 12100, 11800, 11500, 11600, 11700, 11800, 11900, 12000, 12100, 12200]
    },
    '2': {
        labels: ['Jan 2020', 'Fév 2020', 'Mar 2020', 'Avr 2020', 'Mai 2020', 'Juin 2020', 'Juil 2020', 'Août 2020', 'Sep 2020', 'Oct 2020', 'Nov 2020', 'Déc 2020'],
        prices: [11000, 11200, 11100, 10800, 10500, 10600, 10700, 10800, 10900, 11000, 11100, 11200]
    },
    '3': {
        labels: ['Jan 2020', 'Fév 2020', 'Mar 2020', 'Avr 2020', 'Mai 2020', 'Juin 2020', 'Juil 2020', 'Août 2020', 'Sep 2020', 'Oct 2020', 'Nov 2020', 'Déc 2020'],
        prices: [11500, 11700, 11600, 11300, 11000, 11100, 11200, 11300, 11400, 11500, 11600, 11700]
    }
};

// Fonction pour formater les prix
function formatPrice(price) {
    return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR',
        maximumFractionDigits: 0
    }).format(price);
}

// Fonction pour calculer la variation
function calculateVariation(current, previous) {
    return ((current - previous) / previous * 100).toFixed(2);
}

// Fonction pour déterminer la tendance
function determineTrend(prices) {
    const lastThreeMonths = prices.slice(-3);
    const avg = lastThreeMonths.reduce((a, b) => a + b, 0) / 3;
    const prevAvg = prices.slice(-6, -3).reduce((a, b) => a + b, 0) / 3;
    
    if (avg > prevAvg * 1.02) return 'Hausse';
    if (avg < prevAvg * 0.98) return 'Baisse';
    return 'Stable';
}

// Fonction pour mettre à jour le graphique
function updateChart(arrondissement) {
    const data = historicalDataByArrondissement[arrondissement] || historicalDataByArrondissement['all'];
    
    if (priceChart) {
        priceChart.destroy();
    }
    
    priceChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.labels,
            datasets: [{
                label: `Prix moyen au m² - ${arrondissement === 'all' ? 'Tous les arrondissements' : arrondissement + 'ème arrondissement'}`,
                data: data.prices,
                borderColor: '#3498db',
                backgroundColor: 'rgba(52, 152, 219, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return formatPrice(context.raw);
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        callback: function(value) {
                            return formatPrice(value);
                        }
                    }
                }
            }
        }
    });
    
    updateStats(data.prices);
}

// Mise à jour des statistiques
function updateStats(prices) {
    const currentPrice = prices[prices.length - 1];
    const previousYearPrice = prices[prices.length - 13] || prices[0];
    
    document.getElementById('averagePrice').textContent = formatPrice(currentPrice);
    document.getElementById('yearlyChange').textContent = 
        calculateVariation(currentPrice, previousYearPrice) + '%';
    document.getElementById('trend').textContent = determineTrend(prices);
}

// Fonction pour rechercher les données via Brave Search
async function fetchRealEstateData() {
    try {
        const response = await fetch('https://api.search.brave.com/res/v1/web/search', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'X-Subscription-Token': 'BSAf6L9ZMRsrTZePI18WCqyjVvfeV1Y'
            }
        });
        
        const data = await response.json();
        // Traiter les données reçues de Brave Search
        // Mettre à jour historicalDataByArrondissement avec les nouvelles données
        // updateChart(arrondissementSelect.value);
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
    }
}

// Gestionnaire d'événement pour le changement d'arrondissement
arrondissementSelect.addEventListener('change', (e) => {
    updateChart(e.target.value);
});

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    updateChart('all');
    // fetchRealEstateData(); // Décommenter une fois le token API configuré
}); 
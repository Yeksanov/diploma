document.addEventListener('DOMContentLoaded', function () {
    const chartEl = document.getElementById('myChart');

    try {
        console.log("Dataset Labels:", chartEl.dataset.labels);
        console.log("Dataset Income:", chartEl.dataset.income);
        console.log("Dataset Expenses:", chartEl.dataset.expenses);

        const labels = JSON.parse(chartEl.dataset.labels);
        const dataIncome = JSON.parse(chartEl.dataset.income);
        const dataExpenses = JSON.parse(chartEl.dataset.expenses);

        const ctx = chartEl.getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Income',
                        data: dataIncome,
                        backgroundColor: 'rgba(54, 162, 235, 0.3)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 2,
                        borderRadius: 6,
                    },
                    {
                        label: 'Expenses',
                        data: dataExpenses,
                        backgroundColor: 'rgba(255, 99, 132, 0.3)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 2,
                        borderRadius: 6,
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    } catch (err) {
        console.error(" Chart error:", err);
    }
});

export const generateMockData = () => {
  const labels = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'];
  const data = Array.from({ length: labels.length }, () => Math.floor(Math.random() * 100));

  return {
    labels,
    datasets: [
      {
        label: 'Ventas',
        data,
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };
};
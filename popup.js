document.getElementById('getWeatherBtn').addEventListener('click', () => {
  const output = document.getElementById('weatherResult');
  output.textContent = "Fetching weather...";

  fetch("https://wttr.in/?format=j1")
    .then(res => res.json())
    .then(data => {
      const area = data.nearest_area[0].areaName[0].value;
      const temp = data.current_condition[0].temp_C;
      const condition = data.current_condition[0].weatherDesc[0].value;

      output.innerHTML = `
        <p><strong>${area}</strong></p>
        <p>🌡️ ${temp} °C</p>
        <p>📋 ${condition}</p>
      `;
    })
    .catch(() => {
      output.textContent = "Error fetching weather.";
    });
});

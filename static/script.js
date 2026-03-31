document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let data = {
        N: document.getElementById("N").value,
        P: document.getElementById("P").value,
        K: document.getElementById("K").value,
        temperature: document.getElementById("temperature").value,
        humidity: document.getElementById("humidity").value,
        ph: document.getElementById("ph").value,
        rainfall: document.getElementById("rainfall").value
    };

    fetch("/api/recommend-crop", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("result").innerText =
            "🌾 Recommended Crop: " + data.crop;
    });
});
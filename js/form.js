document.getElementById("form1").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const feedback = document.getElementById("feedback").value.trim();
    const country = document.getElementById("country").value;

    if (name === "" || feedback === "") {
        alert("Please fill in all fields.");
        return;
    }

    document.getElementById("submission-output").innerHTML = `
        <h3>Submission Received</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Details:</strong> ${feedback}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p>Thank you for your submission!</p>
    `;

    document.getElementById("form1").reset();
});

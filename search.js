function filterResources() {
    const search = document.getElementById("searchInput").value.toLowerCase();
    const filter = document.getElementById("filterSelect").value.toLowerCase();
    const cards = document.getElementsByClassName("resource-card");

    for (let card of cards) {
        let title = card.getElementsByTagName("h2")[0].innerText.toLowerCase();
        let desc = card.getElementsByTagName("p")[0].innerText.toLowerCase();
        let type = card.getAttribute("data-type");

        const matchesSearch = title.includes(search) || desc.includes(search);
        const matchesFilter = filter === "all" || type === filter;

        card.style.display = (matchesSearch && matchesFilter) ? "block" : "none";
    }
}

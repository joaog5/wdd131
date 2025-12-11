document.addEventListener("DOMContentLoaded", () => {

    const year = document.getElementById("year");
    const lastModified = document.getElementById("lastModified");

    if (year) year.textContent = new Date().getFullYear();
    if (lastModified) lastModified.textContent = document.lastModified;

    const ratingForm = document.getElementById("ratingForm");
    const statsSummary = document.getElementById("statsSummary");
    const modal = document.getElementById("modal");
    const modalBody = document.getElementById("modalBody");
    const openPopup = document.getElementById("openPopup");
    const closeModalBtn = document.getElementById("closeModal");
    const closeModalX = document.querySelector(".modal-close");
    const viewStatsBtn = document.getElementById("viewStats");
    const stars = document.querySelectorAll(".star");

    function getReviews() {
        return JSON.parse(localStorage.getItem("dudas_reviews")) || [];
    }

    function saveReviews(list) {
        localStorage.setItem("dudas_reviews", JSON.stringify(list));
    }

    function renderStats() {
        if (!statsSummary) return;
        const list = getReviews();
        if (!list.length) {
            statsSummary.innerHTML = "<p>No reviews yet.</p>";
            return;
        }
        const total = list.length;
        const average = (list.reduce((sum, r) => sum + r.rating, 0) / total).toFixed(2);
        statsSummary.innerHTML = `
            <p>Total reviews: ${total}</p>
            <p>Average rating: ${average}/5</p>
        `;
    }

    function showModal(html) {
        if (!modal) return;
        modalBody.innerHTML = html;
        modal.setAttribute("aria-hidden", "false");
    }

    function hideModal() {
        if (!modal) return;
        modal.setAttribute("aria-hidden", "true");
    }

    stars.forEach((star, index) => {
        star.addEventListener("click", () => {
            stars.forEach((s, i) => s.classList.toggle("active", i <= index));
        });
    });

    if (ratingForm) {
        ratingForm.addEventListener("submit", e => {
            e.preventDefault();

            const data = new FormData(ratingForm);
            const product = data.get("product");
            const rating = Number(data.get("rating"));
            const name = data.get("name") || "Anonymous";
            const comment = data.get("comment");

            if (!product || !rating || !comment) return;

            const list = getReviews();
            list.push({
                product,
                rating,
                name,
                comment,
                date: new Date().toISOString()
            });

            saveReviews(list);
            renderStats();

            showModal(`
                <p><strong>Product:</strong> ${product}</p>
                <p><strong>Rating:</strong> ${rating}/5</p>
                <p><strong>Comment:</strong> ${comment}</p>
                <p><strong>Name:</strong> ${name}</p>
            `);

            ratingForm.reset();
            stars.forEach(s => s.classList.remove("active"));
        });
    }

    if (openPopup) {
        openPopup.addEventListener("click", () => {
            const list = getReviews();
            if (!list.length) return;
            const last = list[list.length - 1];
            const average = (list.reduce((sum, r) => sum + r.rating, 0) / list.length).toFixed(2);
            const popup = window.open("", "reviewPopup", "width=450,height=500");
            if (!popup) return;
            popup.document.write(`
                <h2>Review Summary</h2>
                <p>Product: ${last.product}</p>
                <p>Rating: ${last.rating}/5</p>
                <p>Comment: ${last.comment}</p>
                <p>Average rating: ${average}/5</p>
                <button onclick="window.close()">Close</button>
            `);
            popup.document.close();
        });
    }

    if (viewStatsBtn) {
        viewStatsBtn.addEventListener("click", renderStats);
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", hideModal);
    }

    if (closeModalX) {
        closeModalX.addEventListener("click", hideModal);
    }

    if (modal) {
        modal.addEventListener("click", e => {
            if (e.target === modal) hideModal();
        });
    }

    renderStats();
});
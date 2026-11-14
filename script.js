const searchInput = document.getElementById("tool-search");
const toolList = document.getElementById("tool-list");
const resultCount = document.getElementById("result-count");
const noResults = document.getElementById("no-results");
const clearSearchButton = document.getElementById("clear-search");

if (searchInput && toolList && resultCount && noResults && clearSearchButton) {
	const toolCards = Array.from(toolList.querySelectorAll(".tool-card"));

	function normalizeText(text) {
		return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().toLowerCase();
	}

	function updateResults() {
		const query = normalizeText(searchInput.value);
		let visibleCount = 0;

		toolCards.forEach((card) => {
			// Eşleşme sadece kartın h2 başlığında aranır; diğer metinler kullanılmaz.
			const title = normalizeText(card.querySelector("h2")?.textContent ?? "");
			const matches = title.includes(query);

			card.hidden = !matches;
			if (matches) {
				visibleCount += 1;
			}
		});

		resultCount.textContent = `Gösterilen araç sayısı: ${visibleCount}`;
		noResults.hidden = visibleCount !== 0;
	}

	// input olayı, kullanıcı yazarken filtreyi anında günceller.
	searchInput.addEventListener("input", updateResults);

	// Temizle, arama alanını sıfırlar ve tüm kartları yeniden gösterir.
	clearSearchButton.addEventListener("click", () => {
		searchInput.value = "";
		updateResults();
	});

	// İlk yüklemede görünür kart sayısını ve boş sonuç durumunu eşitler.
	updateResults();
}

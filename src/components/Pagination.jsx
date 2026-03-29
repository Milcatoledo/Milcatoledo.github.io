import '../styles/pagination.css';

function buildPageWindow(page, totalPages, windowSize) {
    const half = Math.floor(windowSize / 2);
    let start = Math.max(1, page - half);
    let end = Math.min(totalPages, start + windowSize - 1);

    if (end - start + 1 < windowSize) {
        start = Math.max(1, end - windowSize + 1);
    }

    const pages = [];
    for (let i = start; i <= end; i += 1) {
        pages.push(i);
    }

    return pages;
}

export function PaginationControl({ page, totalPages, onPageChange }) {
    const pages = buildPageWindow(page, totalPages, 5);
    const goTo = (nextPage) => {
        const safePage = Math.min(Math.max(1, nextPage), totalPages);
        onPageChange(safePage);
    };

    return (
        <nav className="pagination-control" aria-label="Paginacion">
            <button type="button" className="pagination-control__btn" onClick={() => goTo(1)} disabled={page === 1}>«</button>
            <button type="button" className="pagination-control__btn" onClick={() => goTo(page - 1)} disabled={page === 1}>‹</button>
            {pages.map(p => (
                <button
                    key={p} type="button" 
                    className={p === page ? 'pagination-control__page pagination-control__page--active' : 'pagination-control__page'}
                    onClick={() => goTo(p)}
                >
                    {p}
                </button>
            ))}
            <button type="button" className="pagination-control__btn" onClick={() => goTo(page + 1)} disabled={page === totalPages}>›</button>
            <button type="button" className="pagination-control__btn" onClick={() => goTo(totalPages)} disabled={page === totalPages}>»</button>
            <span className="pagination-control__meta">Página {page} de {totalPages}</span>
        </nav>
    );
}
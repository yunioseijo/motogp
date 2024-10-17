document.getElementById('csvFileInput').addEventListener('change', handleFileSelect, false);

function handleFileSelect(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        const text = e.target.result;
        processCSV(text);
    };
    reader.readAsText(file);
}

function processCSV(text) {
    const lines = text.split('\n');
    const headers = lines[0].split(',');

    const tableHeader = document.getElementById('tableHeader');
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        tableHeader.appendChild(th);
    });

    const tableBody = document.getElementById('tableBody');
    lines.slice(1).forEach(line => {
        const row = document.createElement('tr');
        const cells = line.split(',');
        cells.forEach(cell => {
            const td = document.createElement('td');
            td.textContent = cell;
            row.appendChild(td);
        });
        tableBody.appendChild(row);
    });
}

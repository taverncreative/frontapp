
// JavaScript
const dataContainer = document.getElementById("csv-data");
let counter = 0;

fetch("https://raw.githubusercontent.com/taverncreative/frontapp/data.csv")

  .then(response => response.text())
  .then(data => {
    const rows = data.split("\n");
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const cells = row.split(",");
      const rowElement = document.createElement("div");
      const headingElement = document.createElement("h2");
      const paragraphElement = document.createElement("p");
      headingElement.innerHTML = cells[0];
      paragraphElement.innerHTML = cells[1];
      rowElement.appendChild(headingElement);
      rowElement.appendChild(paragraphElement);
      rowElement.addEventListener("click", () => {
        counter++;
        const nextCells = rows[counter].split(",");
        headingElement.innerHTML = nextCells[0];
        paragraphElement.innerHTML = nextCells[1];
      });
      dataContainer.appendChild(rowElement);
    }
  });

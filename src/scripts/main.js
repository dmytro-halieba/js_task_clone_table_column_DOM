/* eslint-disable max-len */

'use strict';

function createCell(tag, text) {
  const cell = document.createElement(tag);

  cell.textContent = text;

  return cell;
}

function doubleUpColumn(columnName, pasteIndex) {
  const headersArray = Array.from(document.querySelectorAll('thead th'));

  const columnNamePosition = headersArray.findIndex(
    (th) => th.textContent === columnName,
  );

  if (columnNamePosition === -1) {
    return `There are no column named ${columnName} in the table`;
  }

  const header = document.querySelector('thead tr');
  const footer = document.querySelector('tfoot tr');
  const body = document.querySelectorAll('tbody tr');

  header.insertBefore(
    createCell('th', columnName),
    header.children[pasteIndex],
  );

  footer.insertBefore(
    createCell('th', columnName),
    footer.children[pasteIndex],
  );

  body.forEach((row) => {
    const cellContent =
      row.getElementsByTagName('td')[columnNamePosition].textContent;

    const newCell = document.createElement('td');

    newCell.textContent = cellContent;

    row.insertBefore(newCell, row.children[pasteIndex]);
  });
}

doubleUpColumn('Position', 4);

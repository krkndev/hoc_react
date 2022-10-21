export const selectSearch = (data) => {
  const table = document.getElementById('myTable');
  const rows = table.getElementsByTagName('tr');
  let rowText;
  //gets individual selected values
  const unique = data.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
  // returns an array of selected values by columns
  const selectValues = unique.map((element) =>
    typeof element.value === String ? element.value : element.value.toString(),
  );
  // console.log('selectValues :>> ', selectValues);
  // loops to match selected values
  for (let i = 1; i < rows.length; i++) {
    // limit to cell ***********
    let rowData = rows[i];
    rowText = rowData.innerText;
    // console.log('rowText :>> ', rowText);
    rowText.indexOf(selectValues) > -1 // try match to string **********
      ? (rowData.style.display = '')
      : (rowData.style.display = 'none');
  }
};

export const getUniqueOptions = (haystack) => {
  const unique = haystack.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
  return unique.map((element) => ({ value: element, label: element }));
};

export const searchInTable = () => {
  // Declare variables
  let td, txtValue;
  let input = document.getElementById('filterInput');
  let filter = input.value.toUpperCase();
  let table = document.getElementById('myTable');
  let tr = table.getElementsByTagName('tr');

  // Loop through all table rows, and hide those who don't match the search query
  for (let i = 0; i < tr.length; i++) {
    if (td !== false) {
      td = tr[i].getElementsByTagName('td')[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = '';
        } else {
          tr[i].style.display = 'none';
        }
      }
    }
  }
};

export const sortTable = (n) => {
  let x,
    i,
    y,
    shouldSwitch,
    switchcount = 0;
  let table = document.getElementById('myTable');
  let switching = true;
  let dir = 'asc';

  while (switching) {
    switching = false;
    let rows = table.rows;
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName('TD')[n];
      y = rows[i + 1].getElementsByTagName('TD')[n];
      if (dir === 'asc') {
        if (
          x.innerHTML.toString().toLowerCase() >
          y.innerHTML.toString().toLowerCase()
        ) {
          shouldSwitch = true;
          break;
        }
      } else if (dir === 'desc') {
        if (
          x.innerHTML.toString().toLowerCase() <
          y.innerHTML.toString().toLowerCase()
        ) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount++;
    } else {
      if (switchcount === 0 && dir === 'asc') {
        dir = 'desc';
        switching = true;
      }
    }
  }
};

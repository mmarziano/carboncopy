// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery
//= require bootstrap-sprockets
//= require_tree .


window.addEventListener('DOMContentLoaded', (event) => {
    attachListeners();
});

function attachListeners() {
    let quickStart = document.querySelector('#start-button');
    quickStart.addEventListener('click', function(item) {
       startReceipt();
    })
    let search = document.querySelector('#submit-search');
    search.addEventListener('click', function(e) {
       e.preventDefault();
       getOrganizations();
    })

}

function startReceipt() {
   let flipcard = document.querySelector('.flip-card')
   flipcard.classList.add('hidden');
   let orgSearch = document.querySelector('#org-search');
    orgSearch.classList.remove('hidden');
    orgSearch.classList.add('show');
}

function searchResults(data) {
    let div = document.querySelector('#search-results');
    let orgs = [];
    data.map((item) => orgs.push(item));
    let query = document.querySelector('#name').value
    let result = orgs.find((item) => item.name.toLowerCase().includes(query.toLowerCase()));
    let tbl = document.createElement('table');
    tbl.setAttribute('class', 'table table-striped');
    div.appendChild(tbl);
    generateTableHead(tbl, Object.keys(result));
    generateTable(tbl, result);
    div.classList.remove('hidden')
}

function getOrganizations() {
    let url = 'http://localhost:3000/organizations';
    return fetch(url)
    .then(response => response.json())
    .then(json => searchResults(json))
}

function generateTableHead(tbl, data) {
    let thead = tbl.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }

  function generateTable(table, data) {
      let row = table.insertRow();
      for (key in data) {
        let cell = row.insertCell();
        let text = document.createTextNode(data[key]);
        cell.appendChild(text);
      }
  }

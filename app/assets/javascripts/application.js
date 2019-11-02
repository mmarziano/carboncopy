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
    quickStart.addEventListener('click', function(e) {
        e.preventDefault();
        startReceipt();
    })
    let search = document.querySelector('#submit-search');
    search.addEventListener('click', function(e) {
       e.preventDefault();
       let div = document.querySelector('#search-results');
       div.innerHTML = "";
       getOrganizations();
    })
    let reset = document.querySelector('#reset');
    reset.addEventListener('click', function(e){
        e.preventDefault();
        restartReceipt();
    })

}

function startReceipt() {
    let flipcard = document.querySelector('.flip-card')
    flipcard.classList.add('hidden');
    let reset = document.querySelector('#reset');
    reset.classList.remove('hidden');
    let orgSearch = document.querySelector('#org-search');
    orgSearch.classList.remove('hidden');
    orgSearch.classList.add('show');
    
}

function restartReceipt() {
    let flipcard = document.querySelector('.flip-card')
    flipcard.classList.add('hidden');
    let reset = document.querySelector('#reset');
    reset.classList.remove('hidden');
    let orgSearch = document.querySelector('#org-search');
    orgSearch.classList.remove('hidden');
    orgSearch.classList.add('show');
    let card = document.querySelector('#card-results');
    card.classList.add('hidden');
    let query = document.querySelector('#name')
    query.value = '';
    let pin = document.querySelector('#authenticate-pin');
    pin.classList.add('hidden');
}


function searchResults(data) {
    let card = document.querySelector('#card-results');
    card.classList.remove('hidden');
    let div = document.querySelector('#search-results');
    let orgs = [];
    data.map((item) => orgs.push(item));
    let query = document.querySelector('#name').value
    let result = orgs.filter(function(item) {
        if (item.name.toLowerCase().includes(query.toLowerCase())) {
            return item;
        };    
    }); 
    let tblheadings = ['', 'Name', 'Address', 'City', 'State', 'Zipcode']
    let tbl = document.createElement('table');
    tbl.setAttribute('class', 'table table-striped');
    div.appendChild(tbl);
    generateTableHead(tbl, tblheadings);
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
      let tbody = table.appendChild(document.createElement('tbody'));
      for (let i = 0; i < data.length; i++) {
        let link = document.createElement('a');
        link.setAttribute('style', 'color: rgb(240, 8, 143)')
        link.href =  `/organizations/${data[i].id}`;
        link.innerHTML = `${data[i].name}` 
        link.addEventListener('click', function(e){
            e.preventDefault();
            authenticate(data[i]);
        });
        let row = tbody.insertRow();
        for (let key in data[i]) {
            let cell = row.insertCell();
            if (key !== 'id' && key !== 'name') {
                let text = document.createTextNode(data[i][key]);
                cell.appendChild(text);
            } 
            if (key === 'name' & key !== 'id') {
                cell.appendChild(link);
            }
        };
      };
  };

  function authenticate(data) {
    let card = document.querySelector('#card-results');
    card.classList.add('hidden');
    let header = document.createElement('h3');
    header.innerHTML = data.name;
    let orgSearch = document.querySelector('#org-search');
    orgSearch.classList.add('hidden');
    let div = document.querySelector('#search-results');
    div.classList.add('hidden');
    let pin = document.querySelector('#authenticate-pin');
        pin.classList.remove('hidden');
        pin.classList.add('show');
        pin.appendChild(header)

  }

  
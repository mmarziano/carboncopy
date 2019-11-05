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

let step = 0;

window.addEventListener('DOMContentLoaded', (event) => {
    attachListeners();
    hideError();
});

function attachListeners() {
    let quickStart = document.querySelector('#start-button');
    quickStart.addEventListener('click', function(e) {
        e.preventDefault();
        start();
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
        restart();
    })
    let newOrg = document.querySelector('#create_new');
    newOrg.addEventListener('click', function(e){
        e.preventDefault();
        createOrganization();
    })
    
}

function showCard() {
    let flipcard = document.querySelector('.flip-card')
    flipcard.classList.remove('hidden');
}

function hideCard() {
    let flipcard = document.querySelector('.flip-card')
    flipcard.classList.add('hidden');
}

function hideSearch() {
    let orgSearch = document.querySelector('#org-search');
    orgSearch.classList.add('hidden');
}

function showSearch() {
    let orgSearch = document.querySelector('#org-search');
    orgSearch.classList.remove('hidden');
}

function hideCreateOrgForm() {
    let newOrg = document.querySelector('#create_new');
    newOrg.classList.add('hidden');
}

function showCreateOrgForm() {
    let newOrg = document.querySelector('#create_new');
    newOrg.classList.remove('hidden');
}

function hideResetLink() {
    let reset = document.querySelector('#reset');
    reset.classList.add('hidden');
}

function showResetLink() {
    let reset = document.querySelector('#reset');
    reset.classList.remove('hidden');
}

function showError(){
    let error = document.querySelector('#error');
    error.classList.remove('hidden');
}

function hideError(){
        let error = document.querySelector('#error');
        error.classList.add('hidden');
}

function hidePin() {
    let pin = document.querySelector('#authenticate-pin');
    pin.classList.add('hidden');
}

function showPin() {
    let pin = document.querySelector('#authenticate-pin');
    pin.classList.remove('hidden');
}

function hideResults() {
    let card = document.querySelector('#card-results');
    card.classList.add('hidden');
}

function showResults() {
    let card = document.querySelector('#card-results');
    card.classList.remove('hidden');
}

function showReceiptForm() {
    let receipt = document.querySelector('#receipt');
    receipt.classList.remove('hidden');
}

function hideReceiptForm() {
    let receipt = document.querySelector('#receipt');
    receipt.classList.add('hidden');
}

function showReceipt() {
    let receipt = document.querySelector('#receipt_form');
    receipt.classList.remove('hidden');
}

function hideReceipt() {
    let receipt = document.querySelector('#new_receipt_form');
    receipt.classList.add('hidden');
}

function hideReceiptFormElements() {
    let elements = [];
    let name = document.querySelector('#receipt_name');
    elements.push(name);
    let email = document.querySelector('#receipt_email');
    elements.push(email);
    let phone = document.querySelector('#receipt_phone');
    elements.push(phone);
    let secondName = document.querySelector('#receipt_secondary_name');
    elements.push(secondName);
    let id = document.querySelector('#receipt_secondary_id');
    elements.push(id);
    let cat1 = document.querySelector('#receipt_category_label_1');
    elements.push(cat1);
    let amt1 = document.querySelector('#receipt_category_amt_1');
    elements.push(amt1);
    let cat2 = document.querySelector('#receipt_category_label_2');
    elements.push(cat2);
    let amt2 = document.querySelector('#receipt_category_amt_2');
    elements.push(amt2);
    let cat3 = document.querySelector('#receipt_category_label_3');
    elements.push(cat3);
    let amt3 = document.querySelector('#receipt_category_amt_3');
    elements.push(amt3);
    let cat4 = document.querySelector('#receipt_category_label_4');
    elements.push(cat4);
    let amt4 = document.querySelector('#receipt_category_amt_4');
    elements.push(amt4);
    let cat5 = document.querySelector('#receipt_category_label_5');
    elements.push(cat5);
    let amt5 = document.querySelector('#receipt_category_amt_5');
    elements.push(amt5);
    let cat6 = document.querySelector('#receipt_category_label_6');
    elements.push(cat6);
    let amt6 = document.querySelector('#receipt_category_amt_6');
    elements.push(amt6);
    let cat7 = document.querySelector('#receipt_category_label_7');
    elements.push(cat7);
    let amt7 = document.querySelector('#receipt_category_amt_7');
    elements.push(amt7);
    let cat8 = document.querySelector('#receipt_category_label_8');
    elements.push(cat8);
    let amt8 = document.querySelector('#receipt_category_amt_8');
    elements.push(amt8);
    let cat9 = document.querySelector('#receipt_category_label_9');
    elements.push(cat9);
    let amt9 = document.querySelector('#receipt_category_amt_9');
    elements.push(amt9);
    let cat10 = document.querySelector('#receipt_category_label_10');
    elements.push(cat10);
    let amt10 = document.querySelector('#receipt_category_amt_10');
    elements.push(amt10);
    let method = document.querySelector('#receipt_payment_method');
    elements.push(method);
    let methodNote = document.querySelector('#receipt_payment_method_note');
    elements.push(methodNote);
    let notes = document.querySelector('#receipt_notes');
    elements.push(notes);
    let receivedBy = document.querySelector('#receipt_received_by');
    elements.push(receivedBy);
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add('hidden');
    }
    return elements;
}

function start() {
    hideCard();
    showResetLink();
    showCreateOrgForm();
    showSearch();
    hideError();
}

function restart() {
    hideCard();
    let form = document.querySelector('#create_org');
    form.classList.add('hidden');
    showResetLink();
    showCreateOrgForm();
    showSearch();
    hideResults();
    hideError();
    let query = document.querySelector('#name')
    query.value = '';
    let selected = document.querySelector('#selected');
    selected.remove();
    hidePin();
}


function searchResults(data) {
    showResults();
    let div = document.querySelector('#search-results');
    let orgs = [];
    data.map((item) => orgs.push(item));
    let query = document.querySelector('#name').value
    let result = orgs.filter(function(item) {
        if (item.name.toLowerCase().includes(query.toLowerCase())) {
            return item;
        } 
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

function createOrganization(){
    hidePin();
    hideSearch();
    let form = document.querySelector('#create_org');
    form.classList.remove('hidden');
    let url = 'http://localhost:3000/organizations';
        options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: new FormData(document.querySelector('#create_org_form'))
        }
        return fetch(url, options)
        .then(response => response.json())
        .then(info => console.log(info)) 
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
            if (key !== 'id' && key !== 'name' && key !== 'pin') {
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
    showPin();
    hideResults();
    let header = document.createElement('h4');
        header.setAttribute('id', 'selected');
        header.innerHTML = data.name;
    hideSearch();
    let pin = document.querySelector('#authenticate-pin'); 
    pin.appendChild(header);
    let orgPin = () => data.pin;
    let orgId = document.querySelector('#organization_id');
        orgId.value = data.id;
    let org = () => data;    
    let submitPin = document.querySelector('#submit-pin');
    submitPin.addEventListener('click', function(e){
        e.preventDefault();
        let userPin = document.querySelector('#pin').value;
        if (orgPin() === userPin.toString()) {
            startReceipt(org());
        } else {
            alert("Wrong!")
        }
    }); 
  }

  function startReceipt(org, step) {
    let receipt = {};
    showReceiptForm();   
    hideCard();
    hidePin();
    hideResetLink();
    hideCreateOrgForm();
    hideSearch();  
    hideError();
    let elements = hideReceiptFormElements();
    let name = document.querySelector('#receipt_name');
    name.classList.remove('hidden');
    step = 0;
    let next = document.querySelector('#next');
    next.classList.remove('hidden');
    next.addEventListener('click', function(e){
        e.preventDefault();
        receipt.name = name.value;
        let elements = hideReceiptFormElements();
        displayNext(elements[step+1]);
        step++;
    })
    let previous = document.querySelector('#previous');
    previous.classList.remove('hidden');
    previous.addEventListener('click', function(e){
        e.preventDefault();
        receipt.name = name.value;
        let elements = hideReceiptFormElements();
        displayPrevious(elements[step-1]);
        step--;
    })
  }

  function displayNext(element) {
      element.classList.remove('hidden')
  }

  function displayPrevious(element) {
    element.classList.remove('hidden')
}

class  Receipt {
    constructor(obj) {
        this.name = obj.name;
        this.email = obj.email;
        this.phone = obj.phone;
        this.secondName = obj.secondName;
        this.accountId = obj.accountId;
        this.cat1 = obj.cat1;
        this.amt1 = obj.amt1;
        this.cat2 = obj.cat2;
        this.amt2 = obj.amt2;
        this.cat3 = obj.cat3;
        this.amt3 = obj.amt3;
        this.cat4 = obj.cat4;
        this.amt4 = obj.amt4;
        this.cat5 = obj.cat5;
        this.amt5 = obj.amt5;
        this.cat6 = obj.cat6;
        this.amt6 = obj.amt6;
        this.cat7 = obj.cat7;
        this.amt7 = obj.amt7;
        this.cat8 = obj.cat8;
        this.amt8 = obj.amt8;
        this.cat9 = obj.cat9;
        this.amt9 = obj.amt9;
        this.cat10 = obj.cat10;
        this.amt10 = obj.amt10;
        this.paymentMethod = obj.paymentMethod;
        this.paymentMethodNotes = obj.paymentMethodNotes;
        this.notes = obj.notes;
        this.receivedBy = obj.receivedBy;
    }

}
  function createReceiptObject(val) {
        console.log(val)
  }




  
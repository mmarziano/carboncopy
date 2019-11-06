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
let receipt = {};

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


function showReceiptTypeChoice() {
    let div = document.querySelector('#choice');
    div.classList.remove('hidden');
}

function hideReceiptTypeChoice() {
    let div = document.querySelector('#choice');
    div.classList.add('hidden');
}

function hideOneCategoryReceiptFormElements() {
    let elements = [];
    let name = document.querySelector('#name-group');
    elements.push(name);
    let email = document.querySelector('#email-group');
    elements.push(email);
    let phone = document.querySelector('#phone-group');
    elements.push(phone);
    let secondName = document.querySelector('#secondary-name-group');
    elements.push(secondName);
    let id = document.querySelector('#secondary-id-group');
    elements.push(id);
    let cat1 = document.querySelector('#category-label-1-group');
    elements.push(cat1);
    let amt1 = document.querySelector('#category-amt-1-group');
    elements.push(amt1);
    let method = document.querySelector('#payment-method-group');
    elements.push(method);
    let methodNote = document.querySelector('#payment-method-note-group');
    elements.push(methodNote);
    let notes = document.querySelector('#notes-group');
    elements.push(notes);
    let receivedBy = document.querySelector('#received-by-group');
    elements.push(receivedBy);
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add('hidden');
    }
    return elements;
}

function hideMultiCategoryReceiptFormElements() {
    let elements = [];
    let name = document.querySelector('#name-group');
    elements.push(name);
    let email = document.querySelector('#email-group');
    elements.push(email);
    let phone = document.querySelector('#phone-group');
    elements.push(phone);
    let secondName = document.querySelector('#secondary-name-group');
    elements.push(secondName);
    let id = document.querySelector('#secondary-id-group');
    elements.push(id);
    let cat1 = document.querySelector('#category-label-1-group');
    elements.push(cat1);
    let amt1 = document.querySelector('#category-amt-1-group');
    elements.push(amt1);
    let cat2 = document.querySelector('#category-label-2-group');
    elements.push(cat2);
    let amt2 = document.querySelector('#category-amt-2-group');
    elements.push(amt2);
    let cat3 = document.querySelector('#category-label-3-group');
    elements.push(cat3);
    let amt3 = document.querySelector('#category-amt-3-group');
    elements.push(amt3);
    let cat4 = document.querySelector('#category-label-4-group');
    elements.push(cat4);
    let amt4 = document.querySelector('#category-amt-4-group');
    elements.push(amt4);
    let cat5 = document.querySelector('#category-label-5-group');
    elements.push(cat5);
    let amt5 = document.querySelector('#category-amt-5-group');
    elements.push(amt5);
    let cat6 = document.querySelector('#category-label-6-group');
    elements.push(cat6);
    let amt6 = document.querySelector('#category-amt-6-group');
    elements.push(amt6);
    let cat7 = document.querySelector('#category-label-7-group');
    elements.push(cat7);
    let amt7 = document.querySelector('#category-amt-7-group');
    elements.push(amt7);
    let cat8 = document.querySelector('#category-label-8-group');
    elements.push(cat8);
    let amt8 = document.querySelector('#category-amt-8-group');
    elements.push(amt8);
    let cat9 = document.querySelector('#category-label-9-group');
    elements.push(cat9);
    let amt9 = document.querySelector('#category-amt-9-group');
    elements.push(amt9);
    let cat10 = document.querySelector('#category-label-10-group');
    elements.push(cat10);
    let amt10 = document.querySelector('#category-amt-10-group');
    elements.push(amt10);
    let method = document.querySelector('#payment-method-group');
    elements.push(method);
    let methodNote = document.querySelector('#payment-method-note-group');
    elements.push(methodNote);
    let notes = document.querySelector('#notes-group');
    elements.push(notes);
    let receivedBy = document.querySelector('#received-by-group');
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
            selectType(org());
        } else {
            alert("Wrong!")
        }
    }); 
  }

  function selectType(org) {
    hideCard();
    hidePin();
    hideResetLink();
    hideCreateOrgForm();
    hideSearch();  
    hideError();
    showReceiptTypeChoice();
    let single = document.querySelector('#single-category');
    single.addEventListener('click', function(e){
        e.preventDefault();
        hideOneCategoryReceiptFormElements();
        startSingleReceipt(org);
    });
    let multiple = document.querySelector('#multiple-category');
    multiple.addEventListener('click', function(e){
        e.preventDefault();
        startMultipleReceipt(org);
    });
  }

  function startSingleReceipt(org) {
    hideReceiptTypeChoice();  
    let receipt = {};
    showReceiptForm();   
    hideCard();
    hidePin();
    hideResetLink();
    hideCreateOrgForm();
    hideSearch();  
    hideError();
    let name = document.querySelector('#name-group');
    name.classList.remove('hidden');
    step = 0;
    let next = document.querySelector('#next');
    next.classList.remove('hidden');
    let previous = document.querySelector('#previous');
    previous.classList.remove('hidden');
    next.addEventListener('click', function(e){
        e.preventDefault();
        if (step > 9) {
            let button = document.querySelector('#create_receipt_submit');
            let next = document.querySelector('#next');
            next.classList.add('hidden')
            button.classList.remove('hidden')
        } else {
            previous.classList.remove('hidden'); 
            let elements = hideOneCategoryReceiptFormElements();
            let key = elements[step].getAttribute('id').split('_').slice(1).join('_');
            receipt[`${key}`] = elements[step].value;
            elements[step+1].classList.remove('hidden')
            step++;
        }
    })
    previous.addEventListener('click', function(e){
        e.preventDefault();
        if (step < 0) {
            previous.classList.add('hidden');
            step = 0;    
        } else if (step > 9) {
            let button = document.querySelector('#create_receipt_submit');
            let next = document.querySelector('#next');
            next.classList.remove('hidden')
            button.classList.add('hidden')
            step--;
        } else {
            previous.classList.remove('hidden'); 
            let elements = hideOneCategoryReceiptFormElements();
            elements[step].classList.remove('hidden')
            step--;
        }  
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
        this.secondary_name = obj.secondary_name;
        this.secondary_id = obj.secondary_id;
        this.category_label_1 = obj.category_label_1;
        this.category_amt_1 = obj.category_amt_1;
        this.category_label_2 = obj.category_label_2;
        this.category_amt_2 = obj.category_amt_2;
        this.category_label_3 = obj.category_label_3;
        this.category_amt_3 = obj.category_amt_3;
        this.category_label_4 = obj.category_label_4;
        this.category_amt_4 = obj.category_amt_4;
        this.category_label_5 = obj.category_label_5;
        this.category_amt_5 = obj.category_amt_5;
        this.category_label_6 = obj.category_label_6;
        this.category_amt_6 = obj.category_amt_6;
        this.category_label_7 = obj.category_label_7;
        this.category_amt_7 = obj.category_amt_7;
        this.category_label_8 = obj.category_label_8;
        this.category_amt_8 = obj.category_amt_8;
        this.category_label_9 = obj.category_label_9;
        this.category_amt_9 = obj.category_amt_9;
        this.category_label_10 = obj.category_label_10;
        this.category_amt_10 = obj.category_amt_10;
        this.payment_method = obj.payment_method;
        this.payment_method_note = obj.payment_method_note;
        this.notes = obj.notes;
        this.received_by = obj.received_by;
    }

}
  function createReceiptObject(val) {
        console.log(val)
  }




  
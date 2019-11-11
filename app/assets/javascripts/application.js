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
});

function attachListeners() {
    let quickStart = document.querySelector('#start-button');
    quickStart.addEventListener('click', function(e) {
        e.preventDefault();
        start();
        clearError();
        hideError();
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

};

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

function clearError(){
    let error = document.querySelector('#error');
    error.innerHTML = '';
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

function showNext() {
    let next = document.querySelector('#next');
    next.classList.remove('hidden');
}

function hideNext() {
    let next = document.querySelector('#next');
    next.classList.add('hidden');
}

function showPrevious() {
    let previous = document.querySelector('#previous');
    previous.classList.remove('hidden');
}

function hidePrevious() {
    let previous = document.querySelector('#previous');
    previous.classList.add('hidden');
}

function showNextMultiple() {
    let next = document.querySelector('#next-multiple');
    next.classList.remove('hidden');
}

function hideNextMultiple() {
    let next = document.querySelector('#next-multiple');
    next.classList.add('hidden');
}

function showPreviousMultiple() {
    let previous = document.querySelector('#previous-multiple');
    previous.classList.remove('hidden');
}

function hidePreviousMultiple() {
    let previous = document.querySelector('#previous-multiple');
    previous.classList.add('hidden');
}

function showSaveReceipt() {
    let div = document.querySelector('#save-receipt');
    div.classList.remove('hidden');
}

function hideSaveReceipt() {
    let div = document.querySelector('#save-receipt');
    div.classList.add('hidden');
}


function showReceiptTypeChoice() {
    let div = document.querySelector('#choice');
    div.classList.remove('hidden');
}

function hideReceiptTypeChoice() {
    let div = document.querySelector('#choice');
    div.classList.add('hidden');
}

function showResetReceipt(input, receipt) {
    let org = () => input;
    let reset = document.querySelector('#reset-receipt');
    reset.classList.remove('hidden');
    reset.addEventListener('click', function(e) {
        e.preventDefault();
        hideNext();
        hidePrevious();
        hideNextMultiple();
        hidePreviousMultiple();
        resetStep();
        selectType(org());  
    })
 
}

function hideResetReceipt() {
    let reset = document.querySelector('#reset-receipt');
    reset.classList.add('hidden');
}

function hideOneCategoryReceiptFormElements() {
    let elements = [];
    let organization = document.querySelector('#organization-group');
    elements.push(organization);
    let date = document.querySelector('#date-group');
    elements.push(date);
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
    for (i = 0; i < elements.length; i++) {
        elements[i].classList.add('hidden')
    }
    return elements;
}

function showOneCategoryReceiptFormElements() {
    let elements = [];
    let organization = document.querySelector('#organization-group');
    elements.push(organization);
    let date = document.querySelector('#date-group');
    elements.push(date);
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
    for (i = 0; i < elements.length; i++) {
        elements[i].classList.remove('hidden')
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
        .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              showError();
            }
        })   
        .then(info => console.log(info))
        .catch((error) => {
            console.log(error)
          }); 
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
            startSingleReceipt(org());
        } else {
            alert("Sorry! Pin does not match. Please try again.")
        }
    }); 

  }

  function resetStep() {
      step = 0;
      return step;
  }

  function startSingleReceipt(org) {  
    let receipt = {};
    let getReceipt = () => {return receipt};
    showReceiptForm();   
    hideCard();
    hidePin();
    hideResetLink();
    hideCreateOrgForm();
    hideSearch();  
    hideError();
    hideSaveReceipt();
    showResetReceipt(org, receipt);
    let step = 2;

    let organization = document.querySelector('#receipt_organization_id');
    organization.value = org.id;
    receipt.organization_id = org.id;
    let date = document.querySelector('#receipt_receipt_date');
    date.value = new Date(Date.now()).toLocaleString();
    let name = document.querySelector('#name-group');
    name.classList.remove('hidden');
    let next = document.querySelector('#next');
    next.classList.remove('hidden');
    let previous = document.querySelector('#previous');
    previous.classList.remove('hidden');
    next.addEventListener('click', function(e){
        e.preventDefault();
        if (step > 12) {
            let button = document.querySelector('#create_receipt_submit');
            let next = document.querySelector('#next');
            next.classList.add('hidden');
            button.classList.remove('hidden');
        } else {
            previous.classList.remove('hidden'); 
            let elements = hideOneCategoryReceiptFormElements();
            let k = elements[step].getAttribute('id').split('-');
            k.pop();
            let key = k.join('_')
            receipt[`${key}`] = elements[step].children[1].value;
            if (step !== 12) {
                elements[step+1].classList.remove('hidden')
                step++;
            } else {
                let button = document.querySelector('#create_receipt_submit');
                let next = document.querySelector('#next');
                next.classList.add('hidden')
                button.classList.remove('hidden')
            }    
        }
    })
    previous.addEventListener('click', function(e){
        e.preventDefault();
        if (step < 0) {
            previous.classList.add('hidden');
            step = 0;    
        } else if (step > 11) {
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
    let button = document.querySelector('#create_receipt_submit');
    button.addEventListener('click', function(e){
        e.preventDefault();
        showOneCategoryReceiptFormElements();
        button.classList.add('hidden');
        showSaveReceipt(receipt);
        let save = document.querySelector('#save-receipt');
        save.addEventListener('click', function(e){
            viewReceipt(org, receipt);
        })
    });

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
        this.payment_method = obj.payment_method;
        this.payment_method_note = obj.payment_method_note;
        this.notes = obj.notes;
        this.received_by = obj.received_by;
        this.receipt_date = obj.receipt_date;
    }
}

class  Organization {
    constructor(obj) {
        this.name = obj.name;
        this.address = obj.address;
        this.audit_email = obj.audit_email;
        this.billing_email = obj.billing_email;
        this.id = obj.id;
        this.city = obj.city;
        this.phone = obj.phone;
        this.pin = obj.pin;
        this.state = obj.state;
        this.zipcode = obj.zipcode;
    }
}

  function viewReceipt(org, receipt) {
    hideCard();
    hidePin();
    hideResetLink();
    hideCreateOrgForm();
    hideSearch();  
    hideError();
    hideResetReceipt();
    hideReceiptForm();
    hideOneCategoryReceiptFormElements();
    let preview = document.querySelector('#preview-receipt');
    preview.classList.remove('hidden');
    let div = document.createElement('div');
    div.setAttribute('class', 'heading');
    let h2 = document.createElement('h2');
    h2.setAttribute('style', 'color:#fff;')
    h2.innerText = org.name;
    let p = document.createElement('p');
    p.innerText = org.address;
    p.setAttribute('style', 'color: #fff; font-size: 16px;');
    let span = () => document.createElement('span');
    let city = document.createElement('p');
    city.innerText = `${org.city}, ${org.state} ${org.zipcode}`;
    city.setAttribute('style', 'color: #fff; font-size: 16px;');
    div.appendChild(h2)
    div.appendChild(p)
    div.appendChild(city)
    preview.appendChild(div)
    let body = document.createElement('div');
    body.setAttribute('class', 'receipt-body underline');
    let recipient = document.createElement('h4');
    recipient.setAttribute('style', "color:rgb(240, 8, 143); padding: 10px");
    recipient.innerText = `Recipient Name: `
    let rspan = span()
    rspan.innerText = receipt.name;
    recipient.append(rspan);
    let email = document.createElement('h4');
    email.setAttribute('style', "color:rgb(240, 8, 143); padding: 10px");
    email.innerText = `Email:`
    let espan = span();
    espan.innerText = receipt.email;
    email.append(espan);
    let phone = document.createElement('h4');
    phone.setAttribute('style', "color:rgb(240, 8, 143); padding: 10px");
    phone.innerText = `Phone:`
    let pspan = span();
    pspan.innerText = receipt.phone;
    phone.append(pspan);
    let secondary = document.createElement('h4');
    secondary.setAttribute('style', "color:rgb(240, 8, 143); padding: 10px");
    secondary.innerText = `Payment Applied Towards:`
    let sspan = span();
    sspan.innerText = receipt.secondary_name;
    secondary.append(sspan);
    let id = document.createElement('h4');
    id.setAttribute('style', "color:rgb(240, 8, 143); padding: 10px");
    id.innerText = `Account ID:`
    let ispan = span();
    ispan.innerText = receipt.secondary_id;
    id.append(ispan);
    let cat1 = document.createElement('h4');
    cat1.setAttribute('style', "color:rgb(240, 8, 143); padding: 10px");
    cat1.innerText = `Payment Category:`
    let cat1span = span();
    cat1span.innerText = receipt.category_label_1;
    cat1.append(cat1span);
    let amt1 = document.createElement('h4');
    amt1.setAttribute('style', "color:rgb(240, 8, 143); padding: 10px");
    amt1.innerText = `Payment Amount: `
    let amt1span = span();
    let amount1 = parseFloat(receipt.category_amt_1).toFixed(2);
    amount1
    amt1span.innerText = `$${amount1}`;
    amt1.append(amt1span);
    let method = document.createElement('h4');
    method.setAttribute('style', "color:rgb(240, 8, 143); padding: 10px");
    method.innerText = `Payment Method:`
    let methodspan = span();
    methodspan.innerText = receipt.payment_method;
    method.append(methodspan);
    let methodNotes = document.createElement('h4');
    methodNotes.setAttribute('style', "color:rgb(240, 8, 143); padding: 10px");
    methodNotes.innerText = `Additional Payment Details:`
    let methodnotesspan = span();
    methodnotesspan.innerText = receipt.payment_method_note;
    methodNotes.append(methodnotesspan);
    let notes = document.createElement('h4');
    notes.setAttribute('style', "color:rgb(240, 8, 143); padding: 10px");
    notes.innerText = `Receipt Notes:`
    let notesspan = span();
    notesspan.innerText = receipt.notes;
    notes.append(notesspan);
    let footer = document.createElement('div');
    footer.setAttribute('class', "summary");
    let sum = parseFloat(amount1);
    sum
    let receivedBy = document.createElement('h4');
    receivedBy.setAttribute('style', "color:rgb(240, 8, 143); padding: 10px");
    receivedBy.innerText = `Received By: `
    let receivedByspan = span();
    receivedByspan.innerText = receipt.received_by;
    receivedBy.append(receivedByspan);
    let date = document.createElement('h4');
    date.setAttribute('style', "color:rgb(240, 8, 143); padding: 10px");
    date.innerText = `Issued On:`;
    let datespan = span();
    datespan.innerText = receipt.receipt_date;
    date.append(datespan);
    let total = document.createElement('h1');
    total.setAttribute('class', 'total');
    total.setAttribute('style', 'float:right;')
    total.innerText = "Total: "
    total.append(` $${sum}`);
    footer.append(total)
    let button = document.createElement('button');
    button.setAttribute('class', 'btn btn-info');
    button.setAttribute('id', 'save-receipt')
    button.innerText = "Email Receipt";
    button.addEventListener('click', function(e){
        e.preventDefault();
        
    })
    footer.append(button);

    preview.appendChild(body);
    body.appendChild(recipient);
    body.appendChild(email);
    body.appendChild(phone);
    body.appendChild(secondary);
    body.appendChild(id);
    body.appendChild(cat1);
    body.appendChild(amt1);
    body.appendChild(method);
    body.appendChild(methodNotes);
    body.appendChild(notes);
    body.appendChild(receivedBy);
    body.appendChild(date);
    preview.appendChild(footer);
    
  }

function saveReceipt(receipt) {
    receipt['receipt_date'] = new Date(Date.now()).toLocaleString();
    let url = 'http://localhost:3000/receipts';
    options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        },
        body: JSON.stringify(receipt),
    }
    fetch(url, options)
    .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          showError();
        }
    })   
    .then(info => viewReceipt(info)) 
}

function findOrg(input) {
    let id = input.organization_id
    let url = `http://localhost:3000/organizations/${id}`;
    return fetch(url)
    .then(response => response.json())
    .then(info => console.log(info))
}


function listReceipts(data) {
    console.log(data)
    showResults();
    let div = document.querySelector('#search-results');
    let receipts = [];
    data.map((item) => receipts.push(item));
    let query = document.querySelector('#name').value
    let result = receipts.filter(function(item) {
        if (item.organization_id === organization.id) {
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

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



window.onload = (event) => {
    attachListeners();
};


function attachListeners() {
    let quickStart = document.querySelector('#start');
    quickStart.addEventListener('click', function(e) {
        e.preventDefault();
        clearError();
        hideError();
        quickStart.classList.add('hidden')
        start();
    })

    let search = document.querySelector('#submit-search');
    search.addEventListener('click', function(e) {
       e.preventDefault();
       let div = document.querySelector('#search-results');
       div.innerHTML = "";
       getOrganizations();
    })
 
    let resetLink = document.querySelector('#reset');
    resetLink.addEventListener('click', function(e){
        e.preventDefault();
        reset();
    })

    let newOrg = document.querySelector('#create_new');
    newOrg.addEventListener('click', function(e){
        e.preventDefault();
        hidePin();
        hideSearch();
        let form = document.querySelector('#create_org');
        form.classList.remove('hidden');
    })    

    let createOrg = document.querySelector('#create_org_submit');
    createOrg.addEventListener('click', function(e){
        let form = document.querySelector('#create_org');
        form.classList.add('hidden');
        start();
    })

};


function hideSearch() {
    let orgSearch = document.querySelector('#org-search');
    orgSearch.classList.add('hidden');
}

function showSearch() {
    let orgSearch = document.querySelector('#org-search');
    orgSearch.classList.remove('hidden');
}

function clearSearch() {
    let orgSearch = document.querySelector('#org-search');
    orgSearch.children[2].name.value = '';
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

function clearPin() {
    let pin = document.querySelector('#pin');
    pin.value = ''
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
    let receipt = document.querySelector('#receipt_form');
    receipt.classList.add('hidden');
}

function clearReceipt() {
    let receipt = document.querySelector('#receipt_form')
    showSaveReceipt();
    for (let i = 3; i < receipt.length - 2; i++) {
            receipt[i].value = '';
    }   
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

function showResetReceipt(org, receipt) {
    let reset = document.querySelector('#reset-receipt');
    reset.classList.remove('hidden');
    reset.addEventListener('click', function(e) {
        e.preventDefault();
        resetStep();
        restartReceipt(org, resetStep());
    })
 
}

function hideResetReceipt() {
    let reset = document.querySelector('#reset-receipt');
    reset.classList.add('hidden');
}

function showViewReceipts(org) {
    let view = document.querySelector('#view-receipts');
    view.classList.remove('hidden');
    view.addEventListener('click', function(e) {
        e.preventDefault();
        resetStep();
       getReceipts(org);
    })
}

function hideViewReceipts() {
    let view = document.querySelector('#view-receipts');
    view.classList.add('hidden');
}

function showReceiptResults() {
    let view = document.querySelector('#receipts-results');
    view.classList.remove('hidden');
}

function hideReceiptResults() {
    let view = document.querySelector('#receipts-results');
    view.classList.add('hidden');
}

function showPreview() {
    let next = document.querySelector('#preview-receipt');
    next.classList.remove('hidden');
}

function hidePreview() {
    let next = document.querySelector('#preview-receipt');
    next.classList.add('hidden');
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
    showResetLink();
    resetStep();
    showCreateOrgForm();
    showSearch();
    clearSearch();
    hideResults();
    hideError();
    hidePin();
    hideReceiptForm();
    hideReceiptResults();
    hidePreview();
    clearReceipt();
    clearPin();
}

function reset() {
    showResetLink();
    resetStep();
    let form = document.querySelector('#create_org');
    form.classList.add('hidden');
    showSearch();
    clearSearch();
    hideResults();
    hideError();
    hidePin();
    hideReceiptForm();
    hideReceiptResults();
    hidePreview();
    clearReceipt();
    clearPin();
}

function restart() {
    hideCreateOrgForm();
    showResetLink();
    showCreateOrgForm();
    showReceiptForm();
    showReceipt();
    hideResults();
    hideError();
    hideReceiptResults();
    hidePreview();
    clearReceipt();
    let query = document.querySelector('#name')
    query.value = '';
    showReceipt();
    hidePin();
    startSingleReceipt();
}

function restartReceipt(org, step) {
    hideResetLink();
    hideCreateOrgForm();
    showReceiptForm();
    showReceipt();
    clearReceipt();
    hideResults();
    hideError();
    hideReceiptResults();
    hidePreview();
    hideSearch();
    showSaveReceipt();
    let query = document.querySelector('#name')
    query.value = '';
    hidePin();
}


function searchResults(data) {
    showResults();
    hidePreview();
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


function getReceipts(org) {
    let receipts = [];
    let url = 'http://localhost:3000/receipts';
    return fetch(url)
    .then(response => response.json())
    .then(json => listReceipts(json, org))
}

function createOrganization(){
    let url = 'http://localhost:3000/organizations';
        options = {
            method: 'POST',
            headers: {
                'Content-Type': 'appliction/x-www-form-urlencoded',
                'Accept': 'application/json'
            },
            body: new FormData(document.querySelector('#create_org_form'))
        }
        return fetch(url, options)
        .then((response) => {
            if (response.ok) {
              alert('Business/Organization successfully created!')
              return response.json();
            } else {
              showError();
            }
        })   
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
    hideSearch();
    let pin = document.querySelector('#authenticate-pin'); 
    let orgPin = () => data.pin;
    let orgId = document.querySelector('#organization_id');
        orgId.value = data.id;
    let org = () => data;    
    let submitPin = document.querySelector('#submit-pin');
    submitPin.addEventListener('click', function(e){
        e.preventDefault();
        let userPin = document.querySelector('#pin').value;
        if (orgPin() === userPin.toString()) {
            startSingleReceipt(org(), 2);
        } else {
            alert("Sorry! Pin does not match. Please try again.")
        }
    }); 

  }

  function resetStep() {
      let step = 2;
      return step;
  }

  function startSingleReceipt(org, start) {
    let step = start;  
    let receipt = {};
    let getReceipt = () => {return receipt};
    showReceiptForm();   
    showReceipt();
    hidePin();
    hideResetLink();
    hideCreateOrgForm();
    hideSearch();  
    hideError();
    hideSaveReceipt();
    showViewReceipts(org, receipt);
    hideResults();
    hidePreview();
    let organization = document.querySelector('#receipt_organization_id');
    organization.value = org.id;
    receipt.organization_id = org.id;
    let date = document.querySelector('#receipt_receipt_date');
    date.value = new Date(Date.now()).toLocaleString();
    receipt.receipt_date = date.value
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
        showResetReceipt(org);
        showOneCategoryReceiptFormElements();
        button.classList.add('hidden');
        showSaveReceipt(receipt);
        let save = document.querySelector('#save-receipt');
        save.addEventListener('click', function(e){
            viewReceipt(org, receipt)
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
    let view = document.createElement('button');
    view.setAttribute('class', 'btn btn-info btn-lg');
    view.setAttribute('id', 'view-receipts');
    view.setAttribute('style', 'float:right')
    view.innerText = "Issue New Receipt"
    view.addEventListener('click', function(e){
        e.preventDefault();
        clearReceipt();
        startSingleReceipt(org, resetStep());
    })
    let clear = document.querySelector('#preview-receipt');
    clear.innerHTML = "";
    hidePin();
    hideResetLink();
    hideCreateOrgForm();
    hideSearch();  
    hideError();
    hideResetReceipt();
    hideReceiptForm();
    hideOneCategoryReceiptFormElements();
    showPreview();
    let preview = document.querySelector('#preview-receipt');
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
    div.appendChild(view)
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
    receipt['receipt_date'] = new Date(Date.now()).toLocaleString();
    datespan.innerText = receipt.receipt_date;
    date.append(datespan);
    let total = document.createElement('h1');
    total.setAttribute('class', 'total');
    total.setAttribute('style', 'float:right;')
    total.innerText = "Total: "
    total.append(` $${sum}`);
    footer.append(total)

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

function saveReceipt(org, receipt) {
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
    .then(info => viewReceipt(org, info)) 
}

function findOrg(input) {
    let id = input.organization_id
    let url = `http://localhost:3000/organizations/${id}`;
    return fetch(url)
    .then(response => response.json())
    .then(info => setOrg(info))
}

function setOrg(data) {
    return data;
}


function listReceipts(data, org) {
    let clear = document.querySelector('#receipts-results');
    clear.innerHTML = "";
    let newButton = document.createElement('button');
    newButton.setAttribute('class', 'btn marz-button btn-lg');
    newButton.innerText = "Issue New Receipt"
    newButton.addEventListener('click', function(e){
        e.preventDefault();
        clearReceipt();
        startSingleReceipt(org, resetStep());
    })
    let receipts = [];
    data.map((item) => receipts.push(item));
    let result = receipts.filter(function(item) {
        if (item.organization_id === org.id) {
            return item;
        } 
    }); 
    showResults();
    let s = document.querySelector('#search-results');
    s.classList.add('hidden')
    let div = document.querySelector('#receipts-results');
    let tblheadings = ['ID', 'Recipient', 'Description', 'Amount', 'Issued On']
    let tbl = document.createElement('table');
    tbl.setAttribute('class', 'table table-striped');
    div.appendChild(tbl);
    generateReceiptTableHead(tbl, tblheadings);
    generateReceiptTable(tbl, result, org);
    div.classList.remove('hidden')
    div.appendChild(newButton)
}

function generateReceiptTableHead(tbl, data) {
    let thead = tbl.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }

  function generateReceiptTable(table, data, org) {
      let tbody = table.appendChild(document.createElement('tbody'));
      for (let i = 0; i < data.length; i++) {
        let link = document.createElement('a');
        link.setAttribute('style', 'color: rgb(240, 8, 143)')
        link.href =  `/receipts/${data[i].id}`;
        link.innerHTML = `${data[i].name}` 
        link.addEventListener('click', function(e){
            e.preventDefault();
            viewReceipt(org, data[i]);
        });
      
        let row = tbody.insertRow();
        for (let key in data[i]) {
            if (key === 'name' && key !== 'organization_id') {
                let cell = row.insertCell();
                cell.appendChild(link)
            } else if (key === 'id' || key === 'category_label_1' || key === 'category_amt_1' || key === 'created_at') {
                let cell = row.insertCell();
                let text = document.createTextNode(data[i][key]);
                cell.appendChild(text);
            }
            
        };
      };
  };
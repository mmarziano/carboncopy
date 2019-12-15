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
        clearMessage();
        hideMessage();
        quickStart.classList.add('hidden')
        Search();
    })
    let begin = document.querySelector("#begin")
    begin.addEventListener('click', function(e){
        e.preventDefault();
        clearMessage();
        hideMessage();
        clearPin();
        hidePin();
        clearReceipt();
        hideReceipt();
        clearReceiptResults();
        hideReceiptResults();
        let result = document.querySelector('#search-results');
        result.innerHTML = '';
        hideResults();
        clearCreateOrg();
        hideCreateOrg();
        let orgSearch = document.querySelector('#org-search-form');
        orgSearch.innerHTML = '';
        orgSearch.classList.remove('hidden');
        Search();
    })
    let resetLink = document.querySelector('#reset');
    resetLink.addEventListener('click', function(e){
        e.preventDefault();
        reset();
    })

};

function Search(){
    let create = document.createElement('a');
    create.id = "create_new";
    create.style = "float:right; margin-right: 10px";
    create.href = '/';
    create.innerHTML = "Create New"
    create.addEventListener('click', function(e){
        e.preventDefault();
        hideResults();
        hideSearch();
        createOrgForm();
    })
    let reset = document.createElement('a');
    reset.id = "reset";
    reset.style = "float: right";
    reset.href = '/';
    reset.innerHTML = "Reset";
    reset.addEventListener('click', function(e){
        e.preventDefault();
        hideResults();
        clearSearch();
    })

    let form = document.querySelector('#org-search-form');
    let h3 = document.createElement('h3');
    h3.innerHTML = "Search for Business/Organization"
    form.appendChild(reset);
    form.appendChild(create);
    form.appendChild(h3);

    let f = document.createElement("form");
    f.setAttribute('method',"get");
    f.setAttribute('action',"/search");
    
    //creates input element
    let i = document.createElement("input");
    i.type = "text";
    i.name = "org_name";
    i.id = "org_name";
    i.placeholder = "Enter organization name..."
    i.style = "padding-top: 15px; border: none; border-bottom: 2px solid rgb(240, 8, 143); width: 90%;"
    
    //creates submit button
    let s = document.createElement("input");
    s.type = "submit";
    s.style = "margin-left: 10px;"
    s.setAttribute('class', "btn marz-button")
    s.value = "Search";
    s.addEventListener('click', function(e){
        e.preventDefault();
        hideResults();
        clearMessage();
        hideMessage();
        clearSearch();
        getOrganizations();
        }); 
    
    // add all elements to the form
    f.appendChild(i);
    f.appendChild(s);

    form.appendChild(f)
};

function createOrgForm() {
    showCreateOrg();
    let form = document.querySelector('#create_org_form');
    let h3 = document.createElement('h3');
    h3.innerHTML = "Create New Organization"
    form.appendChild(h3);

    let f = document.createElement("form");
    f.setAttribute('method',"post");
    f.setAttribute('action',"/organizations");
    
    //creates 'Name' input element
    let iName = document.createElement("input");
    iName.type = "text";
    iName.name = "name";
    iName.id = "name";
    iName.setAttribute('class', 'form-control');
    iName.placeholder = "Organization name...";
    iName.style = "padding: 20px; border: none; border-bottom: 2px solid rgb(240, 8, 143); width: 100%; margin-bottom: 20px"

    //creates 'Address' input element
    let iAddress = document.createElement("input");
    iAddress.type = "text";
    iAddress.name = "address";
    iAddress.id = "address";
    iAddress.setAttribute('class', 'form-control');
    iAddress.placeholder = "Street Address"
    iAddress.style = "padding: 20px; border: none; border-bottom: 2px solid rgb(240, 8, 143); width: 100%; margin-bottom: 20px"

    //creates 'City' input element
    let iCity = document.createElement("input");
    iCity.type = "text";
    iCity.name = "city";
    iCity.id = "city";
    iCity.setAttribute('class', 'form-control');
    iCity.placeholder = "City"
    iCity.style = "padding: 20px; border: none; border-bottom: 2px solid rgb(240, 8, 143); width: 100%; margin-bottom: 20px"

    //creates 'State' input element
    let iState = document.createElement("input");
    iState.type = "text";
    iState.name = "state";
    iState.id = "state";
    iState.setAttribute('class', 'form-control');
    iState.placeholder = "State"
    iState.style = "padding: 20px; border: none; border-bottom: 2px solid rgb(240, 8, 143); width: 100%; margin-bottom: 20px"
    
    //creates 'Zipcode' input element
    let iZipcode = document.createElement("input");
    iZipcode.type = "text";
    iZipcode.name = "zipcode";
    iZipcode.id = "zipcode";
    iZipcode.setAttribute('class', 'form-control');
    iZipcode.placeholder = "Zipcode"
    iZipcode.style = "padding: 20px; border: none; border-bottom: 2px solid rgb(240, 8, 143); width: 100%; margin-bottom: 20px"

    //creates 'Phone' input element
    let iPhone = document.createElement("input");
    iPhone.type = "text";
    iPhone.name = "phone";
    iPhone.id = "phone";
    iPhone.setAttribute('class', 'form-control');
    iPhone.placeholder = "Phone"
    iPhone.style = "padding: 20px; border: none; border-bottom: 2px solid rgb(240, 8, 143); width: 100%; margin-bottom: 20px"

    //creates 'Billing Email' input element
    let iBillingEmail = document.createElement("input");
    iBillingEmail.type = "text";
    iBillingEmail.name = "billing_email";
    iBillingEmail.id = "billing_email";
    iBillingEmail.setAttribute('class', 'form-control');
    iBillingEmail.placeholder = "Billing Email"
    iBillingEmail.style = "padding: 20px; border: none; border-bottom: 2px solid rgb(240, 8, 143); width: 100%; margin-bottom: 20px"

    //creates 'Audit Email' input element
    let iAuditEmail = document.createElement("input");
    iAuditEmail.type = "text";
    iAuditEmail.name = "audit_email";
    iAuditEmail.id = "audit_email";
    iAuditEmail.setAttribute('class', 'form-control');
    iAuditEmail.placeholder = "Audit Email"
    iAuditEmail.style = "padding: 20px; border: none; border-bottom: 2px solid rgb(240, 8, 143); width: 100%; margin-bottom: 20px"

    //creates 'Pin' input element
    let iPin = document.createElement("input");
    iPin.type = "text";
    iPin.name = "pin";
    iPin.id = "pin";
    iPin.setAttribute('class', 'form-control');
    iPin.placeholder = "Pin/Password"
    iPin.style = "padding: 20px; border: none; border-bottom: 2px solid rgb(240, 8, 143); width: 100%; margin-bottom: 20px"

    //creates submit button
    let s = document.createElement("input");
    s.type = "submit";
    s.setAttribute('class', "btn marz-button")
    s.value = "Create Organization";
    s.addEventListener('click', function(e){
        e.preventDefault();
        let org = new Organization(iName.value, iAddress.value, iCity.value, iState.value, iZipcode.value, iPhone.value, iBillingEmail.value, iAuditEmail.value, iPin.value)
        clearMessage();
        hideMessage();
        createOrganization(org);
        }); 
    
    // add all elements to the form
    f.appendChild(iName);
    f.appendChild(iAddress);
    f.appendChild(iCity);
    f.appendChild(iState);
    f.appendChild(iZipcode);
    f.appendChild(iPhone);
    f.appendChild(iBillingEmail);
    f.appendChild(iAuditEmail);
    f.appendChild(iPin);
    f.appendChild(s);

    form.appendChild(f)
}

function hideSearch() {
    let orgSearch = document.querySelector('#org-search-form');
    orgSearch.classList.add('hidden');
}

function showSearch() {
    let orgSearch = document.querySelector('#org-search-form');
    orgSearch.classList.remove('hidden');
}


function hideResetLink() {
    let reset = document.querySelector('#reset');
    reset.classList.add('hidden');
}

function showResetLink() {
    let reset = document.querySelector('#reset');
    reset.classList.remove('hidden');
}

function showMessage(){
    let ermsgror = document.querySelector('#message');
    msg.classList.remove('hidden');
}

function hideMessage(){
        let msg = document.querySelector('#message');
        msg.classList.add('hidden');
}

function clearMessage(){
    let msg = document.querySelector('#message');
    msg.innerHTML = '';
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
    let pin = document.querySelector('#authenticate-pin');
    pin.innerHTML = ''
}

function showCreateOrg() {
    let form = document.querySelector('#create_org_form')
    form.classList.remove('hidden')
}

function hideCreateOrg() {
    let form = document.querySelector('#create_org_form')
    form.classList.add('hidden')
}

function clearCreateOrg() {
    let form = document.querySelector('#create_org_form')
    form.innerHTML = ''
}

function hideResults() {
    let card = document.querySelector('#card-results');
    card.classList.add('hidden');
}

function showResults() {
    let card = document.querySelector('#card-results');
    card.classList.remove('hidden');
}

function clearSearch() {
    let result = document.querySelector('#search-results');
    result.innerHTML = '';
}


function showReceipt() {
    let receipt = document.querySelector('#receipt');
    receipt.classList.remove('hidden');
}

function hideReceipt() {
    let receipt = document.querySelector('#receipt');
    receipt.classList.add('hidden');
}

function clearReceipt() {
    let receipt = document.querySelector('#receipt')
    receipt.innerHTML = ''
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

function clearReceiptResults() {
    let view = document.querySelector('#receipts-results');
    view.innerHTML = '';
}

function showPreview() {
    let next = document.querySelector('#preview-receipt');
    next.classList.remove('hidden');
}

function hidePreview() {
    let next = document.querySelector('#preview-receipt');
    next.classList.add('hidden');
}


function searchResults(data) {
    showResults();
    let div = document.querySelector('#search-results');
    let orgs = [];
    data.map((item) => orgs.push(item));
    let query = document.querySelector('#org_name').value
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

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
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

function createOrganization(org){
    let url = 'http://localhost:3000/organizations';
        options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(org)
        }
        fetch(url, options)
        .then(handleErrors)
        .then(response => response.json())
        .then(json => createOrgResults(json))
        .catch(error => console.log(error) );
}

function createOrgResults(result){
    let msg = document.getElementById('message');
    let p = document.createElement('p');
    p.classList.add('alert');
    if (Array.isArray(result)) {
        p.innerHTML = "The following errors have prevented this action:"
        msg.append(p);
        let ul = document.createElement('ul');
        for (i = 0; i < result.length; i++) {
            let li = document.createElement('li');
            li.innerHTML = result[i];
            ul.appendChild(li)
        }
        msg.append(ul)
    } else {
        p.innerHTML = "Organization successfully created."
        msg.append(p)
        let form = document.querySelector('#create_org_form')
        form.classList.add('hidden')
        showSearch();
    }
    msg.classList.remove('hidden')

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
    // create form
    let pin = document.querySelector('#authenticate-pin');
    let h3 = document.createElement('h3');
    h3.innerHTML = "Organization Pin/Password"
    pin.appendChild(h3);

    //creates input element
    let i = document.createElement("input");
    i.type = "text";
    i.name = "pin";
    i.id = "pin";
    i.placeholder = "Enter organization pin to issue receipt..."
    i.style = "padding-top: 15px; border: none; border-bottom: 2px solid rgb(240, 8, 143); width: 90%;"
    
    //creates submit button
    let s = document.createElement("button");
    s.type = "submit";
    s.style = "margin-left: 10px;"
    s.setAttribute('class', "btn marz-button")
    s.innerHTML = "Submit"
    s.addEventListener('click', function(e){
        e.preventDefault();
        hideResults();
        clearMessage();
        hideMessage();
        clearSearch();
        let userPin = document.querySelector('#pin').value;
            if (data.pin === userPin.toString()) {
                startReceipt(data);
            } else {
                alert("Sorry! Pin does not match. Please try again.")
            }
        }); 
    
    // add all elements to the form
    pin.appendChild(i);
    pin.appendChild(s);
  }


  function startReceipt(org) {
    clearPin();
    hidePin();
    hideReceiptResults();
    hideMessage();
    showReceipt();
    let receipt = document.querySelector('#receipt');
    let h3 = document.createElement('h3');
    h3.innerHTML = "Issue Receipt"
    receipt.appendChild(h3);

    let viewReceipts = document.createElement('button');
    viewReceipts.setAttribute('class', 'btn marz-button');
    viewReceipts.style = "float: right; margin-bottom: 10px";
    viewReceipts.innerHTML = "View All Receipts"
    viewReceipts.addEventListener('click', function(e){
        e.preventDefault();
        hideReceipt();
        getOrgReceipts(org);
    })
    receipt.appendChild(viewReceipts);

    let p = document.createElement('p');
    p.innerHTML = "Highlighted fields require input."
    p.style = "color: rgb(240, 8, 143)"
    p.id = "form_error"
    p.classList.add('hidden')
    receipt.appendChild(p)

    let f = document.createElement("form");
    f.setAttribute('method',"post");
    f.setAttribute('action',"/receipts");
    f.id = "new_receipt"
    
    //creates 'Name' input element
    let iName = document.createElement("input");
    iName.type = "text";
    iName.name = "name";
    iName.id = "name";
    iName.required = true;
    iName.setAttribute('class', 'form-control inputs');
    iName.placeholder = "Recipient Name...";
    iName.style = "padding: 20px; border: none; border-bottom: 2px solid rgb(240, 8, 143); width: 100%; margin-bottom: 20px"

    //creates 'Email' input element
    let iEmail = document.createElement("input");
    iEmail.type = "text";
    iEmail.name = "email";
    iEmail.id = "email";
    iEmail.required = true; 
    iEmail.setAttribute('class', 'form-control inputs');
    iEmail.placeholder = "Recipient Email"
    iEmail.style = "padding: 20px; border: none; border-bottom: 2px solid rgb(240, 8, 143); width: 100%; margin-bottom: 20px"

    //creates 'Phone' input element
    let iPhone = document.createElement("input");
    iPhone.type = "text";
    iPhone.name = "phone";
    iPhone.id = "phone";
    iPhone.setAttribute('class', 'form-control inputs');
    iPhone.placeholder = "Recipient Phone Number"
    iPhone.style = "padding: 20px; border: none; border-bottom: 2px solid rgb(240, 8, 143); width: 100%; margin-bottom: 20px"

    //creates 'Account ID' input element
    let iAccountID = document.createElement("input");
    iAccountID.type = "text";
    iAccountID.name = "account_id";
    iAccountID.id = "account_id";
    iAccountID.setAttribute('class', 'form-control inputs');
    iAccountID.placeholder = "Account ID"
    iAccountID.style = "padding: 20px; border: none; border-bottom: 2px solid rgb(240, 8, 143); width: 100%; margin-bottom: 20px"
    
    //creates 'Description' input element
    let iDescription = document.createElement("input");
    iDescription.type = "text";
    iDescription.name = "description";
    iDescription.id = "description";
    iDescription.required = true;
    iDescription.setAttribute('class', 'form-control inputs');
    iDescription.placeholder = "Payment Description"
    iDescription.style = "padding: 20px; border: none; border-bottom: 2px solid rgb(240, 8, 143); width: 100%; margin-bottom: 20px"

    //creates 'Payment Amount' input element
    let iPaymentAmt = document.createElement("input");
    iPaymentAmt.type = "text";
    iPaymentAmt.name = "category_amt_1";
    iPaymentAmt.id = "category_amt_1";
    iPaymentAmt.required = true;
    iPaymentAmt.setAttribute('class', 'form-control inputs');
    iPaymentAmt.placeholder = "Payment Amount"
    iPaymentAmt.style = "padding: 20px; border: none; border-bottom: 2px solid rgb(240, 8, 143); width: 100%; margin-bottom: 20px"

    //creates 'Notes' input element
    let iNotes = document.createElement("input");
    iNotes.type = "text";
    iNotes.name = "notes";
    iNotes.id = "notes";
    iNotes.setAttribute('class', 'form-control inputs');
    iNotes.placeholder = "Payment Notes"
    iNotes.style = "padding: 20px; border: none; border-bottom: 2px solid rgb(240, 8, 143); width: 100%; margin-bottom: 20px"

    //creates 'Payment Method' input element
    let iPaymentMethod = document.createElement("input");
    iPaymentMethod.type = "text";
    iPaymentMethod.name = "payment_method";
    iPaymentMethod.id = "payment_method";
    iPaymentMethod.required = true;
    iPaymentMethod.setAttribute('class', 'form-control inputs');
    iPaymentMethod.placeholder = "Payment Method"
    iPaymentMethod.style = "padding: 20px; border: none; border-bottom: 2px solid rgb(240, 8, 143); width: 100%; margin-bottom: 20px"

    //creates 'Payment Method Note' input element
    let iPaymentNote = document.createElement("input");
    iPaymentNote.type = "text";
    iPaymentNote.name = "payment_method_note";
    iPaymentNote.id = "payment_method_note";
    iPaymentNote.setAttribute('class', 'form-control inputs');
    iPaymentNote.placeholder = "Payment Method (Additional Info)"
    iPaymentNote.style = "padding: 20px; border: none; border-bottom: 2px solid rgb(240, 8, 143); width: 100%; margin-bottom: 20px"

    //creates 'Received By' input element
    let iReceivedBy = document.createElement("input");
    iReceivedBy.type = "text";
    iReceivedBy.name = "received_by";
    iReceivedBy.id = "received_by";
    iReceivedBy.required = true;
    iReceivedBy.setAttribute('class', 'form-control inputs');
    iReceivedBy.placeholder = "Received By"
    iReceivedBy.style = "padding: 20px; border: none; border-bottom: 2px solid rgb(240, 8, 143); width: 100%; margin-bottom: 20px"
    
    //creates submit button
    let s = document.createElement("input");
    s.id = 'submit-receipt'
    s.type = "submit";
    s.setAttribute('class', "btn marz-button")
    s.value = "Preview Receipt";
    s.addEventListener('click', function(e){
        e.preventDefault();
        // let date = new Date(Date.now()).toLocaleString();
        let rec = new Receipt(iName.value, iEmail.value, iPhone.value, iAccountID.value, iDescription.value, iPaymentAmt.value, iPaymentMethod.value, iPaymentNote.value, iNotes.value, iReceivedBy.value, new Date(Date.now()).toLocaleString(), org.id)
        clearMessage();
        hideMessage();
            if (f.checkValidity() == true) {
                viewReceipt(org, rec);
            } else {
                rec.validateFields();
            }
        }); 
    
    // add all elements to the form
    f.appendChild(iName);
    f.appendChild(iEmail);
    f.appendChild(iPhone);
    f.appendChild(iAccountID);
    f.appendChild(iDescription);
    f.appendChild(iPaymentAmt);
    f.appendChild(iNotes);
    f.appendChild(iPaymentMethod);
    f.appendChild(iPaymentNote);
    f.appendChild(iReceivedBy);
    f.appendChild(s);

    receipt.appendChild(f)
  }
  
 
class  Receipt {
    constructor(name, email, phone, account_id, description, category_amt_1, payment_method, payment_method_note, notes, received_by, receipt_date, organization_id) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.account_id = account_id;
        this.description = description;
        this.category_amt_1 = category_amt_1;
        this.payment_method = payment_method;
        this.payment_method_note = payment_method_note;
        this.notes = notes;
        this.received_by = received_by;
        this.receipt_date = receipt_date;
        this.organization_id = organization_id
    }

    validateFields() {
        let form = document.querySelector('#new_receipt');
        let inputs = form.elements 
        let labels = ["name", "email", "description", "category_amt_1", "payment_method", "received_by"];
            for (let i = 0; i < labels.length; i++) {
                if (this[labels[i]] == '') {
                    inputs[labels[i]].style = "padding: 20px; border: 2px solid rgb(240, 255, 28); width: 100%; margin-bottom: 20px;"
                    let msg = document.querySelector('#form_error')
                    msg.classList.remove('hidden')
                } 
            }
        }

}

class  Organization {
    constructor(name, address, city, state, zipcode, phone, billing_email, audit_email, pin) {
        this.name = name;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
        this.phone = phone;
        this.billing_email = billing_email;
        this.audit_email = audit_email;
        this.pin = pin;
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
        hidePreview();
        clearReceipt();
        showReceipt();
        startReceipt(org);
    })
    let clear = document.querySelector('#preview-receipt');
    clear.innerHTML = "";
    hidePin();
    hideResetLink();
    hideSearch();  
    hideMessage();
    hideReceipt();
    hideReceiptResults();
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
    let id = document.createElement('h4');
    id.setAttribute('style', "color:rgb(240, 8, 143); padding: 10px");
    id.innerText = `Account ID:`
    let ispan = span();
    ispan.innerText = receipt.account_id;
    id.append(ispan);
    let desc = document.createElement('h4');
    desc.setAttribute('style', "color:rgb(240, 8, 143); padding: 10px");
    desc.innerText = `Payment Description:`
    let descspan = span();
    descspan.innerText = receipt.description;
    desc.append(descspan);
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
    let savebtn = document.createElement('button');
        savebtn.setAttribute('class', 'btn btn-success btn-lg');
        savebtn.innerText = "Save Receipt"
        savebtn.addEventListener('click', function(e){
            e.preventDefault();
            saveReceipt(org, receipt);
        });
    let startover = document.createElement('button');
        startover.setAttribute('class', 'btn btn-info btn-lg');
        startover.innerText = "Edit"
        startover.addEventListener('click', function(e){
            e.preventDefault();
            hidePreview();
            showReceipt();
        })
    if (receipt.id == '' || receipt.id == null || receipt.id == undefined) {
        footer.append(savebtn);
        footer.append(startover);
    }

    footer.append(total);

    preview.appendChild(body);
    body.appendChild(recipient);
    body.appendChild(email);
    body.appendChild(phone);
    body.appendChild(id);
    body.appendChild(desc);
    body.appendChild(amt1);
    body.appendChild(method);
    body.appendChild(methodNotes);
    body.appendChild(notes);
    body.appendChild(receivedBy);
    body.appendChild(date);
    preview.appendChild(footer);
    
  }

function saveReceipt(org, receipt) {
    let url = 'http://localhost:3000/receipts';
    options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(receipt),
    }
    fetch(url, options)
    .then(handleErrors)
        .then(response => response.json())
        .then(json => createReceiptResults(json, org))
        .catch(error => console.log(error) );
}

function createReceiptResults(receipt, org){
    hidePreview();
    let msg = document.getElementById('message');
    let p = document.createElement('p');
    p.classList.add('alert');
    if (Array.isArray(receipt)) {
        p.innerHTML = "The following errors have prevented this action:"
        msg.append(p);
        let ul = document.createElement('ul');
        for (i = 0; i < result.length; i++) {
            let li = document.createElement('li');
            li.innerHTML = result[i];
            ul.appendChild(li)
        }
        msg.append(ul)
    } else {
        p.innerHTML = "Receipt successfully created."
        msg.append(p)
        let form = document.querySelector('#receipt')
        form.classList.add('hidden')
        getOrgReceipts(org);
    }
    msg.classList.remove('hidden')

}

function getOrgReceipts(org) {
    let url = `http://localhost:3000/receipts`;
    return fetch(url)
    .then(response => response.json())
    .then((info) => {
        let result = info.filter(function(rec) {
            if(rec.organization_id === org.id) {
                return rec;
            }
        });
       listReceipts(result, org)
    });
}


function listReceipts(data, org) {
    let clear = document.querySelector('#receipts-results');
    clear.innerHTML = "";
    showReceiptResults();
    let h2 = document.createElement('h2');
    h2.innerText = org.name + ' RECEIPT LIST';
    let newButton = document.createElement('button');
    newButton.setAttribute('class', 'btn marz-button btn-lg');
    newButton.innerText = "Issue New Receipt"
    newButton.addEventListener('click', function(e){
        e.preventDefault();
        clearReceipt();
        startReceipt(org);
    })
    // showResults();
    let s = document.querySelector('#search-results');
    s.classList.add('hidden')
    let div = document.querySelector('#receipts-results');
    let tblheadings = ['ID', 'Recipient', 'Description', 'Amount', 'Issued On']
    let tbl = document.createElement('table');
    tbl.setAttribute('class', 'table table-striped');
    div.appendChild(h2);
    div.appendChild(tbl);
    generateReceiptTableHead(tbl, tblheadings);
    generateReceiptTable(tbl, data, org);
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
            } else if (key === 'id' || key === 'description' || key === 'receipt_date') {
                let cell = row.insertCell();
                let text = document.createTextNode(data[i][key]);
                cell.appendChild(text);
            } else if (key === 'category_amt_1') {
                let cell = row.insertCell();
                let amt = "$" + parseFloat(data[i][key]).toFixed(2)
                let text = document.createTextNode(amt);
                cell.appendChild(text);
            }
            
        };
      };
  };
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
    quickStart.addEventListener('mouseout', function(item) {
        quickStart.setAttribute("style", "color:rgb(10, 98, 121)");
     })

}

function startReceipt() {
   let flipcard = document.querySelector('.flip-card')
   flipcard.classList.add('hidden');
   let orgSearch = document.querySelector('#org-search');
    orgSearch.classList.remove('hidden');
    orgSearch.classList.add('show');
}
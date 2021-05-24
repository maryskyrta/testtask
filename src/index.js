import './scss/popup.scss';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;

function openPopup() {
    $(".popup").removeClass("popup_hidden");
}

function closePopup(){
    $(".popup").addClass("popup_hidden");
}

function uninstall(){
    closePopup();
    alert("DONE");
}

function checkInput(){
    let query = $(".book-search-input").text();
    if(query.length >= 3){
        jQuery.ajax({
            url: 'https://www.googleapis.com/books/v1/volumes?q=',
            method: 'get',
            dataType: 'json',
            success: function(json){
                json.forEach(book => $('.categories-list').append(_addCategory(category)));

            },
            error: function(xhr){
                alert("An error occured: " + xhr.status + " " + xhr.statusText);
            },
        });

    }

}

$(document).ready(function () {
    $(".open-button").on('click',openPopup);
    $(".popup-body__cancel-button").on('click',closePopup);
    $(".popup-body__close-button").on('click',closePopup);
    $(".popup-body__uninstall-button").on('click',uninstall)
    $(".popup").on('click',closePopup);
    $(".popup-body").click((e)=>{
        e.stopPropagation();
    });
});
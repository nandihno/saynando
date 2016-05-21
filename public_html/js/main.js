/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
;
(function ($, window, document, undefined) {

    var console = window.console || {assert: function () {}, count: function () {}, dir: function () {}, error: function () {}, group: function () {}, groupCollapsed: function () {}, groupEnd: function () {}, info: function () {}, log: function () {}, time: function () {}, timeEnd: function () {}, trace: function () {}, warn: function () {}};

    var MapPublisher = (function () {

        var ausLatLng = {
            lat: -25.363,
            lng: 131.044
        };
        var initialGeoLocation = null;

        return {
            init: function () {
                console.log("in the init!");
                var map = new google.maps.Map($("#myMap2")[0], {
                    zoom: 4,
                    center: ausLatLng
                });
            }
        };
        
       


    })();
    window.MapPublisher = MapPublisher;

   

})(jQuery.noConflict(), window, document);

 function initMap() {
        var myLatLng = {
            lat: -25.363,
            lng: 131.044
        };

        var map = new google.maps.Map(document.getElementById('myMap2'), {
            zoom: 4,
            center: myLatLng
        });
    }


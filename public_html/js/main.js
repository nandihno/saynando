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
        
        var places = [];
       

        
        var infoWindow = null;
        
        var pano = null;

        var browserGeoLocation = function (aMap) {
            var $locationSupport = $("#locationSupport");
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    places.push({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                        name:'Current location'
                    });
                    console.log("your current location is :" + places[0].lat + " " + places[0].lng);
                    console.log("length:"+places.length);
                    $locationSupport.html("Your browser knows where you are");
                    setMarker(places,aMap);
                });
            }
        };

        var setMarker = function (locations,aMap) {
            console.log("locations setMarker size is:"+locations.length);
            locations.forEach(function (val, index) {
                var locationName = val.name;
                var locationLatLng = new google.maps.LatLng(val.lat, val.lng);
                var marker = new google.maps.Marker({
                    position: locationLatLng,
                    map: aMap,
                    title: locationName
                });
                var strHtml = "<div class='infoWindow'><h3>Your Location is </h3><p><div id='content' style='width:100px;height:100px;'></div>";
                generateInfoWindow(marker, strHtml, val.lat, val.lon,aMap);
            });
            

        };

        var generateInfoWindow = function (marker, html, lat, lon, aMap) {
            google.maps.event.addListener(marker, 'click', function () {
                if(infoWindow == null) {
                    infoWindow = new google.maps.InfoWindow({
                       content:'' 
                    });
                }
                infoWindow.setContent(html);
                infoWindow.open(aMap, marker);
                google.maps.event.addListener(infoWindow, 'domready', function () {
                    if (pano != null) {
                        pano.unbind("position");
                        pano.setVisible(false);
                    }
                    pano = new google.maps.StreetViewPanorama($("#content")[0], {
                        navigationControl: true,
                        navigationControlOptions: {style: google.maps.NavigationControlStyle.ANDROID},
                        enableCloseButton: false,
                        addressControl: false,
                        linksControl: false
                    });
                    pano.bindTo("position", marker);
                    pano.setVisible(true);
                });
            });
            google.maps.event.addListener(marker, 'close', function () {
                pano.setVisible(false);
                infoWindow.close();

            });
        };

        return {
            init: function () {
                console.log("in the init!");
                console.log("places length is:"+places.length);
                var map = new google.maps.Map($("#myMap2")[0], {
                    zoom: 4,
                    center: ausLatLng
                });
                browserGeoLocation(map);
               
                
                
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


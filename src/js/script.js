function initMap(){var e=document.getElementById("map"),t=new google.maps.LatLng(52.87391,18.689),l=new google.maps.Map(e,{center:t,zoom:15,styles:style,gestureHandling:"auto",fullscreenControl:!1,zoomControl:!1,disableDoubleClickZoom:!0,mapTypeControl:!1,scaleControl:!1,scrollwheel:!0,streetViewControl:!1,draggable:!0,clickableIcons:!1,mapTypeId:google.maps.MapTypeId.ROADMAP});new google.maps.Marker({position:t,map:l,title:"Moto Max",animation:google.maps.Animation.BOUNCE,icon:"marker3.png"})}var style=[{featureType:"all",elementType:"labels.text.fill",stylers:[{color:"#ffffff"}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{color:"#000000"},{lightness:13}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#144b53"},{lightness:14},{weight:1.4}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#08304b"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#0c4152"},{lightness:5}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#000000"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#0b434f"},{lightness:25}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#000000"}]},{featureType:"road.arterial",elementType:"geometry.stroke",stylers:[{color:"#0b3d51"},{lightness:16}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"transit",elementType:"labels.text",stylers:[{visibility:"on"}]},{featureType:"transit",elementType:"labels.text.fill",stylers:[{color:"#ffffff"},{visibility:"on"}]},{featureType:"transit",elementType:"labels.text.stroke",stylers:[{color:"#000000"},{lightness:13}]},{featureType:"water",elementType:"all",stylers:[{color:"#021019"}]}];window.initMap=initMap;
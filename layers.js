var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_departements20180101_1 = new ol.format.GeoJSON();
var features_departements20180101_1 = format_departements20180101_1.readFeatures(json_departements20180101_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_departements20180101_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_departements20180101_1.addFeatures(features_departements20180101_1);
var lyr_departements20180101_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_departements20180101_1, 
                style: style_departements20180101_1,
                popuplayertitle: "departements-20180101",
                interactive: false,
                title: '<img src="styles/legend/departements20180101_1.png" /> departements-20180101'
            });
var format_VDINESSLUXURY_2 = new ol.format.GeoJSON();
var features_VDINESSLUXURY_2 = format_VDINESSLUXURY_2.readFeatures(json_VDINESSLUXURY_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VDINESSLUXURY_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VDINESSLUXURY_2.addFeatures(features_VDINESSLUXURY_2);
var lyr_VDINESSLUXURY_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VDINESSLUXURY_2, 
                style: style_VDINESSLUXURY_2,
                popuplayertitle: "VDI NESS LUXURY",
                interactive: true,
                title: '<img src="styles/legend/VDINESSLUXURY_2.png" /> VDI NESS LUXURY'
            });

lyr_OSMStandard_0.setVisible(true);lyr_departements20180101_1.setVisible(true);lyr_VDINESSLUXURY_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_departements20180101_1,lyr_VDINESSLUXURY_2];
lyr_departements20180101_1.set('fieldAliases', {'code_insee': 'code_insee', 'nom': 'nom', 'nuts3': 'nuts3', 'wikipedia': 'wikipedia', 'surf_km2': 'surf_km2', });
lyr_VDINESSLUXURY_2.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', 'PRENOM_f': 'PRENOM_f', 'FACEBOOK A': 'FACEBOOK A', });
lyr_departements20180101_1.set('fieldImages', {'code_insee': 'TextEdit', 'nom': 'TextEdit', 'nuts3': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_km2': 'TextEdit', });
lyr_VDINESSLUXURY_2.set('fieldImages', {'id': 'TextEdit', 'Nom': 'TextEdit', 'PRENOM_f': 'TextEdit', 'FACEBOOK A': 'TextEdit', });
lyr_departements20180101_1.set('fieldLabels', {'code_insee': 'no label', 'nom': 'no label', 'nuts3': 'no label', 'wikipedia': 'no label', 'surf_km2': 'no label', });
lyr_VDINESSLUXURY_2.set('fieldLabels', {'id': 'inline label - always visible', 'Nom': 'inline label - always visible', 'PRENOM_f': 'inline label - always visible', 'FACEBOOK A': 'inline label - always visible', });
lyr_VDINESSLUXURY_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
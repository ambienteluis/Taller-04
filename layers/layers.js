var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_departamento_1 = new ol.format.GeoJSON();
var features_departamento_1 = format_departamento_1.readFeatures(json_departamento_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_departamento_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_departamento_1.addFeatures(features_departamento_1);
var lyr_departamento_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_departamento_1, 
                style: style_departamento_1,
                popuplayertitle: "departamento",
                interactive: true,
    title: 'departamento<br />\
    <img src="styles/legend/departamento_1_0.png" /> AMAZONAS<br />\
    <img src="styles/legend/departamento_1_1.png" /> ANCASH<br />\
    <img src="styles/legend/departamento_1_2.png" /> APURIMAC<br />\
    <img src="styles/legend/departamento_1_3.png" /> AREQUIPA<br />\
    <img src="styles/legend/departamento_1_4.png" /> AYACUCHO<br />\
    <img src="styles/legend/departamento_1_5.png" /> CAJAMARCA<br />\
    <img src="styles/legend/departamento_1_6.png" /> CALLAO<br />\
    <img src="styles/legend/departamento_1_7.png" /> CUSCO<br />\
    <img src="styles/legend/departamento_1_8.png" /> HUANCAVELICA<br />\
    <img src="styles/legend/departamento_1_9.png" /> HUANUCO<br />\
    <img src="styles/legend/departamento_1_10.png" /> ICA<br />\
    <img src="styles/legend/departamento_1_11.png" /> JUNIN<br />\
    <img src="styles/legend/departamento_1_12.png" /> LA LIBERTAD<br />\
    <img src="styles/legend/departamento_1_13.png" /> LAMBAYEQUE<br />\
    <img src="styles/legend/departamento_1_14.png" /> LIMA<br />\
    <img src="styles/legend/departamento_1_15.png" /> LORETO<br />\
    <img src="styles/legend/departamento_1_16.png" /> MADRE DE DIOS<br />\
    <img src="styles/legend/departamento_1_17.png" /> MOQUEGUA<br />\
    <img src="styles/legend/departamento_1_18.png" /> PASCO<br />\
    <img src="styles/legend/departamento_1_19.png" /> PIURA<br />\
    <img src="styles/legend/departamento_1_20.png" /> PUNO<br />\
    <img src="styles/legend/departamento_1_21.png" /> SAN MARTIN<br />\
    <img src="styles/legend/departamento_1_22.png" /> TACNA<br />\
    <img src="styles/legend/departamento_1_23.png" /> TUMBES<br />\
    <img src="styles/legend/departamento_1_24.png" /> UCAYALI<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_departamento_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_departamento_1];
lyr_departamento_1.set('fieldAliases', {'NOMBDEP': 'NOMBDEP', 'COUNT': 'COUNT', 'FIRST_IDDP': 'FIRST_IDDP', 'HECTARES': 'HECTARES', 'Foto': 'Foto', });
lyr_departamento_1.set('fieldImages', {'NOMBDEP': 'TextEdit', 'COUNT': 'Hidden', 'FIRST_IDDP': 'Hidden', 'HECTARES': 'TextEdit', 'Foto': 'Hidden', });
lyr_departamento_1.set('fieldLabels', {'NOMBDEP': 'no label', 'HECTARES': 'no label', });
lyr_departamento_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
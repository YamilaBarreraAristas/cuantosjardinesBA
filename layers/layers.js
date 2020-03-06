var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Distritos_1 = new ol.format.GeoJSON();
var features_Distritos_1 = format_Distritos_1.readFeatures(json_Distritos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Distritos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Distritos_1.addFeatures(features_Distritos_1);
var lyr_Distritos_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Distritos_1, 
                style: style_Distritos_1,
                interactive: true,
                title: '<img src="styles/legend/Distritos_1.png" /> Distritos'
            });
var lyr_Regionesdeincidenciapublicosyprivados_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Regiones de incidencia publicos y privados",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Regionesdeincidenciapublicosyprivados_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6506498.508531, -4130473.138346, -6492971.430903, -4116478.365029]
                            })
                        });
var format_Contronos500m_3 = new ol.format.GeoJSON();
var features_Contronos500m_3 = format_Contronos500m_3.readFeatures(json_Contronos500m_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contronos500m_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contronos500m_3.addFeatures(features_Contronos500m_3);
var lyr_Contronos500m_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Contronos500m_3, 
                style: style_Contronos500m_3,
                interactive: true,
                title: '<img src="styles/legend/Contronos500m_3.png" /> Contronos 500m'
            });
var format_Publicos_4 = new ol.format.GeoJSON();
var features_Publicos_4 = format_Publicos_4.readFeatures(json_Publicos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Publicos_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Publicos_4.addFeatures(features_Publicos_4);
var lyr_Publicos_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Publicos_4, 
                style: style_Publicos_4,
                interactive: true,
                title: '<img src="styles/legend/Publicos_4.png" /> Publicos'
            });
var format_Privados_5 = new ol.format.GeoJSON();
var features_Privados_5 = format_Privados_5.readFeatures(json_Privados_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Privados_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Privados_5.addFeatures(features_Privados_5);
var lyr_Privados_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Privados_5, 
                style: style_Privados_5,
                interactive: true,
                title: '<img src="styles/legend/Privados_5.png" /> Privados'
            });
var group_Lanusplanofiltrados = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_Distritos_1,lyr_Regionesdeincidenciapublicosyprivados_2,lyr_Contronos500m_3,lyr_Publicos_4,lyr_Privados_5,],
                                title: "Lanus plano filtrados"});

lyr_OpenStreetMap_0.setVisible(true);lyr_Distritos_1.setVisible(true);lyr_Regionesdeincidenciapublicosyprivados_2.setVisible(true);lyr_Contronos500m_3.setVisible(true);lyr_Publicos_4.setVisible(true);lyr_Privados_5.setVisible(true);
var layersList = [group_Lanusplanofiltrados];
lyr_Distritos_1.set('fieldAliases', {'objectid': 'objectid', 'departa': 'departa', 'cabecer': 'cabecer', 'provincia': 'provincia', 'fuente': 'fuente', 'fec_actual': 'fec_actual', 'fuente1': 'fuente1', 'cod_depto': 'cod_depto', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', });
lyr_Contronos500m_3.set('fieldAliases', {'id': 'id', 'cost_level': 'cost_level', });
lyr_Publicos_4.set('fieldAliases', {'Ciclo de C': 'Ciclo de C', 'Nº de Reg': 'Nº de Reg', 'Nº de Dis': 'Nº de Dis', 'Nombre de': 'Nombre de', 'Tipo de Or': 'Tipo de Or', 'Clave Prov': 'Clave Prov', 'CUE': 'CUE', 'Nombre': 'Nombre', 'Número': 'Número', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Medio': 'Medio', 'Nombre d_1': 'Nombre d_1', 'Jornada': 'Jornada', 'Nombre d_2': 'Nombre d_2', 'Fecha de C': 'Fecha de C', 'Matrícula': 'Matrícula', 'Condiciona': 'Condiciona', 'Nº de Sec': 'Nº de Sec', 'Nº de Car': 'Nº de Car', 'Nº de Des': 'Nº de Des', 'Desempeño': 'Desempeño', 'Desempe�_1': 'Desempe�_1', 'Desempe�_2': 'Desempe�_2', 'Desempe�_3': 'Desempe�_3', 'Secciones': 'Secciones', 'Seccione_1': 'Seccione_1', 'Seccione_2': 'Seccione_2', 'Seccione_3': 'Seccione_3', 'Seccione_4': 'Seccione_4', 'Seccione_5': 'Seccione_5', 'Seccione_6': 'Seccione_6', 'Seccione_7': 'Seccione_7', 'Matrícu_1': 'Matrícu_1', 'Matrícu_2': 'Matrícu_2', 'Matrícu_3': 'Matrícu_3', 'Matrícu_4': 'Matrícu_4', 'Matrícu_5': 'Matrícu_5', 'Matrícu_6': 'Matrícu_6', 'Matrícu_7': 'Matrícu_7', 'Matrícu_8': 'Matrícu_8', 'Condicio_1': 'Condicio_1', 'Condicio_2': 'Condicio_2', 'Condicio_3': 'Condicio_3', 'Condicio_4': 'Condicio_4', 'Condicio_5': 'Condicio_5', 'Condicio_6': 'Condicio_6', 'Filtro Tip': 'Filtro Tip', 'Filtro Med': 'Filtro Med', 'Filtro Jor': 'Filtro Jor', });
lyr_Privados_5.set('fieldAliases', {'CLAVEESTAB': 'CLAVEESTAB', 'DEPENDENCI': 'DEPENDENCI', 'ENTORNO': 'ENTORNO', 'CALLE': 'CALLE', 'NRODIRECCI': 'NRODIRECCI', 'NOMBRE': 'NOMBRE', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', });
lyr_Distritos_1.set('fieldImages', {'objectid': '', 'departa': '', 'cabecer': '', 'provincia': '', 'fuente': '', 'fec_actual': '', 'fuente1': '', 'cod_depto': '', 'created_us': '', 'created_da': '', 'last_edite': '', 'last_edi_1': '', 'st_area_sh': '', 'st_length_': '', });
lyr_Contronos500m_3.set('fieldImages', {'id': '', 'cost_level': '', });
lyr_Publicos_4.set('fieldImages', {'Ciclo de C': '', 'Nº de Reg': '', 'Nº de Dis': '', 'Nombre de': '', 'Tipo de Or': '', 'Clave Prov': '', 'CUE': '', 'Nombre': '', 'Número': '', 'Latitud': '', 'Longitud': '', 'Medio': '', 'Nombre d_1': '', 'Jornada': '', 'Nombre d_2': '', 'Fecha de C': '', 'Matrícula': '', 'Condiciona': '', 'Nº de Sec': '', 'Nº de Car': '', 'Nº de Des': '', 'Desempeño': '', 'Desempe�_1': '', 'Desempe�_2': '', 'Desempe�_3': '', 'Secciones': '', 'Seccione_1': '', 'Seccione_2': '', 'Seccione_3': '', 'Seccione_4': '', 'Seccione_5': '', 'Seccione_6': '', 'Seccione_7': '', 'Matrícu_1': '', 'Matrícu_2': '', 'Matrícu_3': '', 'Matrícu_4': '', 'Matrícu_5': '', 'Matrícu_6': '', 'Matrícu_7': '', 'Matrícu_8': '', 'Condicio_1': '', 'Condicio_2': '', 'Condicio_3': '', 'Condicio_4': '', 'Condicio_5': '', 'Condicio_6': '', 'Filtro Tip': '', 'Filtro Med': '', 'Filtro Jor': '', });
lyr_Privados_5.set('fieldImages', {'CLAVEESTAB': '', 'DEPENDENCI': '', 'ENTORNO': '', 'CALLE': '', 'NRODIRECCI': '', 'NOMBRE': '', 'LATITUD': '', 'LONGITUD': '', });
lyr_Distritos_1.set('fieldLabels', {});
lyr_Contronos500m_3.set('fieldLabels', {});
lyr_Publicos_4.set('fieldLabels', {});
lyr_Privados_5.set('fieldLabels', {});
lyr_Privados_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
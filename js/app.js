// Especia Norte - Landing de pedidos con WhatsApp
// Configuración principal
const WHATSAPP_NUMBER = "5493813159106"; // modificar si cambia el número de contacto

// =====================
// Catálogo de productos
// =====================
const CATALOG = [
  {
    id: "l-nea-c-rnica-embutidos",
    name: "🥩 Línea cárnica / embutidos",
    items: [
      {
        code: "ESN-EMBUTIN-LIGADOR-P-EMB-X-1-KG",
        name: "EMBUTIN- LIGADOR P/EMB. X 1 KG",
        unit: "UNI",
        price: 1748.00
      },
      {
        code: "ESN-EMBUTIN-LIGADOR-P-EMB-X-10-KG",
        name: "EMBUTIN-LIGADOR P/EMB. X 10 KG.",
        unit: "UNI",
        price: 15640.00
      },
      {
        code: "ESN-INTEGRAL-DE-HAMBURGUESA-BERNES",
        name: "INTEGRAL DE HAMBURGUESA BERNES",
        unit: "KG",
        price: 5980.00
      },
      {
        code: "ESN-INTEGRAL-P-SALAME-X-1-200KG",
        name: "INTEGRAL P/ SALAME X 1,200KG.",
        unit: "KG",
        price: 5980.00
      },
      {
        code: "ESN-INTEGRAL-PARA-CHORIZO-BERNESA",
        name: "INTEGRAL PARA CHORIZO BERNESA",
        unit: "KG",
        price: 5980.00
      },
      {
        code: "ESN-INT-CHORIZOS-COLORADOS-X-1KG",
        name: "INT.CHORIZOS COLORADOS X 1KG",
        unit: "KG",
        price: 8096.00
      },
      {
        code: "ESN-INT-HAMBURG-15-SOB-X-25-GR",
        name: "INT.HAMBURG. 15 SOB X 25 GR",
        unit: "CJ",
        price: 7820.00
      },
      {
        code: "ESN-INT-HAMBURGUESA-X-25-GR",
        name: "INT.HAMBURGUESA X 25 GR",
        unit: "SOB",
        price: 644.00
      },
      {
        code: "ESN-INT-HAMBURGUESA-CALLIERI-X-1K",
        name: "INT HAMBURGUESA CALLIERI X 1K",
        unit: "KG",
        price: 9568.00
      },
      {
        code: "ESN-INT-P-CHORIZO-COMUN-X-1-KG",
        name: "INT.P/CHORIZO COMUN X 1 KG",
        unit: "KG",
        price: 7636.00
      },
      {
        code: "ESN-INT-P-CHORIZO-ESP-CALL-X-1-KG",
        name: "INT.P/CHORIZO ESP CALL X 1 KG",
        unit: "KG",
        price: 7820.00
      },
      {
        code: "ESN-INT-P-CHORIZO-ESPEC-X-5-KG",
        name: "INT.P/CHORIZO ESPEC. X 5 KG",
        unit: "KG",
        price: 35190.00
      },
      {
        code: "ESN-INT-P-MORCILLA-X-1-KG",
        name: "INT.P/ MORCILLA X 1 KG",
        unit: "KG",
        price: 7544.00
      },
      {
        code: "ESN-INT-P-SALCH-PARRIL-CALL-X-1-KG",
        name: "INT.P/SALCH.PARRIL.CALL X 1 KG",
        unit: "KG",
        price: 7268.00
      },
      {
        code: "ESN-INTEG-P-MILANESA-CALLIERI-X-KG-CON-HUEVO",
        name: "INTEG.P/MILANESA CALLIERI X KG CON HUEVO",
        unit: "KG",
        price: 12880.00
      },
      {
        code: "ESN-INTEG-P-MILANESA-CALLIERI-X-KG-SIN-HUEVO",
        name: "INTEG.P/MILANESA CALLIERI X KG SIN HUEVO",
        unit: "KG",
        price: 6348.00
      }
    ]
  },
  {
    id: "hierbas-y-hojas",
    name: "🌿 Hierbas y Hojas",
    items: [
      {
        code: "ESN-ADOBO-PARA-PIZZA",
        name: "ADOBO PARA PIZZA",
        unit: "KG.",
        price: 6440.00
      },
      {
        code: "ESN-ALBAHACA-EN-HOJAS",
        name: "ALBAHACA EN HOJAS",
        unit: "KG",
        price: 6440.00
      },
      {
        code: "ESN-CHIMICHURRI-FUERTE",
        name: "CHIMICHURRI FUERTE",
        unit: "KG.",
        price: 6440.00
      },
      {
        code: "ESN-CHIMICHURRI-SUAVE",
        name: "CHIMICHURRI SUAVE",
        unit: "KG.",
        price: 6440.00
      },
      {
        code: "ESN-ESTRAGON",
        name: "ESTRAGON",
        unit: "KG",
        price: 5888.00
      },
      {
        code: "ESN-LAUREL-EN-HOJAS",
        name: "LAUREL EN HOJAS",
        unit: "KG",
        price: 9660.00
      },
      {
        code: "ESN-LAUREL-MOLIDO",
        name: "LAUREL MOLIDO",
        unit: "KG",
        price: 6256.00
      },
      {
        code: "ESN-MENTA",
        name: "MENTA",
        unit: "KG",
        price: 5796.00
      },
      {
        code: "ESN-OREGANO-EN-HOJAS",
        name: "OREGANO EN HOJAS",
        unit: "KG.",
        price: 6624.00
      },
      {
        code: "ESN-PEREJIL-EN-HOJAS",
        name: "PEREJIL EN HOJAS",
        unit: "KG",
        price: 7820.00
      },
      {
        code: "ESN-PESTO",
        name: "PESTO",
        unit: "KG",
        price: 8004.00
      },
      {
        code: "ESN-PROVENZAL",
        name: "PROVENZAL",
        unit: "KG",
        price: 8004.00
      },
      {
        code: "ESN-ROMERO",
        name: "ROMERO",
        unit: "KG",
        price: 7728.00
      },
      {
        code: "ESN-SOPA-JULIANA",
        name: "SOPA JULIANA",
        unit: "KG",
        price: 7084.00
      },
      {
        code: "ESN-TOMILLO",
        name: "TOMILLO",
        unit: "KG",
        price: 7084.00
      }
    ]
  },
  {
    id: "pimentones-aj-es-condimentos-picantes",
    name: "🌶 Pimentones / Ajíes / Condimentos picantes",
    items: [
      {
        code: "ESN-AJI-CAYENA-AMARILLO",
        name: "AJI CAYENA AMARILLO",
        unit: "KG.",
        price: 6624.00
      },
      {
        code: "ESN-AJI-CAYENA-ROJO",
        name: "AJI CAYENA ROJO",
        unit: "KG.",
        price: 6624.00
      },
      {
        code: "ESN-AJI-MOLIDO",
        name: "AJI MOLIDO",
        unit: "KG.",
        price: 5520.00
      },
      {
        code: "ESN-AJI-MOLIDO-A-MORTERO",
        name: "AJI MOLIDO A MORTERO",
        unit: "KG.",
        price: 5980.00
      },
      {
        code: "ESN-AJI-PREMIUM",
        name: "AJI PREMIUM",
        unit: "KG.",
        price: 6624.00
      },
      {
        code: "ESN-PIMENTON-CLASE-UNICA",
        name: "PIMENTON CLASE UNICA",
        unit: "KG.",
        price: 3956.00
      },
      {
        code: "ESN-PIMENTON-ESCALERA",
        name: "PIMENTON ESCALERA",
        unit: "KG.",
        price: 4508.00
      },
      {
        code: "ESN-PIMENTON-ESENCIA",
        name: "PIMENTON ESENCIA",
        unit: "KG.",
        price: 6532.00
      },
      {
        code: "ESN-PIMENTON-EXTRA",
        name: "PIMENTON EXTRA",
        unit: "KG.",
        price: 5428.00
      },
      {
        code: "ESN-PIMENTON-SELECCIONADO",
        name: "PIMENTON SELECCIONADO",
        unit: "KG.",
        price: 4508.00
      }
    ]
  },
  {
    id: "semillas-pimientas-especias-finas",
    name: "🧂 Semillas / Pimientas / Especias finas",
    items: [
      {
        code: "ESN-ANIS-EN-GRANO",
        name: "ANIS EN GRANO",
        unit: "KG.",
        price: 9200.00
      },
      {
        code: "ESN-BERNECOL-EMULSIFICANTE",
        name: "BERNECOL-EMULSIFICANTE",
        unit: "KG",
        price: 7912.00
      },
      {
        code: "ESN-BERNESAL-SAL-DE-CURA",
        name: "BERNESAL - SAL DE CURA",
        unit: "KG",
        price: 1288.00
      },
      {
        code: "ESN-BICARBONATO-DE-SODIO",
        name: "BICARBONATO DE SODIO",
        unit: "KG",
        price: 3312.00
      },
      {
        code: "ESN-CLAVO-DE-OLOR-EN-GRANO",
        name: "CLAVO DE OLOR EN GRANO",
        unit: "KG.",
        price: 41400.00
      },
      {
        code: "ESN-CLAVO-DE-OLOR-MOLIDO",
        name: "CLAVO DE OLOR MOLIDO",
        unit: "KG.",
        price: 13800.00
      },
      {
        code: "ESN-COMINO-CHANCHERO",
        name: "COMINO CHANCHERO",
        unit: "KG",
        price: 5980.00
      },
      {
        code: "ESN-COMINO-EN-GRANO",
        name: "COMINO EN GRANO",
        unit: "KG.",
        price: 14720.00
      },
      {
        code: "ESN-COMINO-MOLIDO",
        name: "COMINO MOLIDO",
        unit: "KG.",
        price: 3128.00
      },
      {
        code: "ESN-COMINO-MOLIDO-ESPECIAL",
        name: "COMINO MOLIDO ESPECIAL",
        unit: "KG.",
        price: 5520.00
      },
      {
        code: "ESN-CONDIMENTO-MIXTO",
        name: "CONDIMENTO MIXTO",
        unit: "KG.",
        price: 2392.00
      },
      {
        code: "ESN-CORIANDRO-EN-GRANO",
        name: "CORIANDRO EN GRANO",
        unit: "KG.",
        price: 1748.00
      },
      {
        code: "ESN-CORIANDRO-MOLIDO",
        name: "CORIANDRO MOLIDO",
        unit: "KG.",
        price: 1932.00
      },
      {
        code: "ESN-CURCUMA-EN-POLVO",
        name: "CURCUMA EN POLVO",
        unit: "KG.",
        price: 6072.00
      },
      {
        code: "ESN-CURRY",
        name: "CURRY",
        unit: "KG",
        price: 5980.00
      },
      {
        code: "ESN-GLUTAMATO-AJINOMOTO",
        name: "GLUTAMATO (AJINOMOTO)",
        unit: "KG",
        price: 7636.00
      },
      {
        code: "ESN-HEMOGLOBINA-EN-POLVO",
        name: "HEMOGLOBINA EN POLVO",
        unit: "KG",
        price: 7360.00
      },
      {
        code: "ESN-HINOJO",
        name: "HINOJO",
        unit: "KG",
        price: 6127.20
      },
      {
        code: "ESN-JENGIBRE-ENTERO",
        name: "JENGIBRE ENTERO",
        unit: "KG",
        price: 9016.00
      },
      {
        code: "ESN-JENGIBRE-MOLIDO",
        name: "JENGIBRE MOLIDO",
        unit: "KG",
        price: 7452.00
      },
      {
        code: "ESN-MOSTAZA-EN-GRANO",
        name: "MOSTAZA EN GRANO",
        unit: "KG",
        price: 6072.00
      },
      {
        code: "ESN-MOSTAZA-MOLIDA",
        name: "MOSTAZA MOLIDA",
        unit: "KG",
        price: 6256.00
      },
      {
        code: "ESN-NT",
        name: "NT",
        unit: "UNI",
        price: 6440.00
      },
      {
        code: "ESN-PIMIENTA-ARABE",
        name: "PIMIENTA ARABE",
        unit: "KG.",
        price: 14812.00
      },
      {
        code: "ESN-PIMIENTA-BLANCA-ESPECIAL",
        name: "PIMIENTA BLANCA ESPECIAL",
        unit: "KG.",
        price: 14812.00
      },
      {
        code: "ESN-PIMIENTA-BLANCA-GRANO",
        name: "PIMIENTA BLANCA GRANO",
        unit: "KG.",
        price: 35420.00
      },
      {
        code: "ESN-PIMIENTA-BLANCA-MOLIDA",
        name: "PIMIENTA BLANCA MOLIDA",
        unit: "KG.",
        price: 6716.00
      },
      {
        code: "ESN-PIMIENTA-NEGRA-ESPECIAL",
        name: "PIMIENTA NEGRA ESPECIAL",
        unit: "KG.",
        price: 12880.00
      },
      {
        code: "ESN-PIMIENTA-NEGRA-GRANO",
        name: "PIMIENTA NEGRA GRANO",
        unit: "KG.",
        price: 19504.00
      },
      {
        code: "ESN-POLVO-DE-HORNEAR",
        name: "POLVO DE HORNEAR",
        unit: "KG",
        price: 8372.00
      },
      {
        code: "ESN-SAL-SULFITO",
        name: "SAL (SULFITO)",
        unit: "UNI",
        price: 7728.00
      },
      {
        code: "ESN-SALOX-CONSERVADOR-DE-COLOR",
        name: "SALOX-CONSERVADOR DE COLOR",
        unit: "KG",
        price: 7360.00
      },
      {
        code: "ESN-SOJABER-G",
        name: "SOJABER G",
        unit: "KG",
        price: 736.00
      }
    ]
  },
  {
    id: "frutas-secas",
    name: "🍇 Frutas secas",
    items: [
      {
        code: "ESN-CIRUELA-D-AGEN-132-154",
        name: "CIRUELA D AGEN 132/154",
        unit: "KG.",
        price: 6164.00
      },
      {
        code: "ESN-CIRUELA-D-AGEN-88-110",
        name: "CIRUELA D AGEN 88/110",
        unit: "KG.",
        price: 6532.00
      },
      {
        code: "ESN-CIRUELA-DESCAROZADAS",
        name: "CIRUELA DESCAROZADAS",
        unit: "KG.",
        price: 7820.00
      },
      {
        code: "ESN-MEDALLONES-DE-DURAZ-MEDIANOS",
        name: "MEDALLONES DE DURAZ. MEDIANOS",
        unit: "KG.",
        price: 13800.00
      },
      {
        code: "ESN-NUECES-PELADAS-BLANCAS",
        name: "NUECES PELADAS BLANCAS",
        unit: "KG.",
        price: 18400.00
      },
      {
        code: "ESN-NUEZ-MOSCADA-MEDIANA",
        name: "NUEZ MOSCADA MEDIANA",
        unit: "KG.",
        price: 41400.00
      },
      {
        code: "ESN-NUEZ-MOSCADA-MOLIDA",
        name: "NUEZ MOSCADA MOLIDA",
        unit: "KG.",
        price: 11040.00
      },
      {
        code: "ESN-NUEZ-MOSCADA-POR-UNIDAD",
        name: "NUEZ MOSCADA POR UNIDAD",
        unit: "UNI",
        price: 460.00
      },
      {
        code: "ESN-PASAS-DE-HIGOS",
        name: "PASAS DE HIGOS",
        unit: "KG",
        price: 9200.00
      },
      {
        code: "ESN-PASAS-DE-UVAS-N3",
        name: "PASAS DE UVAS N3",
        unit: "KG.",
        price: 3128.00
      },
      {
        code: "ESN-PASAS-DE-UVAS-N-3-X-5-KG",
        name: "PASAS DE UVAS Nº3 X 5 KG",
        unit: "BL.",
        price: 14260.00
      },
      {
        code: "ESN-PASAS-SULTANINAS-NEGRAS",
        name: "PASAS SULTANINAS NEGRAS",
        unit: "KG.",
        price: 5704.00
      },
      {
        code: "ESN-PASAS-SULTANINAS-NEGRAS-X-5-KG",
        name: "PASAS SULTANINAS NEGRAS X  5 KG",
        unit: "CJ.",
        price: 26220.00
      },
      {
        code: "ESN-PELONES-MEDIANOS",
        name: "PELONES MEDIANOS",
        unit: "KG.",
        price: 9660.00
      },
      {
        code: "ESN-PERAS-SECAS",
        name: "PERAS SECAS",
        unit: "KG.",
        price: 13064.00
      }
    ]
  },
  {
    id: "cocos-harinas-secos",
    name: "🥥 Cocos / Harinas / Secos",
    items: [
      {
        code: "ESN-CEBOLLA-EN-ESCAMAS",
        name: "CEBOLLA EN ESCAMAS",
        unit: "KG",
        price: 0.00
      } // este queda también en “a confirmar” más abajo, pero se puede editar si querés
    ]
  },
  {
    id: "postres-gelatinas-y-cacaos",
    name: "🍮 Postres, Gelatinas y Cacaos",
    items: [
      {
        code: "ESN-AZUCAR-IMPALPABLE",
        name: "AZUCAR IMPALPABLE",
        unit: "KG",
        price: 1472.00
      },
      {
        code: "ESN-CACAO-EN-POLVO-AMARGO",
        name: "CACAO EN POLVO AMARGO",
        unit: "KG",
        price: 8280.00
      },
      {
        code: "ESN-CACAO-EN-POLVO-DULCE",
        name: "CACAO EN POLVO DULCE",
        unit: "KG",
        price: 4600.00
      },
      {
        code: "ESN-CANELA-EN-RAMA-H2",
        name: "CANELA EN RAMA H2",
        unit: "KG.",
        price: 41400.00
      },
      {
        code: "ESN-CANELA-MOLIDA",
        name: "CANELA MOLIDA",
        unit: "KG.",
        price: 10580.00
      },
      {
        code: "ESN-CASCARILLA-DE-CACAO",
        name: "CASCARILLA DE CACAO",
        unit: "KG",
        price: 4140.00
      },
      {
        code: "ESN-FLAN-SABOR-VAINILLA",
        name: "FLAN SABOR VAINILLA",
        unit: "KG",
        price: 3680.00
      },
      {
        code: "ESN-GELATINA-SABORIZADA",
        name: "GELATINA SABORIZADA",
        unit: "KG",
        price: 4232.00
      },
      {
        code: "ESN-GELATINA-SIN-SABOR",
        name: "GELATINA SIN SABOR",
        unit: "KG",
        price: 21620.00
      },
      {
        code: "ESN-POSTRE-SABORIZADO",
        name: "POSTRE SABORIZADO",
        unit: "KG",
        price: 1656.00
      }
    ]
  },
  {
    id: "hilos-ovillos-y-accesorios",
    name: "🧵 Hilos, Ovillos y Accesorios",
    items: [
      {
        code: "ESN-HILO-BICOLOR-X-1-KG",
        name: "HILO BICOLOR x 1 KG.",
        unit: "UNI",
        price: 11408.00
      },
      {
        code: "ESN-HILO-BICOLOR-X-1-2-KG",
        name: "HILO BICOLOR x 1/2 KG.",
        unit: "UNI",
        price: 5980.00
      },
      {
        code: "ESN-HILO-CRUDO-X-300-GR-APROX",
        name: "HILO CRUDO x 300 GR. APROX.",
        unit: "UNI",
        price: 2760.00
      },
      {
        code: "ESN-HILO-CRUDO-X-500-GR-APROX",
        name: "HILO CRUDO X 500 Gr.APROX.",
        unit: "UNI",
        price: 4324.00
      },
      {
        code: "ESN-HILO-OVILLO-1-UNID-X-40-GR",
        name: "HILO OVILLO 1 UNID. x 40 GR.",
        unit: "UNI",
        price: 432.40
      },
      {
        code: "ESN-HILO-OVILLO-10-UNID-X-40-GR",
        name: "HILO OVILLO 10 UNID. x 40 GR.",
        unit: "UNI",
        price: 3956.00
      },
      {
        code: "ESN-HILO-PULIDO-AMAR-VDE-X-1-KG",
        name: "HILO PULIDO AMAR/VDE x 1 KG.",
        unit: "UNI",
        price: 10212.00
      },
      {
        code: "ESN-HILO-PULIDO-AMAR-VDE-X-1-2-KG",
        name: "HILO PULIDO AMAR/VDE x 1/2 KG.",
        unit: "UNI",
        price: 5336.00
      }
    ]
  },
  {
    id: "tripas-embutidos-especializados",
    name: "🥩 Tripas / Embutidos especializados",
    items: [
      {
        code: "ESN-TRIPAS-DE-CERDO-CAL-38-40",
        name: "TRIPAS DE CERDO CAL. 38/40",
        unit: "MAD",
        price: 26036.00
      },
      {
        code: "ESN-TRIPAS-DE-CERDO-CAL-42-44",
        name: "TRIPAS DE CERDO CAL. 42/44",
        unit: "MAD",
        price: 19964.00
      },
      {
        code: "ESN-TRIPAS-P-SALAME-SINT-CAL-45",
        name: "TRIPAS P/SALAME SINT. CAL. 45",
        unit: "MTS",
        price: 644.00
      },
      {
        code: "ESN-TRIPAS-SINT-C-23-OD",
        name: "TRIPAS SINT. C.23 OD",
        unit: "MAD",
        price: 6900.00
      },
      {
        code: "ESN-TRIPAS-VACUNAS-CAL-34-37-X-15M",
        name: "TRIPAS VACUNAS CAL34-37 X 15M",
        unit: "MAD",
        price: 4416.00
      },
      {
        code: "ESN-TRIPAS-VACUNAS-CAL-37-40-X-15M",
        name: "TRIPAS VACUNAS CAL.37-40 X 15M",
        unit: "MAD",
        price: 5244.00
      },
      {
        code: "ESN-TRIPON",
        name: "TRIPON",
        unit: "MAD",
        price: 1472.00
      }
    ]
  },
  {
    id: "l-quidos-vinagre-etc",
    name: "🍶 Líquidos (Vinagre, etc.)",
    items: [
      {
        code: "ESN-VINAGRE-X-5-LITROS",
        name: "VINAGRE x 5 LITROS",
        unit: "BID",
        price: 3220.00
      }
    ]
  },
  {
    id: "bolsas-envases-y-embalajes",
    name: "📦 Bolsas, Envases y Embalajes",
    items: [
      {
        code: "ESN-BOLSAS-10-X-20-CM",
        name: "BOLSAS 10 X 20 CM",
        unit: "UNI",
        price: 644.00
      },
      {
        code: "ESN-BOLSAS-12-X-25-CM",
        name: "BOLSAS 12 X 25 CM",
        unit: "UNI",
        price: 920.00
      },
      {
        code: "ESN-BOLSAS-15-X-25-CM",
        name: "BOLSAS 15 X 25 CM",
        unit: "UNI",
        price: 1104.00
      },
      {
        code: "ESN-CHALA-PARA-TAMALES-X-BOLSA",
        name: "CHALA PARA TAMALES X BOLSA",
        unit: "BL.",
        price: 73600.00
      },
      {
        code: "ESN-CHALA-PARA-TAMALES-X-UNIDAD",
        name: "CHALA PARA TAMALES X UNIDAD",
        unit: "UNI",
        price: 4600.00
      }
    ]
  },
  {
    id: "productos-con-precio-a-confirmar",
    name: "⚠️ Productos con precio a confirmar",
    items: [
      {
        code: "ESN-CEBOLLA-EN-ESCAMAS",
        name: "CEBOLLA EN ESCAMAS",
        unit: "KG",
        price: 0.00
      },
      {
        code: "ESN-HONGOS",
        name: "HONGOS",
        unit: "KG",
        price: 0.00
      },
      {
        code: "ESN-INDIAS-BATTER-X-1-KG",
        name: "INDIAS BATTER X 1 KG.",
        unit: "KG.",
        price: 0.00
      },
      {
        code: "ESN-INT-P-CHORIZO-DE-POLLO-X-1-KG-CALL",
        name: "INT. P/ CHORIZO DE POLLO X 1 KG CALL.",
        unit: "KG",
        price: 0.00
      }
    ]
  }
];

// Estado de la app
let currentCategoryId = CATALOG.length ? CATALOG[0].id : null;
const cart = new Map(); // key: code -> { code,name,unit,price,qty,categoryName }

// Utilidades
const $  = (sel, ctx=document) => ctx.querySelector(sel);
const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));

function formatPrice(n){
  // n en ARS, número
  return n.toLocaleString("es-AR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// =====================
// Render de categorías
// =====================
function renderCategories(){
  const cont = $("#categoryList");
  if (!cont) return;
  cont.innerHTML = "";
  CATALOG.forEach(cat => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "cat-btn";
    btn.textContent = cat.name;
    btn.dataset.id = cat.id;
    if (cat.id === currentCategoryId) btn.classList.add("active");
    btn.addEventListener("click", () => {
      currentCategoryId = cat.id;
      renderCategories();
      renderProducts();
    });
    cont.appendChild(btn);
  });
}

// =====================
// Render de productos
// =====================
function getCartItem(code){
  return cart.get(code) || null;
}

function setCartQty(item, qty){
  const key = item.code;
  const cur = getCartItem(key);
  if (qty <= 0){
    cart.delete(key);
  } else {
    cart.set(key, {
      code: item.code,
      name: item.name,
      unit: item.unit,
      price: item.price,
      categoryName: item.categoryName,
      qty
    });
  }
  renderProducts();
  renderCart();
}

function changeCartQty(item, delta){
  const cur = getCartItem(item.code);
  const newQty = Math.max(0, (cur?.qty || 0) + delta);
  setCartQty(item, newQty);
}

function renderProducts(){
  const cont = $("#productList");
  if (!cont) return;
  cont.innerHTML = "";

  const cat = CATALOG.find(c => c.id === currentCategoryId) || CATALOG[0];
  if (!cat) return;

  const title = $("#currentCategoryName");
  if (title) title.textContent = cat.name;

  if (!cat.items.length){
    cont.innerHTML = "<p class='muted'>No hay productos en esta categoría.</p>";
    return;
  }

  cat.items.forEach(prod => {
    const item = {
      ...prod,
      categoryName: cat.name
    };
    const row = document.createElement("article");
    row.className = "product-row";

    const main = document.createElement("div");
    main.className = "product-main";
    const h3 = document.createElement("h3");
    h3.textContent = prod.name;
    const unit = document.createElement("p");
    unit.className = "product-unit";
    unit.textContent = `Unidad: ${prod.unit}`;
    const price = document.createElement("p");
    price.className = "product-price";
    price.textContent = `$ ${formatPrice(prod.price)}`;
    main.append(h3, unit, price);

    const controls = document.createElement("div");
    controls.className = "product-controls";
    const minus = document.createElement("button");
    minus.type = "button";
    minus.textContent = "−";
    minus.className = "qty-btn";
    const qtySpan = document.createElement("span");
    qtySpan.className = "qty-label";
    const plus = document.createElement("button");
    plus.type = "button";
    plus.textContent = "+";
    plus.className = "qty-btn";

    const cur = getCartItem(prod.code);
    qtySpan.textContent = cur ? String(cur.qty) : "0";

    minus.addEventListener("click", () => changeCartQty(item, -1));
    plus.addEventListener("click", () => changeCartQty(item, +1));

    controls.append(minus, qtySpan, plus);

    row.append(main, controls);
    cont.appendChild(row);
  });
}

// =====================
// Render del carrito
// =====================
function renderCart(){
  const list = $("#cartList");
  const totalEl = $("#cartTotal");
  if (!list || !totalEl) return;

  list.innerHTML = "";
  const items = Array.from(cart.values());
  if (!items.length){
    list.innerHTML = "<li class='cart-empty'>Todavía no agregaste productos.</li>";
    totalEl.textContent = "$ 0,00";
    return;
  }

  let total = 0;
  items.forEach((it, idx) => {
    const li = document.createElement("li");
    li.className = "cart-item";
    const lineTotal = it.price * it.qty;
    total += lineTotal;
    li.innerHTML = `
      <div class="cart-main">
        <strong>${idx+1}. ${it.name}</strong>
        <span class="cart-cat">${it.categoryName}</span>
        <span class="cart-unit">Unidad: ${it.unit}</span>
      </div>
      <div class="cart-side">
        <span class="cart-qty">Cant: ${it.qty}</span>
        <span class="cart-price">$ ${formatPrice(it.price)}</span>
        <span class="cart-subtotal">Subt: $ ${formatPrice(lineTotal)}</span>
      </div>
    `;
    list.appendChild(li);
  });

  totalEl.textContent = `$ ${formatPrice(total)}`;
}

// =====================
// WhatsApp
// =====================
function buildWhatsAppMessage(){
  const name  = $("#inputName")?.value?.trim() || "-";
  const email = $("#inputEmail")?.value?.trim() || "-";
  const notes = $("#inputNotes")?.value?.trim();

  const items = Array.from(cart.values());
  if (!items.length){
    return `*Pedido Especia Norte*\n\n(Sin productos seleccionados aún)`;
  }

  let lines = [];
  lines.push("*Pedido Especia Norte*");
  lines.push("");
  lines.push(`Nombre: ${name}`);
  lines.push(`Contacto: ${email}`);
  if (notes) lines.push(`Notas: ${notes}`);
  lines.push("");

  let total = 0;
  items.forEach((it, idx) => {
    const lineTotal = it.price * it.qty;
    total += lineTotal;
    lines.push(`*${idx+1}.* ${it.name}`);
    lines.push(`Unidad: ${it.unit}`);
    lines.push(`Cantidad: ${it.qty}`);
    lines.push(`Precio unitario: $ ${formatPrice(it.price)}`);
    lines.push(`Subtotal: $ ${formatPrice(lineTotal)}`);
    lines.push("");
  });

  lines.push(`Total productos: ${items.length}`);
  const totalQty = items.reduce((a,b)=>a+b.qty,0);
  lines.push(`Total unidades: ${totalQty}`);
  lines.push(`Total general: $ ${formatPrice(total)}`);

  return lines.join("\n");
}

function sendWhatsApp(){
  const message = buildWhatsAppMessage();
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener");
}

function clearCart(){
  cart.clear();
  renderProducts();
  renderCart();
}

// =====================
// Init
// =====================
document.addEventListener("DOMContentLoaded", () => {
  // año footer
  const y = $("#year");
  if (y) y.textContent = String(new Date().getFullYear());

  renderCategories();
  renderProducts();
  renderCart();

  const btnWA = $("#btnWhatsApp");
  if (btnWA) btnWA.addEventListener("click", sendWhatsApp);
  const btnClr = $("#btnClearCart");
  if (btnClr) btnClr.addEventListener("click", clearCart);
});

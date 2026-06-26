// Especia Norte - PedidosYa Style + Bento Grid + Splash
// ===============================================
const WHATSAPP_NUMBER = "5493813159106"; 

// =====================
// Catálogo de productos
// =====================
const CATALOG = [
  {
    id: "l-nea-c-rnica-embutidos",
    name: "🥩 Línea cárnica / embutidos",
    image: "img/tripas.jfif", // Asignando imagen para el grid
    gridSize: "size-large",
    items: [
      { code: "ESN-EMBUTIN-LIGADOR-P-EMB-X-1-KG", name: "EMBUTIN- LIGADOR P/EMB. X 1 KG", unit: "UNI", price: 1748.0 },
      { code: "ESN-EMBUTIN-LIGADOR-P-EMB-X-10-KG", name: "EMBUTIN-LIGADOR P/EMB. X 10 KG.", unit: "UNI", price: 15640.0 },
      { code: "ESN-INTEGRAL-DE-HAMBURGUESA-BERNES", name: "INTEGRAL DE HAMBURGUESA BERNES", unit: "KG", price: 5980.0 },
      { code: "ESN-INTEGRAL-P-SALAME-X-1-200KG", name: "INTEGRAL P/ SALAME X 1,200KG.", unit: "KG", price: 5980.0 },
      { code: "ESN-INTEGRAL-PARA-CHORIZO-BERNESA", name: "INTEGRAL PARA CHORIZO BERNESA", unit: "KG", price: 5980.0 },
      { code: "ESN-INT-CHORIZOS-COLORADOS-X-1KG", name: "INT.CHORIZOS COLORADOS X 1KG", unit: "KG", price: 8096.0 },
      { code: "ESN-INT-HAMBURG-15-SOB-X-25-GR", name: "INT.HAMBURG. 15 SOB X 25 GR", unit: "CJ", price: 7820.0 },
      { code: "ESN-INT-HAMBURGUESA-X-25-GR", name: "INT.HAMBURGUESA X 25 GR", unit: "SOB", price: 644.0 },
      { code: "ESN-INT-HAMBURGUESA-CALLIERI-X-1K", name: "INT HAMBURGUESA CALLIERI X 1K", unit: "KG", price: 9568.0 },
      { code: "ESN-INT-P-CHORIZO-COMUN-X-1-KG", name: "INT.P/CHORIZO COMUN X 1 KG", unit: "KG", price: 7636.0 },
      { code: "ESN-INT-P-CHORIZO-ESP-CALL-X-1-KG", name: "INT.P/CHORIZO ESP CALL X 1 KG", unit: "KG", price: 7820.0 },
      { code: "ESN-INT-P-CHORIZO-ESPEC-X-5-KG", name: "INT.P/CHORIZO ESPEC. X 5 KG", unit: "KG", price: 35190.0 },
      { code: "ESN-INT-P-MORCILLA-X-1-KG", name: "INT.P/ MORCILLA X 1 KG", unit: "KG", price: 7544.0 },
      { code: "ESN-INT-P-SALCH-PARRIL-CALL-X-1-KG", name: "INT.P/SALCH.PARRIL.CALL X 1 KG", unit: "KG", price: 7268.0 },
      { code: "ESN-INTEG-P-MILANESA-CALLIERI-X-KG-CON-HUEVO", name: "INTEG.P/MILANESA CALLIERI X KG CON HUEVO", unit: "KG", price: 12880.0 },
      { code: "ESN-INTEG-P-MILANESA-CALLIERI-X-KG-SIN-HUEVO", name: "INTEG.P/MILANESA CALLIERI X KG SIN HUEVO", unit: "KG", price: 6348.0 }
    ]
  },
  {
    id: "hierbas-y-hojas",
    name: "🌿 Hierbas y Hojas",
    image: "img/especias.jfif",
    gridSize: "size-normal",
    items: [
      { code: "ESN-ADOBO-PARA-PIZZA", name: "ADOBO PARA PIZZA", unit: "KG.", price: 6440.0 },
      { code: "ESN-ALBAHACA-EN-HOJAS", name: "ALBAHACA EN HOJAS", unit: "KG", price: 6440.0 },
      { code: "ESN-CHIMICHURRI-FUERTE", name: "CHIMICHURRI FUERTE", unit: "KG.", price: 6440.0 },
      { code: "ESN-CHIMICHURRI-SUAVE", name: "CHIMICHURRI SUAVE", unit: "KG.", price: 6440.0 },
      { code: "ESN-ESTRAGON", name: "ESTRAGON", unit: "KG", price: 5888.0 },
      { code: "ESN-LAUREL-EN-HOJAS", name: "LAUREL EN HOJAS", unit: "KG", price: 9660.0 },
      { code: "ESN-LAUREL-MOLIDO", name: "LAUREL MOLIDO", unit: "KG", price: 6256.0 },
      { code: "ESN-MENTA", name: "MENTA", unit: "KG", price: 5796.0 },
      { code: "ESN-OREGANO-EN-HOJAS", name: "OREGANO EN HOJAS", unit: "KG.", price: 6624.0 },
      { code: "ESN-PEREJIL-EN-HOJAS", name: "PEREJIL EN HOJAS", unit: "KG", price: 7820.0 },
      { code: "ESN-PESTO", name: "PESTO", unit: "KG", price: 8004.0 },
      { code: "ESN-PROVENZAL", name: "PROVENZAL", unit: "KG", price: 8004.0 },
      { code: "ESN-ROMERO", name: "ROMERO", unit: "KG", price: 7728.0 },
      { code: "ESN-SOPA-JULIANA", name: "SOPA JULIANA", unit: "KG", price: 7084.0 },
      { code: "ESN-TOMILLO", name: "TOMILLO", unit: "KG", price: 7084.0 }
    ]
  },
  {
    id: "pimentones-aj-es-condimentos-picantes",
    name: "🌶 Ajíes / Picantes",
    image: "img/condimentos.jfif",
    gridSize: "size-normal",
    items: [
      { code: "ESN-AJI-CAYENA-AMARILLO", name: "AJI CAYENA AMARILLO", unit: "KG.", price: 6624.0 },
      { code: "ESN-AJI-CAYENA-ROJO", name: "AJI CAYENA ROJO", unit: "KG.", price: 6624.0 },
      { code: "ESN-AJI-MOLIDO", name: "AJI MOLIDO", unit: "KG.", price: 5520.0 },
      { code: "ESN-AJI-MOLIDO-A-MORTERO", name: "AJI MOLIDO A MORTERO", unit: "KG.", price: 5980.0 },
      { code: "ESN-AJI-PREMIUM", name: "AJI PREMIUM", unit: "KG.", price: 6624.0 },
      { code: "ESN-PIMENTON-CLASE-UNICA", name: "PIMENTON CLASE UNICA", unit: "KG.", price: 3956.0 },
      { code: "ESN-PIMENTON-ESCALERA", name: "PIMENTON ESCALERA", unit: "KG.", price: 4508.0 },
      { code: "ESN-PIMENTON-ESENCIA", name: "PIMENTON ESENCIA", unit: "KG.", price: 6532.0 },
      { code: "ESN-PIMENTON-EXTRA", name: "PIMENTON EXTRA", unit: "KG.", price: 5428.0 },
      { code: "ESN-PIMENTON-SELECCIONADO", name: "PIMENTON SELECCIONADO", unit: "KG.", price: 4508.0 }
    ]
  },
  {
    id: "semillas-pimientas-especias-finas",
    name: "🧂 Semillas / Pimientas",
    image: "img/mezclas.jfif",
    gridSize: "size-tall",
    items: [
      { code: "ESN-ANIS-EN-GRANO", name: "ANIS EN GRANO", unit: "KG.", price: 9200.0 },
      { code: "ESN-BERNECOL-EMULSIFICANTE", name: "BERNECOL-EMULSIFICANTE", unit: "KG", price: 7912.0 },
      { code: "ESN-BERNESAL-SAL-DE-CURA", name: "BERNESAL - SAL DE CURA", unit: "KG", price: 1288.0 },
      { code: "ESN-BICARBONATO-DE-SODIO", name: "BICARBONATO DE SODIO", unit: "KG", price: 3312.0 },
      { code: "ESN-CLAVO-DE-OLOR-EN-GRANO", name: "CLAVO DE OLOR EN GRANO", unit: "KG.", price: 41400.0 },
      { code: "ESN-CLAVO-DE-OLOR-MOLIDO", name: "CLAVO DE OLOR MOLIDO", unit: "KG.", price: 13800.0 },
      { code: "ESN-COMINO-CHANCHERO", name: "COMINO CHANCHERO", unit: "KG", price: 5980.0 },
      { code: "ESN-COMINO-EN-GRANO", name: "COMINO EN GRANO", unit: "KG.", price: 14720.0 },
      { code: "ESN-COMINO-MOLIDO", name: "COMINO MOLIDO", unit: "KG.", price: 3128.0 },
      { code: "ESN-COMINO-MOLIDO-ESPECIAL", name: "COMINO MOLIDO ESPECIAL", unit: "KG.", price: 5520.0 },
      { code: "ESN-CONDIMENTO-MIXTO", name: "CONDIMENTO MIXTO", unit: "KG.", price: 2392.0 },
      { code: "ESN-CORIANDRO-EN-GRANO", name: "CORIANDRO EN GRANO", unit: "KG.", price: 1748.0 },
      { code: "ESN-CORIANDRO-MOLIDO", name: "CORIANDRO MOLIDO", unit: "KG.", price: 1932.0 },
      { code: "ESN-CURCUMA-EN-POLVO", name: "CURCUMA EN POLVO", unit: "KG.", price: 6072.0 },
      { code: "ESN-CURRY", name: "CURRY", unit: "KG", price: 5980.0 },
      { code: "ESN-GLUTAMATO-AJINOMOTO", name: "GLUTAMATO (AJINOMOTO)", unit: "KG", price: 7636.0 },
      { code: "ESN-HEMOGLOBINA-EN-POLVO", name: "HEMOGLOBINA EN POLVO", unit: "KG", price: 7360.0 },
      { code: "ESN-HINOJO", name: "HINOJO", unit: "KG", price: 6127.2 },
      { code: "ESN-JENGIBRE-ENTERO", name: "JENGIBRE ENTERO", unit: "KG", price: 9016.0 },
      { code: "ESN-JENGIBRE-MOLIDO", name: "JENGIBRE MOLIDO", unit: "KG", price: 7452.0 },
      { code: "ESN-MOSTAZA-EN-GRANO", name: "MOSTAZA EN GRANO", unit: "KG", price: 6072.0 },
      { code: "ESN-MOSTAZA-MOLIDA", name: "MOSTAZA MOLIDA", unit: "KG", price: 6256.0 },
      { code: "ESN-PIMIENTA-ARABE", name: "PIMIENTA ARABE", unit: "KG.", price: 14812.0 },
      { code: "ESN-PIMIENTA-BLANCA-ESPECIAL", name: "PIMIENTA BLANCA ESPECIAL", unit: "KG.", price: 14812.0 },
      { code: "ESN-PIMIENTA-BLANCA-GRANO", name: "PIMIENTA BLANCA GRANO", unit: "KG.", price: 35420.0 },
      { code: "ESN-PIMIENTA-BLANCA-MOLIDA", name: "PIMIENTA BLANCA MOLIDA", unit: "KG.", price: 6716.0 },
      { code: "ESN-PIMIENTA-NEGRA-ESPECIAL", name: "PIMIENTA NEGRA ESPECIAL", unit: "KG.", price: 12880.0 },
      { code: "ESN-PIMIENTA-NEGRA-GRANO", name: "PIMIENTA NEGRA GRANO", unit: "KG.", price: 19504.0 },
      { code: "ESN-POLVO-DE-HORNEAR", name: "POLVO DE HORNEAR", unit: "KG", price: 8372.0 },
      { code: "ESN-SAL-SULFITO", name: "SAL (SULFITO)", unit: "UNI", price: 7728.0 },
      { code: "ESN-SALOX-CONSERVADOR-DE-COLOR", name: "SALOX-CONSERVADOR DE COLOR", unit: "KG", price: 7360.0 },
      { code: "ESN-SOJABER-G", name: "SOJABER G", unit: "KG", price: 736.0 }
    ]
  },
  {
    id: "frutas-secas",
    name: "🍇 Frutas secas",
    image: "img/dulcebatata.jpg",
    gridSize: "size-normal",
    items: [
      { code: "ESN-CIRUELA-D-AGEN-132-154", name: "CIRUELA D AGEN 132/154", unit: "KG.", price: 6164.0 },
      { code: "ESN-CIRUELA-D-AGEN-88-110", name: "CIRUELA D AGEN 88/110", unit: "KG.", price: 6532.0 },
      { code: "ESN-CIRUELA-DESCAROZADAS", name: "CIRUELA DESCAROZADAS", unit: "KG.", price: 7820.0 },
      { code: "ESN-MEDALLONES-DE-DURAZ-MEDIANOS", name: "MEDALLONES DE DURAZ. MEDIANOS", unit: "KG.", price: 13800.0 },
      { code: "ESN-NUECES-PELADAS-BLANCAS", name: "NUECES PELADAS BLANCAS", unit: "KG.", price: 18400.0 },
      { code: "ESN-NUEZ-MOSCADA-MEDIANA", name: "NUEZ MOSCADA MEDIANA", unit: "KG.", price: 41400.0 },
      { code: "ESN-NUEZ-MOSCADA-MOLIDA", name: "NUEZ MOSCADA MOLIDA", unit: "KG.", price: 11040.0 },
      { code: "ESN-NUEZ-MOSCADA-POR-UNIDAD", name: "NUEZ MOSCADA POR UNIDAD", unit: "UNI", price: 460.0 },
      { code: "ESN-PASAS-DE-HIGOS", name: "PASAS DE HIGOS", unit: "KG", price: 9200.0 },
      { code: "ESN-PASAS-DE-UVAS-N3", name: "PASAS DE UVAS N3", unit: "KG.", price: 3128.0 },
      { code: "ESN-PASAS-DE-UVAS-N-3-X-5-KG", name: "PASAS DE UVAS Nº3 X 5 KG", unit: "BL.", price: 14260.0 },
      { code: "ESN-PASAS-SULTANINAS-NEGRAS", name: "PASAS SULTANINAS NEGRAS", unit: "KG.", price: 5704.0 },
      { code: "ESN-PASAS-SULTANINAS-NEGRAS-X-5-KG", name: "PASAS SULTANINAS NEGRAS X  5 KG", unit: "CJ.", price: 26220.0 },
      { code: "ESN-PELONES-MEDIANOS", name: "PELONES MEDIANOS", unit: "KG.", price: 9660.0 },
      { code: "ESN-PERAS-SECAS", name: "PERAS SECAS", unit: "KG.", price: 13064.0 }
    ]
  },
  {
    id: "postres-gelatinas-y-cacaos",
    name: "🍮 Postres y Cacaos",
    image: "img/condimentos.jfif",
    gridSize: "size-normal",
    items: [
      { code: "ESN-AZUCAR-IMPALPABLE", name: "AZUCAR IMPALPABLE", unit: "KG", price: 1472.0 },
      { code: "ESN-CACAO-EN-POLVO-AMARGO", name: "CACAO EN POLVO AMARGO", unit: "KG", price: 8280.0 },
      { code: "ESN-CACAO-EN-POLVO-DULCE", name: "CACAO EN POLVO DULCE", unit: "KG", price: 4600.0 },
      { code: "ESN-CANELA-EN-RAMA-H2", name: "CANELA EN RAMA H2", unit: "KG.", price: 41400.0 },
      { code: "ESN-CANELA-MOLIDA", name: "CANELA MOLIDA", unit: "KG.", price: 10580.0 },
      { code: "ESN-CASCARILLA-DE-CACAO", name: "CASCARILLA DE CACAO", unit: "KG", price: 4140.0 },
      { code: "ESN-FLAN-SABOR-VAINILLA", name: "FLAN SABOR VAINILLA", unit: "KG", price: 3680.0 },
      { code: "ESN-GELATINA-SABORIZADA", name: "GELATINA SABORIZADA", unit: "KG", price: 4232.0 },
      { code: "ESN-GELATINA-SIN-SABOR", name: "GELATINA SIN SABOR", unit: "KG", price: 21620.0 },
      { code: "ESN-POSTRE-SABORIZADO", name: "POSTRE SABORIZADO", unit: "KG", price: 1656.0 }
    ]
  },
  {
    id: "aceitunas-liquidos-embalajes",
    name: "📦 Otros",
    image: "img/aceitunas.webp",
    gridSize: "size-large",
    items: [
      { code: "ESN-VINAGRE-X-5-LITROS", name: "VINAGRE x 5 LITROS", unit: "BID", price: 3220.0 },
      { code: "ESN-BOLSAS-10-X-20-CM", name: "BOLSAS 10 X 20 CM", unit: "UNI", price: 644.0 },
      { code: "ESN-BOLSAS-12-X-25-CM", name: "BOLSAS 12 X 25 CM", unit: "UNI", price: 920.0 },
      { code: "ESN-BOLSAS-15-X-25-CM", name: "BOLSAS 15 X 25 CM", unit: "UNI", price: 1104.0 },
      { code: "ESN-CHALA-PARA-TAMALES-X-BOLSA", name: "CHALA PARA TAMALES X BOLSA", unit: "BL.", price: 73600.0 },
      { code: "ESN-CHALA-PARA-TAMALES-X-UNIDAD", name: "CHALA PARA TAMALES X UNIDAD", unit: "UNI", price: 4600.0 },
      { code: "ESN-HILO-BICOLOR-X-1-KG", name: "HILO BICOLOR x 1 KG.", unit: "UNI", price: 11408.0 },
      { code: "ESN-HILO-CRUDO-X-300-GR-APROX", name: "HILO CRUDO x 300 GR. APROX.", unit: "UNI", price: 2760.0 }
    ]
  }
];

// Estado de la app
const cart = new Map(); // key: code -> item details
let searchTerm = "";

// Utils
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

function formatPrice(n) {
  return n.toLocaleString("es-AR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

// =====================
// Inicialización UI
// =====================
function initUI() {
  
  // Splash Screen Logic
  setTimeout(() => {
    const splash = $("#splashScreen");
    if(splash) {
      splash.classList.add("hidden");
      setTimeout(() => splash.remove(), 1000); // Remove from DOM after transition
    }
  }, 2200); // 2.2 seconds display

  renderCategoriesGrid();
  renderProducts();
  
  // Buscador
  const searchInput = $("#searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchTerm = e.target.value.trim().toLowerCase();
      renderProducts();
    });
  }

  // Cart Modal
  const cartBtn = $("#floatingCartBtn");
  const modal = $("#checkoutModal");
  const closeBtn = $("#closeModalBtn");

  if (cartBtn) cartBtn.addEventListener("click", () => modal.classList.add("active"));
  if (closeBtn) closeBtn.addEventListener("click", () => modal.classList.remove("active"));
  
  // Cerrar al clickear fuera
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("active");
    });
  }

  // Enviar pedido
  const btnWA = $("#btnWhatsApp");
  if (btnWA) btnWA.addEventListener("click", sendWhatsApp);

  // Vaciar carrito
  const btnClr = $("#btnClearCart");
  if (btnClr) btnClr.addEventListener("click", () => {
    cart.clear();
    modal.classList.remove("active");
    renderProducts();
    updateCartUI();
  });
}

// =====================
// Render Categorías (Bento Grid)
// =====================
function renderCategoriesGrid() {
  const grid = $("#categoriesGrid");
  if (!grid) return;
  grid.innerHTML = "";

  CATALOG.forEach(cat => {
    const card = document.createElement("div");
    card.className = `cat-card ${cat.gridSize || ""}`;
    
    // Background Image
    const img = document.createElement("img");
    img.className = "cat-card-img";
    img.src = cat.image || "img/especias.jfif";
    img.alt = cat.name;

    // Overlay gradient
    const overlay = document.createElement("div");
    overlay.className = "cat-card-overlay";

    // Text
    const span = document.createElement("span");
    span.textContent = cat.name;

    card.appendChild(img);
    card.appendChild(overlay);
    card.appendChild(span);

    // Click to scroll
    card.addEventListener("click", () => {
      const section = $(`#cat-${cat.id}`);
      if (section) {
        // Offset for header height
        const y = section.getBoundingClientRect().top + window.scrollY - 80; 
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });

    grid.appendChild(card);
  });
}

// =====================
// Render Lista Productos
// =====================
function renderProducts() {
  const cont = $("#productList");
  if (!cont) return;
  cont.innerHTML = "";

  let hasResults = false;

  CATALOG.forEach(cat => {
    const filteredItems = cat.items.filter(prod => {
      if (!searchTerm) return true;
      return prod.name.toLowerCase().includes(searchTerm) || 
             prod.code.toLowerCase().includes(searchTerm);
    });

    if (filteredItems.length === 0) return;
    
    hasResults = true;

    const section = document.createElement("div");
    section.className = "category-group";
    section.id = `cat-${cat.id}`;

    const title = document.createElement("h2");
    title.className = "category-group-title";
    title.textContent = cat.name;
    section.appendChild(title);

    filteredItems.forEach(prod => {
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

      const curItem = cart.get(prod.code);
      qtySpan.textContent = curItem ? curItem.qty : "0";

      minus.addEventListener("click", () => changeCartQty(prod, cat.name, -1, qtySpan));
      plus.addEventListener("click", () => changeCartQty(prod, cat.name, +1, qtySpan));

      controls.append(minus, qtySpan, plus);
      row.append(main, controls);
      section.appendChild(row);
    });

    cont.appendChild(section);
  });

  if (!hasResults) {
    cont.innerHTML = "<div class='empty-msg'>No se encontraron productos para tu búsqueda.</div>";
  }
}

// =====================
// Gestión Carrito
// =====================
function changeCartQty(prod, categoryName, delta, qtySpan) {
  const code = prod.code;
  const cur = cart.get(code);
  const currentQty = cur ? cur.qty : 0;
  let newQty = currentQty + delta;
  
  if (newQty <= 0) {
    cart.delete(code);
    qtySpan.textContent = "0";
  } else {
    cart.set(code, {
      code: prod.code,
      name: prod.name,
      unit: prod.unit,
      price: prod.price,
      categoryName: categoryName,
      qty: newQty
    });
    qtySpan.textContent = newQty.toString();
  }
  
  qtySpan.style.transform = "scale(1.3)";
  setTimeout(() => qtySpan.style.transform = "scale(1)", 150);

  updateCartUI();
}

function updateCartUI() {
  const floatingBtn = $("#floatingCartBtn");
  const qtyBadge = $("#floatingCartQty");
  const totalText = $("#floatingCartTotal");
  
  const modalList = $("#cartList");
  const modalTotal = $("#cartTotalValue");

  let totalQty = 0;
  let totalPrice = 0;
  const items = Array.from(cart.values());

  items.forEach(it => {
    totalQty += it.qty;
    totalPrice += (it.price * it.qty);
  });

  if (totalQty > 0) {
    floatingBtn.classList.add("visible");
    qtyBadge.textContent = totalQty;
    totalText.textContent = `$ ${formatPrice(totalPrice)}`;
  } else {
    floatingBtn.classList.remove("visible");
  }

  if (modalList) {
    modalList.innerHTML = "";
    if (items.length === 0) {
      modalList.innerHTML = "<li class='cart-item'><div class='cart-item-main'><span class='cart-item-name'>Carrito vacío</span></div></li>";
    } else {
      items.forEach(it => {
        const li = document.createElement("li");
        li.className = "cart-item";
        li.innerHTML = `
          <div class="cart-item-main">
            <span class="cart-item-name">${it.name}</span>
            <span class="cart-item-meta">${it.categoryName} • Unid: ${it.unit}</span>
          </div>
          <div class="cart-item-side">
            <span class="cart-item-price">${it.qty} x $ ${formatPrice(it.price)}</span>
          </div>
        `;
        modalList.appendChild(li);
      });
    }
  }

  if (modalTotal) {
    modalTotal.textContent = `$ ${formatPrice(totalPrice)}`;
  }
}

// =====================
// WhatsApp Checkout
// =====================
function buildWhatsAppMessage() {
  const name = $("#inputName")?.value?.trim() || "-";
  const address = $("#inputAddress")?.value?.trim() || "Retira";
  const notes = $("#inputNotes")?.value?.trim();

  const items = Array.from(cart.values());
  if (!items.length) {
    return `*Pedido Especia Norte*\n\n(Sin productos)`;
  }

  let lines = [];
  lines.push(`*NUEVO PEDIDO - ESPECIA NORTE* 🚚`);
  lines.push(`---------------------------------`);
  lines.push(`*Cliente:* ${name}`);
  lines.push(`*Envío / Retiro:* ${address}`);
  if (notes) lines.push(`*Notas:* ${notes}`);
  lines.push(`---------------------------------`);
  lines.push(`*DETALLE DEL PEDIDO:*`);
  lines.push("");

  let total = 0;
  items.forEach((it) => {
    const lineTotal = it.price * it.qty;
    total += lineTotal;
    lines.push(`🔸 ${it.qty}x ${it.name} (${it.unit})`);
    lines.push(`   Subtotal: $ ${formatPrice(lineTotal)}`);
  });

  lines.push(`---------------------------------`);
  lines.push(`*Total a Pagar:* $ ${formatPrice(total)}`);
  
  return lines.join("\n");
}

function sendWhatsApp() {
  const items = Array.from(cart.values());
  if (!items.length) {
    alert("Por favor, agrega productos a tu pedido primero.");
    return;
  }
  
  const name = $("#inputName")?.value?.trim();
  if (!name) {
    alert("Por favor, ingresa tu nombre.");
    $("#inputName").focus();
    return;
  }

  const message = buildWhatsAppMessage();
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener");
}

// Init
document.addEventListener("DOMContentLoaded", initUI);

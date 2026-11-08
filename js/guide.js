// Guía de identificación (dentro del Modo Repaso), para plantas o aves.
// Los datos están en temas/<tema>/guia.js (identificationGuide, plantas)
// y temas/<tema>/guia-aves.js (birdIdentificationGuide, aves).
// Las especies se buscan en speciesList por su campo sci.

function guideEsc(texto) {
  return String(texto)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// kind: "plant" o "bird"
function renderIdGuide(kind = "plant") {
  const esAve = kind === "bird";
  const guia = esAve
    ? (typeof birdIdentificationGuide !== "undefined" ? birdIdentificationGuide : null)
    : (typeof identificationGuide !== "undefined" ? identificationGuide : null);
  const icono = esAve ? "🦅" : "🌿";
  const titulo = esAve ? "Guía de identificación de aves" : "Guía de identificación de plantas";

  document.getElementById("studyChooser").style.display = "none";
  const container = document.getElementById("studyContent");
  container.innerHTML = "";
  container.style.display = "block";

  const backBtn = document.createElement("button");
  backBtn.className = "btn-back study-back";
  backBtn.textContent = "← Secciones";
  backBtn.onclick = showStudyChooser;
  container.appendChild(backBtn);

  if (!guia) {
    container.insertAdjacentHTML("beforeend", `<p class="guide-note">Esta guía todavía no está disponible para este tema.</p>`);
    return;
  }

  let html = `
    <h2 class="study-section-title">🔎 ${titulo}</h2>
    <p class="guide-intro">${guideEsc(guia.intro)}</p>
    <div class="guide-params">
      ${guia.parametros.map(p => `
        <div class="guide-param">
          <h3>${guideEsc(p.titulo)}</h3>
          <p>${guideEsc(p.texto)}</p>
        </div>`).join("")}
    </div>
    <div class="study-toolbar">
      <button class="btn-back" onclick="setAllGroups(true)">Expandir todo</button>
      <button class="btn-back" onclick="setAllGroups(false)">Plegar todo</button>
    </div>
  `;

  guia.grupos.forEach(grupo => {
    html += guideGroupHtml(grupo, icono);
  });

  if (guia.sinParecidos && guia.sinParecidos.length) {
    html += `
      <div class="guide-param guide-alone">
        <h3>Sin parecidos claros</h3>
        ${guia.sinParecidos.map(s => {
          const sp = speciesList.find(x => x.sci === s.sci);
          const nombre = sp
            ? `<strong>${guideEsc(sp.de[0])}</strong> (${guideEsc(sp.es)})`
            : `<strong>${guideEsc(s.sci)}</strong>`;
          return `<p>${nombre}: ${guideEsc(s.nota)}</p>`;
        }).join("")}
      </div>`;
  }

  container.insertAdjacentHTML("beforeend", html);
}

function guideGroupHtml(grupo, icono) {
  const sps = grupo.especies.map(sci => speciesList.find(s => s.sci === sci) || null);

  const head = sps.map((sp, i) => {
    if (!sp) return `<th class="guide-col">${guideEsc(grupo.especies[i])}</th>`;
    return `
      <th class="guide-col">
        <div class="img-thumb-container" data-guide-sci="${sp.sci}" style="margin: 0 auto 6px auto;">
          <img class="cell-img" src="${sp.fixedImg}" alt="${guideEsc(sp.de[0])}" loading="lazy" onerror="handleFixedImgError(this, '${sp.sci}')">
          <span class="zoom-hint">🔍</span>
        </div>
        <div class="species-de">${guideEsc(sp.de[0])}</div>
        <div class="guide-sci">${guideEsc(sp.sci)}</div>
      </th>`;
  }).join("");

  const filas = grupo.filas.map(fila => `
    <tr class="${fila.clave ? "guide-key-row" : ""}">
      <th class="guide-rasgo">${guideEsc(fila.rasgo)}</th>
      ${fila.valores.map(v => `<td>${guideEsc(v)}</td>`).join("")}
    </tr>`).join("");

  return `
    <details class="study-group" open>
      <summary class="group-title">
        <span>${icono} ${guideEsc(grupo.titulo)}</span>
        <span class="group-meta">(${grupo.especies.length} especies)<span class="group-chevron">▾</span></span>
      </summary>
      <p class="guide-group-intro">${guideEsc(grupo.porQue)}</p>
      <div class="table-container">
        <table class="comp-table guide-table">
          <thead>
            <tr>
              <th class="guide-rasgo"></th>
              ${head}
            </tr>
          </thead>
          <tbody>${filas}</tbody>
        </table>
      </div>
    </details>`;
}

// Al tocar una foto de la guía se abre en grande, igual que en el repaso normal
document.addEventListener("click", (e) => {
  const thumb = e.target.closest("[data-guide-sci]");
  if (!thumb) return;
  const sp = speciesList.find(s => s.sci === thumb.dataset.guideSci);
  if (!sp) return;
  openModal(sp.fixedImg, `${sp.de[0]} (${sp.es})`, sp.trait, sp.mnemo);
});

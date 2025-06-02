const riesgos = {
fin1: "   Posible insuficiencia de recaudo de cartera por falta de recursos económicos de los deudores.",
fin2: "  Fondos insuficientes para cubrir sus obligaciones financieras y para financiar sus operaciones.",
fin3: "    Cambios en las tasas de interés de sus obligaciones financieras.",
fin4: "    Cambio en las tasas de cambio de países a las cuales exporta que puede afectar de manera positiva o negativa los ingresos.",
fin5: "    El aumento de precios puede afectar los costos de producción de Bavaria, especialmente si no puede trasladar esos costos a los precios de venta. ",
fin6: "    Sobrecapacidad en la industria que pueda generar una competencia feroz y presiones sobre los precios.",
fin7: "   Alta competitividad, con grandes jugadores como Heineken que disminuya la porción en el mercado.",
fin8: "   Cambios en las preferencias de los consumidores, lo que podría afectar las ventas de Bavaria. ",
fin9: "    Cambios en leyes o regulaciones (como impuestos al alcohol o restricciones publicitarias) pueden afectar las operaciones o los márgenes de Bavaria.",
fin10: "    Escándalos, mala calidad de productos, o problemas ambientales pueden dañar la imagen de la marca y afectar las ventas.",

ope1: "    Fallas en la maquinaria como el mal funcionamiento de equipos de producción, causando retrasos y pérdidas de producto.",
ope2: "    Escasez de materias primas lo que puede resultar en la dificultad para obtener ingredientes clave (cebada, lúpulo, etc.) a tiempo y al precio adecuado.",
ope3: "    Defectos en el producto como problemas de calidad en la cerveza, generando rechazos y pérdidas económicas.",
ope4: "    Incumplimiento de normas sanitarias lo que puede llevar a sanciones por no cumplir con las regulaciones de higiene y seguridad alimentaria.",
ope5: "    Paro de producción como huelgas, accidentes o problemas imprevistos que interrumpen la producción.",
ope6: "    Retrasos en la entrega como los problemas logísticos que impiden la distribución oportuna de la cerveza.",
ope7: "    Daños en el transporte como averías durante el traslado de la mercancía, generando pérdidas de producto.",
ope8: "    Robos o pérdidas de inventario como hurtos de mercancía en almacenes o durante el transporte.",
ope9: "    Incumplimiento de proveedores es probable que los proveedores que no cumplan con los plazos o las especificaciones acordadas.",
ope10: "    Gestión ineficiente del inventario como el Exceso o la escasez de existencias, generando costos adicionales o pérdidas de ventas.",

leg1: "    Incumplimiento de leyes laborales lo que puede llevar a multas y demandas por violaciones a leyes de salarios mínimos, horas extras, seguridad laboral, discriminación, o acoso.",
leg2: "    Violaciones de leyes ambientales como sanciones por contaminación, manejo inadecuado de residuos, o incumplimiento de permisos ambientales.",
leg3: "    Incumplimiento de leyes de protección al consumidor como demandas por publicidad engañosa, productos defectuosos, o prácticas comerciales desleales.",
leg4: "    Violaciones de leyes de propiedad intelectual como demandas por infracción de patentes, marcas registradas, o derechos de autor",
leg5: "    Incumplimiento de leyes tributarias como multas, intereses y sanciones por errores en la declaración de impuestos, o evasión fiscal.",
leg6: "    Incumplimiento de regulaciones de seguridad como sanciones por no cumplir con las normas de seguridad para productos, instalaciones o procesos.",
leg7: "    Incumplimiento contractual como demandas por incumplimiento de obligaciones contractuales, causando pérdidas económicas para la otra parte. ",
leg8: "    Disputas contractuales como costos legales y pérdidas económicas derivadas de interpretaciones ambiguas o desacuerdos en los contratos.",
leg9: "    Falta de confidencialidad como pérdidas financieras y daños a la reputación por divulgación de información confidencial.",
leg10: "    Responsabilidad por productos defectuosos como demandas por lesiones o daños causados por productos defectuosos.",

tec1: "    Dependencia de sistemas automatizados de producción como la automatización en las plantas de producción ya que puede interrumpir la producción y afectar la cadena de suministro.",
tec2: "    Obsolescencia de equipos tecnológicos es posible que los equipos actuales se queden obsoletos con las nuevas tecnologías, requiriendo inversiones constantes. ",
tec3: "    Vulnerabilidades en ciberseguridad por el aumento de amenazas cibernéticas ya que representa un riesgo para la integridad de los sistemas y la protección de datos. ",
tec4: "    La integración de sistemas ERP ya que la implementación y mantenimiento de estos sistemas son complejos y presentan desafíos en la integración y operación. ",
tec5: "    Gestión de datos y análisis ya que la recopilación y el análisis de grandes volúmenes de datos requieren sistemas robustos; errores pueden llevar a decisiones empresariales inadecuadas.",
tec6: "    Fallas en sistemas de logística y distribución ya que las interrupciones en los sistemas tecnológicos que gestionan la logística pueden afectar la entrega oportuna de productos. ",
tec7: "    Dependencia de proveedores tecnológicos externos, esta dependencia de terceros para servicios tecnológicos puede exponer a la empresa a problemas críticos.",
tec8: "    Actualizaciones y mantenimiento de software, existe la necesidad constante de mantener actualizado el software para evitar vulnerabilidades y esto puede generar interrupciones si no se gestiona adecuadamente.",
tec9: "    Capacitación del personal en nuevas tecnologías ya que la falta de las capacitaciones puede limitar la eficacia de las herramientas implementadas.",
tec10: "    La implementación de inteligencia artificial puede presentar riesgos si los algoritmos no están bien diseñados o supervisados.",

rep1: "    La falta de transparencia sobre procesos y decisiones puede generar desconfianza entre los consumidores y el público.",
rep2: "    El compromiso de la empresa con causas sociales es un factor clave en la percepción pública. Un bajo nivel de implicación social puede afectar negativamente la reputación.",
rep3: "    El trato ético a los empleados, la seguridad laboral y las condiciones de trabajo son fundamentales. Cualquier conflicto laboral o falta de derechos puede dañar la imagen.",
rep4: "    Las empresas que no aplican prácticas sostenibles o que son acusadas de greenwashing pueden perder la confianza pública.",
rep5: "    La ética empresarial afecta la percepción del público. Cualquier caso de corrupción o mala conducta puede tener efectos devastadores en la reputación.",
rep6: "    La percepción sobre la efectividad, ética y valores de los líderes de la empresa influye en la imagen pública.",
rep7: "     Las empresas que promueven la diversidad y la inclusión suelen gozar de una buena reputación, mientras que la falta de estas puede ser motivo de críticas.",
rep8: "     Ser reconocido con premios de calidad, innovación o responsabilidad social mejora significativamente la percepción de la marca.",
rep9: "    La calidad constante y alta de los productos es crucial. Los fallos o problemas de calidad generan rápidamente desconfianza en la marca.",
rep10: "     Las condiciones laborales en las fábricas, el salario justo y el trato humano son factores reputacionales importantes.",

amb1: "    Escasez de agua.",
amb2: "    Contaminación de fuentes hídricas.",
amb3: "    Generación excesiva de CO₂ y huella de carbono.",
amb4: "    Aumento del precio de insumos por cambio climático.",
amb5: "    Fenómenos extremos (El Niño / La Niña).",
amb6: "    Variabilidad climática",
amb7: "    Residuos sólidos mal gestionados.",
amb8: "    Desastres naturales.",
amb9: "    Contaminación cruzada en procesos de reciclaje de botellas.",
amb10: "    Contaminación por transporte.",

};
function agregarRiesgo(checkbox) {
  const tabla = document.querySelector('#tablaRiesgos tbody');
  const area = checkbox.dataset.area;
  const id = checkbox.dataset.id;
  const riesgoTexto = riesgos[id];

  if (checkbox.checked) {
    const fila = document.createElement('tr');
    fila.setAttribute('data-id', id);

    fila.innerHTML = `
      <td>${area}</td>
      <td>${riesgoTexto}</td>
      <td><input type="number" min="1" max="5" value="1" onchange="calcularNivel(this)"></td>
      <td><input type="number" min="1" max="5" value="1" onchange="calcularNivel(this)"></td>
      <td class="nivel">1</td>
      <td class="color bajo">Bajo</td>
      <td><input type="text" placeholder="Escribe el plan de acción..."></td>
    `;
    tabla.appendChild(fila);
    calcularNivel(fila.querySelector('input'));
  } else {
    const fila = tabla.querySelector(`tr[data-id="${id}"]`);
    if (fila) tabla.removeChild(fila);
  }
}

function calcularNivel(input) {
  const fila = input.closest('tr');
  const prob = parseInt(fila.children[2].children[0].value) || 1;
  const imp = parseInt(fila.children[3].children[0].value) || 1;
  const nivel = prob * imp;

  const celdaNivel = fila.querySelector('.nivel');
  celdaNivel.textContent = nivel;

  const celdaColor = fila.querySelector('.color');
  celdaColor.className = 'color';

  if (nivel === 25) {
    celdaColor.textContent = 'Alto';
    celdaColor.classList.add('alto');
  } else if (nivel >= 15) {
    celdaColor.textContent = 'Alto';
    celdaColor.classList.add('alto');
  } else if (nivel >= 6) {
    celdaColor.textContent = 'Medio';
    celdaColor.classList.add('medio');
  } else {
    celdaColor.textContent = 'Bajo';
    celdaColor.classList.add('bajo');
  }
}

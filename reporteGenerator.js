export function generarHTMLReporte(data) {
    // Genera las filas de la tabla con numeración automática
    const filas = data.trabajos.map((t, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${t.orden}</td>
            <td>${t.detalle}</td>
            <td>${t.repuestos}</td>
        </tr>
    `).join('');

    return `
    <div class="header" style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #333; padding-bottom: 20px;">
        <div>
            <h1>TALLER DE MOTOS - MORA</h1>
            <p><strong>Período:</strong> ${data.periodo}</p>
            <p><strong>Mecánico:</strong> ${data.mecanico} | <strong>Total M.O.:</strong> Bs ${data.totalMO}</p>
        </div>
    </div>

    <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <thead>
            <tr style="background-color: #f2f2f2;">
                <th style="padding: 10px; border-bottom: 2px solid #333; text-align: left;">N°</th>
                <th style="padding: 10px; border-bottom: 2px solid #333; text-align: left;">N° de Orden</th>
                <th style="padding: 10px; border-bottom: 2px solid #333; text-align: left;">Detalle del trabajo</th>
                <th style="padding: 10px; border-bottom: 2px solid #333; text-align: left;">Repuestos (Detalle y Costos)</th>
            </tr>
        </thead>
        <tbody>
            ${filas}
            <tr>
                <td colspan="3" style="text-align: right; padding: 10px;"><strong>TOTAL REPUESTOS:</strong></td>
                <td style="padding: 10px;"><strong>Bs ${data.totalRepuestos}</strong></td>
            </tr>
            <tr>
                <td colspan="3" style="text-align: right; padding: 10px;"><strong>TOTAL GENERAL:</strong></td>
                <td style="padding: 10px;"><strong>Bs ${data.totalGeneral}</strong></td>
            </tr>
        </tbody>
    </table>
    `;
}

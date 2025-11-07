'use client';
import { useState } from 'react';

export default function VerificarInscripcion() {
  const [cedula, setCedula] = useState('');
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);

  const ACTION_NAME = 'mandarina_verificar_inscripcion';
  const ENDPOINT = 'https://mandarinas.10kindependenciadeambato.com/wp-admin/admin-ajax.php';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResultado(null);

    try {
      const ced = (cedula || '').replace(/\D/g, '');
      if (!ced) {
        setResultado({ ok: false, error: 'Ingresa un número de cédula válido.' });
        setLoading(false);
        return;
      }

      const body = new FormData();
      body.append('action', ACTION_NAME);
      body.append('api_key', 'M4nd4r1n4!2025#8K');
      body.append('cedula', ced);

      const res = await fetch(ENDPOINT, { method: 'POST', body });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = await res.json();

      // 🔴 aquí va el cambio
      if (data.ok) {
        const etapa = data.etapa ?? data.estado ?? '';
        setResultado({
          ok: true,
          nombre: data.nombre || '',
          categoria: data.categoria || '',
          etapa,
          cedula: data.cedula || ced,
          celular: data.celular || '',
          email: data.email || '',
          ciudad: data.ciudad || '',
          edad: data.edad ?? '',
          metodoRegistro: data.metodoRegistro || '',
          valor: typeof data.valor === 'number' ? data.valor : null,
        });
      } else {
        setResultado({
          ok: false,
          error: data?.message || data?.error || 'No se encontró la inscripción',
        });
      }
    } catch (err) {
      console.error(err);
      setResultado({ ok: false, error: 'Error de conexión con el servidor' });
    } finally {
      setLoading(false);
    }
  };

  const fmtUSD = (n) =>
    typeof n === 'number'
      ? new Intl.NumberFormat('es-EC', { style: 'currency', currency: 'USD' }).format(n)
      : '';

  return (
    <section className="verificar-section" id="verificar">
      <div className="verificar-grid">
        <div className="verificar-card">
          <h2 className="verificar-title">VERIFICAR INSCRIPCIÓN</h2>
          <p className="verificar-sub">
            Consulta tu registro de manera rápida y segura.<br />
            Ingresa tu número de cédula tal como lo usaste en la inscripción.
          </p>

          <form className="verificar-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Ej: 1104685932"
              value={cedula}
              onChange={(e) => setCedula(e.target.value)}
              required
              inputMode="numeric"
            />
            <button type="submit" disabled={loading}>
              {loading ? 'Verificando...' : 'Verificar'}
            </button>
          </form>

          {resultado && (
            <div className={`resultado-card ${resultado.ok ? 'ok' : 'error'}`}>
              {resultado.ok ? (
                <>
                  <h3>✅ Inscripción encontrada</h3>

                  <p><strong>Nombre:</strong> {resultado.nombre}</p>
                  <p><strong>Categoría:</strong> {resultado.categoria}</p>

                  <p className={`etapa-text ${resultado.etapa === 'Pago Solicitado' ? 'alerta-etapa' : ''}`}>
                    <strong>Etapa:</strong> {resultado.etapa || '—'}
                  </p>

                  {resultado.etapa === 'Pago Solicitado' && (
                    <div className="alerta-box">
                      ⚠️ Tu inscripción está pendiente de pago.<br />
                      Para realizar tu pago <b>comunícate con soporte</b> o deberás volver a inscribirte sin descuento.
                      <br />
                      <a
                        className="btn-whatsapp"
                        href="https://wa.me/593995040437?text=Hola,%20quiero%20completar%20mi%20pago%20para%20la%208K"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        📲 Comunícate con Soporte vía WhatsApp
                      </a>
                    </div>
                  )}

                  <p><strong>Cédula:</strong> {resultado.cedula}</p>
                  {resultado.celular && <p><strong>Celular:</strong> {resultado.celular}</p>}
                  {resultado.email && <p><strong>Email:</strong> {resultado.email}</p>}
                  {resultado.ciudad && <p><strong>Ciudad:</strong> {resultado.ciudad}</p>}
                  {resultado.edad !== '' && <p><strong>Edad:</strong> {resultado.edad}</p>}
                  {resultado.metodoRegistro && (
                    <p><strong>Método de registro:</strong> {resultado.metodoRegistro}</p>
                  )}
                  {resultado.valor != null && (
                    <p><strong>Valor:</strong> {fmtUSD(resultado.valor)}</p>
                  )}
                  <p>¡Nos vemos el día de la carrera! 🎉</p>
                </>
              ) : (
                <>
                  <h3>❌ No encontramos tu inscripción</h3>
                  <p>
                    {resultado.error || 'Verifica que tu número de cédula sea correcto.'}<br />
                    Si aún no te registras, usa el botón “¡Inscríbete Online!” en la parte superior.
                  </p>
                </>
              )}

              <p className="soporte-text">
                Si tus datos no corresponden o ves un error, comunícate con soporte:
              </p>
              <a
                className="btn-whatsapp"
                href="https://wa.me/593995040437"
                target="_blank"
                rel="noopener noreferrer"
              >
                📲 Comunícate con Soporte
              </a>
            </div>
          )}
        </div>

        <div className="verificar-img">
          <img
            src="/assets/imgs/page/informacion/10k.webp"
            alt="8K Ruta de las Mandarinas – Evento deportivo en Patate"
          />
        </div>
      </div>
    </section>
  );
}

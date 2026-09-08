import type { CartItem } from "./cart";

export interface CheckoutPayload {
  items: CartItem[];
  correo: string;
  ciudad: string;
  direccion: string;
}

/**
 * TODO: sin pasarela de pago ni transportadora confirmadas todavía.
 * Cuando el cliente las defina, esta función debe llamar a la pasarela
 * real (por ejemplo Wompi o PayU) y crear el envío con el transportador
 * elegido. Por ahora solo registra el intento y simula una confirmación.
 */
export async function confirmarPedido(
  payload: CheckoutPayload,
): Promise<{ ok: true }> {
  // TODO: reemplazar esta simulación por la integración real.
  console.info("[checkout] Pedido simulado (sin proveedor real):", payload);
  return { ok: true };
}

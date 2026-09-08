export interface CartItem {
  nombre: string;
  color: string;
  cantidad: number;
}

let items: CartItem[] = [];
const listeners = new Set<() => void>();

export function addItem(item: CartItem) {
  items = [...items, item];
  notify();
}

export function getItems(): CartItem[] {
  return items;
}

export function clearItems() {
  items = [];
  notify();
}

export function subscribe(fn: () => void) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

function notify() {
  listeners.forEach((fn) => fn());
}

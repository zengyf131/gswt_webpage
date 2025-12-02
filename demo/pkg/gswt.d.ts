/* tslint:disable */
/* eslint-disable */

export function run_web(): void;

/**
 * Entry point for web workers
 */
export function wasm_thread_entry_point(ptr: number): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly run_web: () => void;
  readonly wasm_thread_entry_point: (a: number) => void;
  readonly wasm_bindgen__convert__closures_____invoke__h7bd54683eb20a42e: (a: number, b: number, c: any) => void;
  readonly wasm_bindgen__closure__destroy__h7e3013d758341c8f: (a: number, b: number) => void;
  readonly wasm_bindgen__convert__closures_____invoke__h0700e43b2e455dc9: (a: number, b: number, c: any) => void;
  readonly wasm_bindgen__closure__destroy__h1c179544e76695bf: (a: number, b: number) => void;
  readonly wasm_bindgen__convert__closures________invoke__hc690ab62d91f2d31: (a: number, b: number, c: any) => void;
  readonly wasm_bindgen__closure__destroy__h47b7625fbed957c9: (a: number, b: number) => void;
  readonly wasm_bindgen__convert__closures_____invoke__h59f95601a7443d35: (a: number, b: number, c: any, d: any) => void;
  readonly wasm_bindgen__convert__closures_____invoke__ha5cbb93cf7dc8b2c: (a: number, b: number) => void;
  readonly wasm_bindgen__convert__closures_____invoke__hcc778fcf2737c721: (a: number, b: number) => void;
  readonly wasm_bindgen__closure__destroy__h627ba34c15a67772: (a: number, b: number) => void;
  readonly wasm_bindgen__convert__closures_____invoke__h2fde40964b056338: (a: number, b: number, c: any, d: any) => void;
  readonly memory: WebAssembly.Memory;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __externref_table_alloc: () => number;
  readonly __wbindgen_externrefs: WebAssembly.Table;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_thread_destroy: (a?: number, b?: number, c?: number) => void;
  readonly __wbindgen_start: (a: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput, memory?: WebAssembly.Memory, thread_stack_size?: number }} module - Passing `SyncInitInput` directly is deprecated.
* @param {WebAssembly.Memory} memory - Deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput, memory?: WebAssembly.Memory, thread_stack_size?: number } | SyncInitInput, memory?: WebAssembly.Memory): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput>, memory?: WebAssembly.Memory, thread_stack_size?: number }} module_or_path - Passing `InitInput` directly is deprecated.
* @param {WebAssembly.Memory} memory - Deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput>, memory?: WebAssembly.Memory, thread_stack_size?: number } | InitInput | Promise<InitInput>, memory?: WebAssembly.Memory): Promise<InitOutput>;

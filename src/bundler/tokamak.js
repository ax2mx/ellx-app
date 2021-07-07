import { allSettled } from 'conclure/combinators';
import { transform } from './cjs';
import resolveId from './resolve_id';
import memoize from './memoize_flow';

export default ({ fetchModule, logger }, requireGraph = {}) => {

  const loadCached = memoize(load, Infinity, requireGraph);

  function* load(url) {
    const { url: finalUrl, text } = yield fetchModule(url);

    if (finalUrl !== url) {
      return finalUrl;
    }

    return { id: url, code: text };
  }

  function* loadModule(url, baseUrl, loadStack = []) {
    const id = resolveId(url, baseUrl);

    try {
      const node = yield loadCached(id);

      if (typeof node === 'string') {
        return loadModule(node, null, loadStack);
      }

      if (loadStack.includes(id)) {
        // Circular reference
        return node;
      }

      if (!node.imports) {
        Object.assign(node, {
          imports: {},
          required: [],
          ...transform(node.code)     // node.code is either esm, umd or cjs
        });
      }

      loadStack = loadStack.concat(id);

      yield allSettled(Object.keys(node.imports).concat(node.required || [])
        .map(module => loadModule(module, id, loadStack)),
      );

      return node;
    }
    catch (error) {
      const { loc, parserError: e } = error;
      const message = [
        loc && loc.file,
        e && e.loc && `${e.loc.line}:${e.loc.column}`,
        error
      ].filter(Boolean).join(' ');

      logger('info', message);

      return {
        id,
        code: `throw new Error(${JSON.stringify(message)})`,
        imports: {}
      };
    }
  }

  return loadModule;
}
import { warn } from '@vue/runtime-dom';
export * from '@vue/runtime-dom';

// This entry exports the runtime only, and is built as
const compile = () => {
    if ((process.env.NODE_ENV !== 'production')) {
        warn(`Runtime compilation is not supported in this build of Vue.` +
            ( ` Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`
                ) /* should not happen */);
    }
};

export { compile };

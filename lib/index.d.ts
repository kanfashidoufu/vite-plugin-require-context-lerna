import { Plugin } from 'vite';
type PluginOptions = {
    /**
     * The base path of your project used in require.context. Default to be `process.cwd()`
     */
    projectBasePath?: string;
    /**
     * The default RegExp used in `require.context` if the third parameter of `require.context` is not specified. Default to be `/^.*$/`
     */
    defaultRegExp?: RegExp;
};
declare const _default: (options?: PluginOptions) => Plugin;
export default _default;

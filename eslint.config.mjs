// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  rules: {
    '@stylistic/semi': 'off',
    'vue/first-attribute-linebreak': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-indent': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    '@stylistic/quote-props': 'off',
  },
});

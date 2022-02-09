import '../theme/globalStyles';
import ThemeConfig from '../theme'

export const decorators = [
  (Story) => (
    <ThemeConfig>
      <Story />
    </ThemeConfig>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
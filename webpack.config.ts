import path from 'path';
import { buildWebpackConfig } from './webpack/buildWebpackConfig';
import { BuildEnvType, BuildPathsType } from './webpack/types/config';

const paths: BuildPathsType = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  build: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html'),
  src: path.resolve(__dirname, 'src'),
};

export default (env: BuildEnvType) => {
  const mode = env.mode || 'development';
  const PORT = env.port || 3000;

  const isDev = mode === 'development';

  return buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });
};

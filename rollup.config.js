// Rollup plugins
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

export default {
  entry: 'index.js',    //需要打包的文件
  dest: 'build/main.min.js',  //打包后的文件
  format: 'iife',       // iife / cjs
  sourceMap: 'inline',  //debug代码时有用，线上环境设置为false
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    babel({
      compact: true, // 事实上，只要不为auto就不会警告
      exclude: 'node_modules/**',
    }),
    (process.env.NODE_ENV === 'production' && uglify()),
    serve(),
    livereload(),
  ],
};

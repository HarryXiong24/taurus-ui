import { Plugin } from 'vite';

const fileRegex = /\.(md)$/;

const vitePluginMd = (): Plugin => {
  return {
    //插件名字
    name: 'vite-plugin-md',
    transform(src, id) {
      //判断是不是md结尾的文件
      if (fileRegex.test(id)) {
        return {
          code: `export default ${JSON.stringify(src)}`,
          map: null,
        };
      }
    },
  };
};

export default vitePluginMd;

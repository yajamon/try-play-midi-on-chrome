
var requireConfig:RequireConfig = {
    baseUrl: "../js",
    paths: {
        'react': '../vendor/react',
        'react-dom': '../vendor/react-dom',
        'domReady': '../vendor/ready',
    }
};
require.config(requireConfig);

require(['router'],function(){
});

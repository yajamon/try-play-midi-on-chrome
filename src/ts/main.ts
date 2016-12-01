
var requireConfig:RequireConfig = {
    baseUrl: "../js",
    paths: {
        'react': '../vendor/react',
        'react-dom': '../vendor/react-dom',
        'react-router': '../vendor/ReactRouter',
        'domReady': '../vendor/ready',
    }
};
require.config(requireConfig);

require(['router'],function(){
});

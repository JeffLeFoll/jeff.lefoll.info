module.exports = {
        options: {
            svg: {
                viewBox: '0 0 100 100',
                xmlns: 'http://www.w3.org/2000/svg'
            }
        },
        default:{
            files: {
                '<%= staticDir %>/svg/icons.svg':['src/assets/svgs/*.svg']
            }
        }
};
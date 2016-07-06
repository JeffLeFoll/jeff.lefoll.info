import memoize from 'lodash/function/memoize';

export default function () {
    "nginject";
    return memoize(function (input, tailleGroupBy) {
        var tableauGroupé = [];
        var début = 0;
        var fin = 0;

        for(var i = 0; i < input.length / tailleGroupBy; i++) {

            fin += tailleGroupBy;

            var tableauTemp = input.slice(début, fin);
            tableauGroupé.push(tableauTemp);
            
            début += tailleGroupBy;
        }

        return tableauGroupé;
    });
}

module.exports = {
    GroupBy: function (array, f) {
        const groups = {};
        array.forEach(function (o) {
            const group = f(o);
            groups[group] = groups[group] || [];
            groups[group].push(o);
        });
        // return Object.keys(groups).map(function (group) {
        //     return groups[group];
        // });
        return groups;
    }
}
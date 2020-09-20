// You should implement your task here.

module.exports = function towelSort(matrix) {
    return !matrix
        ? []
        : matrix.reduce((acc, item, index) => {
              if (index % 2 === 0) return acc.concat(item);
              else {
                  for (let i = item.length - 1; i >= 0; i--) acc.push(item[i]);
                  return acc;
              }
          }, []);
};

window.onload = function () {
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // a
    var odd_values = values.filter(value => (value % 2 == 1));
    console.log(odd_values);

    // b
    var num_divi_25 = values.filter(value => (value % 2 == 0 || value % 5 == 0))
    console.log(num_divi_25)

    // c
    var num_divi_3s = values.filter(value => (value % 9 == 0))
    console.log(num_divi_3s)

    // d
    var newValues = values.filter(value => (value % 5 == 0))
    var sum_of = newValues.reduce((total, newValue) => {
        return total + newValue * newValue
    }, 0)
    console.log(sum_of)

}

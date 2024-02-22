export const convertArrayTo2DArray = <T>(array: T[], countColumn: number): T[][] => {
    const newArray: T[][] = [];
    for (let index = 0; index < countColumn; index++) newArray.push([]);
    let columnIndexArray = 0;

    for (let index = 0; index < array.length; index++) {
        if (columnIndexArray < countColumn) {
            newArray[columnIndexArray].push(array[index]);
            columnIndexArray += 1;
        } else columnIndexArray = 0;
    }

    return newArray;
};

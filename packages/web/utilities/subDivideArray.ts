const subDivideArray = (array: any[], size: number = 3): any[][] =>
  array.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / size);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

export default subDivideArray;

// Source: https://stackoverflow.com/questions/8495687/split-array-into-chunks

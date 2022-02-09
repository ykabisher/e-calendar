const trendsUtils = require('./trendsResult.json');

const linearRegression = (y, x) => {
    var lr = {}; var n = y.length; var sum_x = 0; var sum_y = 0; var sum_xy = 0; var sum_xx = 0; var sum_yy = 0;

    for (var i = 0; i < y.length; i++) {

        sum_x += x[i];
        sum_y += y[i];
        sum_xy += (x[i] * y[i]);
        sum_xx += (x[i] * x[i]);
        sum_yy += (y[i] * y[i]);
    }

    lr['slope'] = (n * sum_xy - sum_x * sum_y) / (n * sum_xx - sum_x * sum_x);
    lr['intercept'] = (sum_y - lr.slope * sum_x) / n;
    lr['r2'] = Math.pow((n * sum_xy - sum_x * sum_y) / Math.sqrt((n * sum_xx - sum_x * sum_x) * (n * sum_yy - sum_y * sum_y)), 2);

    return lr;

}

//     var up_y1 = [1, 2, 3, 4];
// var up_x1 = [1, 2, 3, 4];

// var lr = linearRegression(up_y1, up_x1);



export const createTrendObject = (name, trendsResponse, period, country, categoriesArray, description = '') => {
    if (!name || !trendsResponse) {
        throw new Error('no name or trendsResponse')
    }
    const { timelineData, slope } = convertTrendsData(trendsResponse.default.timelineData);
    let growthPercent = 100 * timelineData[timelineData.length - 1].value / timelineData[0].value;
    if (timelineData[timelineData.length - 1].value < timelineData[0].value) {
        growthPercent = -growthPercent;
    }
    const initialObject = {
        values: {},
        name: name.toLowerCase(),
        category: categoriesArray,
        description,
        country
    }

    initialObject.values[period.dbKey] = {
        lastUpdated: new Date().getTime(),
        slope,
        growthPercent,
        volume: null,
        timelineData
    }

    return initialObject;
}

const convertTrendsData = (trendsResponse) => {
    const timelineData = [];
    const yValues = [];
    const xValues = [];
    trendsResponse.forEach((element, i) => {
        timelineData.push({
            time: Number(element.time * 1000),
            value: element.value[0],
        });
        yValues.push(element.value[0])
        xValues.push(i);
    });
    console.log(timelineData);
    const lr = linearRegression(yValues, xValues);
    console.log(`lr.slope: ${lr.slope},lr.intercept: ${lr.slope},lr.r2: ${lr.r2}`)
    return { timelineData, slope: lr.slope }
}
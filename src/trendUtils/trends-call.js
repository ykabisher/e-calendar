const googleTrends = require('google-trends-api');
const sub = require('date-fns/sub')

export const TIME_PERIOD = {
  DAY: {
    name: 'DAY',
    dbKey: 'day'
  },
  WEEK: {
    name: 'WEEK',
    dbKey: 'week'
  },
  MONTH: {
    name: 'MONTH',
    dbKey: 'month'
  },
  THREE_MONTHS: {
    name: 'THREE_MONTHS',
    dbKey: 'threeMonths'
  },
  YEAR: {
    name: 'YEAR',
    dbKey: 'year'
  },
  TWO_YEARS: {
    name: 'TWO_YEARS',
    dbKey: 'twoYears'
  },
  FIVE_YEARS: {
    name: 'FIVE_YEARS',
    dbKey: 'fiveYears'
  }
}

export const COUNTRY_CODE = {
  US: 'US',
  UK: 'UK'
}

const MS_IN_HOUR = 1000 * 60 * 60;
const MS_IN_DAY = MS_IN_HOUR * 24;
const MS_IN_MONTH = MS_IN_DAY * 24;

const getStartTimeFrameByTimePeriod = (period) => {
  if (period === TIME_PERIOD.MONTH) {
    return sub(new Date(), { months: 1 })
  } else if (period === TIME_PERIOD.YEAR) {
    return sub(new Date(), {
      years: 1,
    })
  } else if (period === TIME_PERIOD.TWO_YEARS) {
    return sub(new Date(), {
      years: 2
    })
  } else if (period === TIME_PERIOD.FIVE_YEARS) {
    return sub(new Date(), {
      years: 5,
    })
  }
}

export const getGoogleTrend = (trendName, country = 'US', period = TIME_PERIOD.MONTH) => {
  return new Promise((resolve, reject) => {
    googleTrends.interestOverTime({
      keyword: [trendName],
      startTime: getStartTimeFrameByTimePeriod(period),
      endTime: new Date(Date.now()),
      geo: country
    })

      .then(function (results) {
        resolve(JSON.parse(results))
        console.log('These results are awesome', results);
      })
      .catch(function (err) {
        reject(err)
        console.error('Oh no there was an error', err);
      });
  });
};
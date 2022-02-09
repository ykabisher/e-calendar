
import { getGrowingTrends, initDB, saveTrendByName } from '../dbUtils';
import { getGoogleTrend } from './trends-call'
import { TIME_PERIOD, COUNTRY_CODE } from './trends-call'
import trendsMockDataAngular from './trendsResult.json';
import { createTrendObject } from './trendsUtils';

// test('get trend from google trends3', async () => {
//   const data =3
//   expect(data).toBe(2);
// });
// test('get trend from google trends4', async () => {
//   const data =4
//   expect(data).toBe(2);
// });
 
// test('get trend from google trends', async () => {
//   const data = await getGoogleTrend('Angular');
//   expect(data).toBe('peanut butter');
// });

// test('google trends result parsed correctly', async () => {
//   const trendObject = createTrendObject('Angular', trendsMockDataAngular, TIME_PERIOD.MONTH, COUNTRY_CODE.US, [], '');

//   expect(trendObject.category).toStrictEqual([]);
//   expect(trendObject.country).toStrictEqual(COUNTRY_CODE.US);
//   expect(trendObject.description).toStrictEqual('');
//   expect(trendObject.name).toStrictEqual('Angular');
//   expect(trendObject.values.month.timelineData[0].value).toStrictEqual(21);
// });

test('get a trend and save to db', async () => {
  const trendName = 'Basketball';
  const data = await getGoogleTrend(trendName,COUNTRY_CODE.US, TIME_PERIOD.MONTH);
  const trendObject = createTrendObject(trendName, data, TIME_PERIOD.MONTH, COUNTRY_CODE.US, [], '');
  // initDB();
  const dbResult = await saveTrendByName(trendName, COUNTRY_CODE.US, trendObject);
  expect(dbResult).toBe('success');
});

// test('get results from db', async () => {
//   getGrowingTrends(COUNTRY_CODE.US, TIME_PERIOD.MONTH)
//   expect(dbResult).toBe('peanut butter');
// });

test('encode base64 string', async () => {
  const stringToEncode = 'us_world cup';
  const base64data = Buffer.from(stringToEncode).toString('base64')
  const plain = Buffer.from(base64data, 'base64').toString('utf8')  
  expect(plain).toBe(stringToEncode);

  const hebStringToEncode = 'us_מה קורה אחי';
  const base64data2 = Buffer.from(hebStringToEncode).toString('base64')
  const plain2 = Buffer.from(base64data2, 'base64').toString('utf8')  
  expect(plain2).toBe(hebStringToEncode);
});

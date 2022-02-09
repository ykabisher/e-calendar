import App from '../components/App/App'
// scroll bar
import 'simplebar/src/simplebar.css';
import DashboardApp from '../components/DashboardApp/DashboardApp';
import { getGrowingTrends } from '../src/dbUtils';
import { COUNTRY_CODE, TIME_PERIOD } from '../src/trendUtils/trends-call';
import { createContext, useEffect, useState } from 'react';

export const SelectedCountryContext = createContext();
export const SelectedPeriodContext = createContext();
export const SelectedCategoryContext = createContext();

export async function getServerSideProps(context) {
  console.log(context);
  const topTrends = await getGrowingTrends(COUNTRY_CODE.US, TIME_PERIOD.MONTH);
  return {
    props: { topTrends }, // will be passed to the page component as props
  }
}

function HomePage({ topTrends }) {
  const [country, setCountry] = useState(COUNTRY_CODE.US);
  const value = { country, setCountry };

  useEffect(() => {
    console.log('useEffect'+country)
    // topTrends = await getGrowingTrends(COUNTRY_CODE.US, TIME_PERIOD.MONTH);
  });

  return (
    <SelectedCountryContext.Provider value={value}>
      <SelectedPeriodContext.Provider>
        <SelectedCategoryContext.Provider>
          <DashboardApp topTrends={topTrends} />
        </SelectedCategoryContext.Provider>
      </SelectedPeriodContext.Provider>
    </SelectedCountryContext.Provider>
  );
}

export default HomePage;
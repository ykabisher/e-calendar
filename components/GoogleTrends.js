import React from "react";
import Script from "react-load-script";

export default function GoogleTrends({ type, keyword, url, elementId }) {
  const handleScriptLoad = _ => {
    window.trends.embed.renderExploreWidgetTo(
      document.getElementById(elementId),
      type,
      {
        comparisonItem: [{ keyword, geo: "US", time: "2021-02-01 2021-04-03" }],
        category: 0,
        property: ""
      },
      {
        exploreQuery: `q=${encodeURI(keyword)}&geo=US&date=2021-02-01 2021-04-03`,
        guestPath: "https://trends.google.com:443/trends/embed/"
      }
    );
  };

  const renderGoogleTrend = _ => {
    return <Script url={url} onLoad={handleScriptLoad} />;
  };

  return <div className="googleTrend">{renderGoogleTrend()}</div>;
}

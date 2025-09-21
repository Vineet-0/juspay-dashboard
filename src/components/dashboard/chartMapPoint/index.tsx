import { AgCharts } from "ag-charts-react";
import { type AgChartOptions } from "ag-charts-enterprise";
import {
    africaData,
    asiaData,
    europeData,
    northAmericaData,
    oceaniaData,
    southAmericaData,
} from "./data";
import { topology } from "./topology";
import "ag-charts-enterprise";

const ChartExample = () => {
    const options: AgChartOptions = {
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        },
        topology,
        series: [
            {
                type: "map-shape-background",
                topology,
            },
            {
                type: "map-marker",
                topology,
                data: [
                    ...europeData,
                    ...asiaData,
                    ...africaData,
                    ...northAmericaData,
                    ...southAmericaData,
                    ...oceaniaData,
                ],
                title: "Population",
                idKey: "name",
                idName: "Country",
                sizeKey: "pop_est",
                sizeName: "Population Estimate",
                topologyIdKey: "NAME_ENGL",
                size: 5,
                maxSize: 60,
                labelKey: "name",
                showInLegend: false,
            },
        ],
    };

    return <AgCharts options={options} className="max-h-full" />;
};

export default ChartExample;

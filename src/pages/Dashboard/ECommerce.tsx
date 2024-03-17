import React from 'react';
import ChartOne from '../../components/Charts/ChartOne';
import ChartThree from '../../components/Charts/ChartThree';
import ChartTwo from '../../components/Charts/ChartTwo';
import ChatCard from '../../components/Chat/ChatCard';
import MapOne from '../../components/Maps/MapOne';
import TableOne from '../../components/Tables/TableOne';
import DefaultLayout from '../../layout/DefaultLayout';
import ChartEnergyProd from '../../components/Charts/ChartEnergyProd';
import EnergyConsumptionChart from '../../components/Charts/EnergyProd';
import CardDataStats from '../../components/CardDataStats';
import TotalConsom from '../../components/Cards/TotalConsom'; 
import ConsomGlo from '../../components/Cards/ConsomGlo'; 

const ECommerce: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats
          title="Total views"
          total="$3.456K"
          rate="0.43%"
          levelUp
          icon
         
        />
        <TotalConsom />
           
        <ConsomGlo
          title="Total views"
          total="$3.456K"
          rate="0.43%"
          levelUp
          icon

        />
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartEnergyProd />
        <ChartThree />
        <EnergyConsumptionChart />
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard />
      </div>
    </DefaultLayout>
  );
};

export default ECommerce;

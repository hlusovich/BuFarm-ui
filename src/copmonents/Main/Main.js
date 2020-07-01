import React from "react";
import MainProducts from "./MainProducts/MainProducts";
import MainPhotos from "./MainPhotos/MainPhotos/MainPhotos";
import MainNaturalAndFresh from "./MainNaturalAndFresh/MainNaturalAndFrshBlock";
import MainFarmBlock from "./MainFarmBlock/MainFarm";

const Main = () => {
    return (
        <>  <MainProducts/>
            <MainNaturalAndFresh/>
            <MainFarmBlock/>
            <MainPhotos/>
        </>
    )
}
export default Main

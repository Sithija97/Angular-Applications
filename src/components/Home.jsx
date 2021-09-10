import React from "react";
import Card from "./card";
import Table from "./table";

function Home() {
  return (
    <div class="flex flex-wrap h-screen px-10 py-10">
      <div class="w-full overflow-hidden lg:w-1/3 xl:w-1/3 px-5">
        {/* <!-- Content --> */}
        <div className="grid grid-rows-2">
          {/* <Card /> */}
          <Table />
        </div>
      </div>

      <div class="w-full overflow-hidden lg:w-1/3 xl:w-1/3 px-5">
        {/* <!-- Content --> */}
        <div className="grid grid-rows-2">
          <Card />
          <Card />
        </div>
      </div>

      <div class="w-full overflow-hidden lg:w-1/3 xl:w-1/3 px-5">
        {/* <!-- Content --> */}
        <div className="grid grid-rows-2">
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Home;

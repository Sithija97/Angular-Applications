import React from "react";
import Card from "./Card";

function Home() {
  return (
    <div class="flex flex-wrap overflow-hidden h-screen">
      <div class="w-full overflow-hidden lg:w-1/3 xl:w-1/3 bg-red-500">
        {/* <!-- Column Content --> */}
      </div>

      <div class="w-full overflow-hidden lg:w-1/3 xl:w-1/3 bg-red-600">
        {/* <!-- Column Content --> */}
      </div>

      <div class="w-full overflow-hidden lg:w-1/3 xl:w-1/3 bg-red-700">
        {/* <!-- Column Content --> */}
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import Link from "next/link";
import Image from "next/image";

const TrendingList = () => {
  return (
    <div id="Trending-List" className="mt-12">
      <h2 className="text-2xl mb-5">Trending List</h2>

      <div className="flex flex-wrap items-center justify-between mx-auto py-4">
        <div className="flex flex-row gap-4">
          <Link href="/" className="rounded-md border-slate-200 bg">
            <span className="block bg-violet-600 hover:bg-violet-700 rounded-full px-6">
              All
            </span>
          </Link>
          <Link href="#">Viet Nam</Link>
          <Link href="#">Quoc Te</Link>
        </div>

        <Link href="#">See All </Link>
      </div>
      <div></div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-400 flex flex-row px-3 py-2 rounded-md">
          <div className="mr-3">
            <Image
              src="/images/ChungTaCuaTuongLai.jpeg"
              width={100}
              height={100}
            />
          </div>
          <div className="flex flex-col">
            <div>Chung Ta Cua Tuong Lai</div>
            <div>Son Tung MTP</div>
            <div>2 days ago</div>
          </div>
        </div>

        <div className="bg-gray-400 flex flex-row px-3 py-2 rounded-md">
          <div className="mr-3">
            <Image
              src="/images/ChungTaCuaTuongLai.jpeg"
              width={100}
              height={100}
            />
          </div>
          <div className="flex flex-col">
            <div>Chung Ta Cua Tuong Lai</div>
            <div>Son Tung MTP</div>
            <div>2 days ago</div>
          </div>
        </div>

        <div className="bg-gray-400 flex flex-row px-3 py-2 rounded-md">
          <div className="mr-3">
            <Image
              src="/images/ChungTaCuaTuongLai.jpeg"
              width={100}
              height={100}
            />
          </div>
          <div className="flex flex-col">
            <div>Chung Ta Cua Tuong Lai</div>
            <div>Son Tung MTP</div>
            <div>2 days ago</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingList;

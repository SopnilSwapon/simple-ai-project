import React from "react";
import AppButton from "../common/AppButton";
import smplICon from "@/assets/Frame (1).svg";
import dollarICon from "@/assets/dollarIcon1.png";
import card from "@/assets/Card.png";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

export default function BuySellSection() {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/pricing_bg.png')" }}
    >
      <div className="max-w-[1320px] mx-auto mt-25 py-25 flex gap-x-16 justify-between items-center">
        <div className="flex-1">
          <div>
            {/* Header Section */}
            <div className="mb-12">
              <AppButton
                title="Buy SMPL"
                className="w-26 border border-[#2A7183]! text-sm! rounded-[60px] bg-[#4CCEEE1A]"
              />

              <h1
                className={`font-[700] text-[48px] my-4 text-[rgba(76,206,238,1)] font-[Sofia_Sans]`}
              >
                Buy $SMPL{" "}
                <span className="text-white!">
                  easily with Credit Card, Google Pay, Apple Pay, and more...
                </span>
              </h1>
              <p>
                Purchase $SMPL tokens directly using your preferred payment
                method. We support major credit cards, digital wallets, and bank
                transfers to make buying crypto as simple as possible. No
                complicated DEX interfaces - just quick and easy token
                purchases.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 max-w-[648px]">
          {/* Buy Sell Tabs */}
          <div className="flex w-full flex-col gap-6">
            <Tabs defaultValue="Buy">
              <TabsList className="w-full gap-0 p-0 h-auto bg-transparent">
                <TabsTrigger
                  className="w-full text-2xl font-bold rounded-b-none [&[data-state='active']]:bg-[#4CCEEE] [&[data-state='active']]:text-black bg-[#0b1a22] py-3 mb-[-10px] rounded-r-none"
                  value="Buy"
                >
                  Buy
                </TabsTrigger>
                <TabsTrigger
                  className="w-full text-2xl font-bold rounded-b-none [&[data-state='active']]:bg-[#4CCEEE] [&[data-state='active']]:text-black bg-[#0b1a22] py-3 mb-[-10px] rounded-l-none"
                  value="Sell"
                >
                  Sell
                </TabsTrigger>
              </TabsList>
              <TabsContent value="Buy" className="mt-0">
                <Card className="border border-white/10 rounded-t-none rounded-b-2xl bg-[linear-gradient(to_right,#0A2330,#070E15)]">
                  <CardHeader>
                    <CardTitle className="text-lg mt-2 text-center font-semibold text-cyan-400">
                      1 SMPL = 1.21 USD
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="grid gap-6">
                    <div className="grid gap-3">
                      <div className="space-y-4">
                        <label htmlFor="received" className="pl-6 text-white">
                          I Want to Spend
                        </label>

                        <div className="relative w-[90%] mt-4 mx-auto">
                          <Select defaultValue="200">
                            {/* Custom trigger to control icon positions */}
                            <SelectTrigger className="w-full bg-[#0C1E27] px-6 py-7 border rounded-full border-gray-300 text-white flex justify-between items-center">
                              <div className="flex items-center justify-between w-full">
                                <SelectValue placeholder="Select amount" />
                                <div className="flex items-center gap-2 ml-2">
                                  {/* 💲 SPML icon */}
                                  <Image
                                    src={dollarICon}
                                    height={25}
                                    width={25}
                                    alt="SMPL Money logo"
                                  />
                                  <h1>USD</h1>
                                </div>
                              </div>
                            </SelectTrigger>

                            <SelectContent className="bg-[#0C1E27]">
                              {["100", "200", "500", "1000"].map((value) => (
                                <SelectItem
                                  key={value}
                                  value={value}
                                  className="bg-[#0C1E27] hover:bg-[#677d88] pl-3 rounded-full"
                                >
                                  {value}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                    <div className="grid gap-3">
                      <div className="space-y-4">
                        <label htmlFor="received" className="pl-6 text-white">
                          I Will Receive
                        </label>

                        <div className="relative w-[90%] mt-4 mx-auto">
                          <Select defaultValue="200">
                            {/* Custom trigger to control icon positions */}
                            <SelectTrigger className="w-full bg-[#0C1E27] px-6 py-7 border rounded-full border-gray-300 text-white flex justify-between items-center">
                              <div className="flex items-center justify-between w-full">
                                <SelectValue placeholder="Select amount" />
                                <div className="flex items-center gap-2 ml-2">
                                  {/* 💲 SPML icon */}
                                  <Image
                                    src={smplICon}
                                    height={25}
                                    width={25}
                                    alt="SMPL Money logo"
                                  />
                                  <h1>SMPL</h1>
                                </div>
                              </div>
                            </SelectTrigger>

                            <SelectContent className="bg-[#0C1E27]">
                              {["100", "200", "500", "1000"].map((value) => (
                                <SelectItem
                                  key={value}
                                  value={value}
                                  className="bg-[#0C1E27] hover:bg-[#677d88] pl-3 rounded-full"
                                >
                                  {parseFloat(value) * 1.23456}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                    <div className="grid gap-3">
                      <div className="space-y-4">
                        <label htmlFor="received" className="pl-6 text-white">
                          Pay With
                        </label>

                        <div className="relative w-[90%] mt-4 mx-auto">
                          <Select defaultValue="200">
                            {/* Custom trigger to control icon positions */}
                            <SelectTrigger className="w-full bg-[#0C1E27] px-6 py-7 border rounded-full border-gray-300 text-white flex justify-between items-center">
                              <div className="flex items-center justify-between w-full">
                                <SelectValue placeholder="Select amount" />
                                <div className="flex items-center gap-2 ml-2">
                                  <Image
                                    src={card}
                                    height={35}
                                    width={35}
                                    alt="card logo"
                                  />
                                </div>
                              </div>
                            </SelectTrigger>

                            <SelectContent className="bg-[#0C1E27]">
                              {["100", "200", "500", "1000"].map((value) => (
                                <SelectItem
                                  key={value}
                                  value={value}
                                  className="bg-[#0C1E27] hover:bg-[#677d88] pl-3 rounded-full"
                                >
                                  {value}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="flex gap-3">
                    <AppButton
                      className="bg-[#4CCEEE] border-none text-black backdrop-blur-sm"
                      title="Buy $SMPL Now"
                    />
                    <AppButton
                      className="bg-transparent border-none text-white backdrop-blur-sm flex items-center gap-2"
                      title={
                        <span className="flex items-center gap-2">
                          <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                          >
                            <path
                              d="M12.75 7.50003L12.75 11.5753L16.1362 13.6069C16.3068 13.7093 16.4297 13.8753 16.4779 14.0684C16.5261 14.2614 16.4956 14.4657 16.3931 14.6363C16.2907 14.8068 16.1247 14.9297 15.9316 14.9779C15.7386 15.0261 15.5343 14.9956 15.3638 14.8932L11.6138 12.6432C11.5028 12.5765 11.4109 12.4822 11.3472 12.3695C11.2834 12.2568 11.25 12.1295 11.25 12L11.25 7.50003C11.25 7.30112 11.329 7.11035 11.4697 6.9697C11.6103 6.82905 11.8011 6.75003 12 6.75003C12.1989 6.75003 12.3897 6.82905 12.5303 6.9697C12.671 7.11035 12.75 7.30112 12.75 7.30112ZM12 3.00003C10.8169 2.99708 9.64491 3.22881 8.55193 3.6818C7.45895 4.1348 6.46667 4.80006 5.6325 5.63909C4.95094 6.32909 4.34531 6.99284 3.75 7.68753L3.75 6.00003C3.75 5.80112 3.67098 5.61035 3.53033 5.4697C3.38968 5.32905 3.19891 5.25003 3 5.25003C2.80109 5.25003 2.61032 5.32905 2.46967 5.4697C2.32902 5.61035 2.25 5.80112 2.25 6.00003L2.25 9.75003C2.25 9.94894 2.32902 10.1397 2.46967 10.2804C2.61032 10.421 2.80109 10.5 3 10.5L6.75 10.5C6.94891 10.5 7.13968 10.421 7.28033 10.2804C7.42098 10.1397 7.5 9.94894 7.5 9.75003C7.5 9.55112 7.42098 9.36035 7.28033 9.2197C7.13968 9.07905 6.94891 9.00003 6.75 9.00003L4.59375 9.00003C5.26406 8.21065 5.93156 7.46722 6.69281 6.69659C7.73518 5.65423 9.0616 4.94216 10.5063 4.64935C11.9511 4.35654 13.4501 4.49598 14.816 5.05023C16.182 5.60449 17.3543 6.54899 18.1866 7.76572C19.0188 8.98245 19.474 10.4175 19.4953 11.8914C19.5166 13.3654 19.1031 14.813 18.3064 16.0532C17.5098 17.2935 16.3652 18.2716 15.0159 18.8651C13.6665 19.4586 12.1722 19.6414 10.7196 19.3905C9.26698 19.1396 7.92052 18.4662 6.84844 17.4544C6.77679 17.3867 6.6925 17.3338 6.60039 17.2986C6.50828 17.2635 6.41015 17.2468 6.3116 17.2496C6.21305 17.2524 6.11602 17.2746 6.02604 17.3149C5.93606 17.3551 5.8549 17.4128 5.78719 17.4844C5.71947 17.5561 5.66654 17.6403 5.6314 17.7325C5.59626 17.8246 5.57961 17.9227 5.5824 18.0212C5.58518 18.1198 5.60735 18.2168 5.64764 18.3068C5.68792 18.3968 5.74554 18.4779 5.81719 18.5457C6.88542 19.5537 8.18414 20.285 9.6 20.6757C11.0159 21.0665 12.5058 21.1047 13.9399 20.7872C15.3739 20.4696 16.7085 19.806 17.827 18.854C18.9456 17.9021 19.8142 16.6909 20.357 15.3261C20.8998 13.9613 21.1003 12.4844 20.9411 11.0243C20.7818 9.56414 20.2677 8.16517 19.4434 6.94946C18.6192 5.73376 17.5099 4.73825 16.2125 4.04982C14.915 3.3614 13.4688 3.00098 12 3.00003Z"
                              fill="rgb(230,231,231)"
                              fillRule="nonzero"
                            />
                          </svg>
                          Recurring Buy
                          <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                          >
                            <path
                              d="M17.25 8.25L21 12L17.25 15.75M21 12L3 12"
                              fillRule="nonzero"
                              stroke="rgb(230,231,231)"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                          </svg>
                        </span>
                      }
                    />
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="Sell" className="mt-0">
                <Card className="border border-white/10 rounded-t-none rounded-b-2xl bg-[linear-gradient(to_right,#0A2330,#070E15)]">
                  <CardHeader>
                    <CardTitle className="text-lg mt-2 text-center font-semibold text-cyan-400">
                      1.21 USD = 1 SMPL
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="grid gap-6">
                    <div className="grid gap-3">
                      <div className="space-y-4">
                        <label htmlFor="received" className="pl-6 text-white">
                          I Will Receive
                        </label>

                        <div className="relative w-[90%] mt-4 mx-auto">
                          <Select defaultValue="200">
                            {/* Custom trigger to control icon positions */}
                            <SelectTrigger className="w-full bg-[#0C1E27] px-6 py-7 border rounded-full border-gray-300 text-white flex justify-between items-center">
                              <div className="flex items-center justify-between w-full">
                                <SelectValue placeholder="Select amount" />
                                <div className="flex items-center gap-2 ml-2">
                                  {/* 💲 SPML icon */}
                                  <Image
                                    src={smplICon}
                                    height={25}
                                    width={25}
                                    alt="SMPL Money logo"
                                  />
                                  <h1>SMPL</h1>
                                </div>
                              </div>
                            </SelectTrigger>

                            <SelectContent className="bg-[#0C1E27]">
                              {["100", "200", "500", "1000"].map((value) => (
                                <SelectItem
                                  key={value}
                                  value={value}
                                  className="bg-[#0C1E27] hover:bg-[#677d88] pl-3 rounded-full"
                                >
                                  {parseFloat(value) * 1.23456}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                    <div className="grid gap-3">
                      <div className="space-y-4">
                        <label htmlFor="received" className="pl-6 text-white">
                          I Want to Spend
                        </label>

                        <div className="relative w-[90%] mt-4 mx-auto">
                          <Select defaultValue="200">
                            {/* Custom trigger to control icon positions */}
                            <SelectTrigger className="w-full bg-[#0C1E27] px-6 py-7 border rounded-full border-gray-300 text-white flex justify-between items-center">
                              <div className="flex items-center justify-between w-full">
                                <SelectValue placeholder="Select amount" />
                                <div className="flex items-center gap-2 ml-2">
                                  {/* 💲 SPML icon */}
                                  <Image
                                    src={dollarICon}
                                    height={25}
                                    width={25}
                                    alt="SMPL Money logo"
                                  />
                                  <h1>USD</h1>
                                </div>
                              </div>
                            </SelectTrigger>

                            <SelectContent className="bg-[#0C1E27]">
                              {["100", "200", "500", "1000"].map((value) => (
                                <SelectItem
                                  key={value}
                                  value={value}
                                  className="bg-[#0C1E27] hover:bg-[#677d88] pl-3 rounded-full"
                                >
                                  {value}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-3">
                      <div className="space-y-4">
                        <label htmlFor="received" className="pl-6 text-white">
                          Pay With
                        </label>

                        <div className="relative w-[90%] mt-4 mx-auto">
                          <Select defaultValue="200">
                            {/* Custom trigger to control icon positions */}
                            <SelectTrigger className="w-full bg-[#0C1E27] px-6 py-7 border rounded-full border-gray-300 text-white flex justify-between items-center">
                              <div className="flex items-center justify-between w-full">
                                <SelectValue placeholder="Select amount" />
                                <div className="flex items-center gap-2 ml-2">
                                  <Image
                                    src={card}
                                    height={35}
                                    width={35}
                                    alt="card logo"
                                  />
                                </div>
                              </div>
                            </SelectTrigger>

                            <SelectContent className="bg-[#0C1E27]">
                              {["100", "200", "500", "1000"].map((value) => (
                                <SelectItem
                                  key={value}
                                  value={value}
                                  className="bg-[#0C1E27] hover:bg-[#677d88] pl-3 rounded-full"
                                >
                                  {value}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="flex gap-3">
                    <AppButton
                      className="bg-[#4CCEEE] border-none text-black backdrop-blur-sm"
                      title="Buy $SMPL Now"
                    />
                    <AppButton
                      className="bg-transparent border-none text-white backdrop-blur-sm flex items-center gap-2"
                      title={
                        <span className="flex items-center gap-2">
                          <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                          >
                            <path
                              d="M12.75 7.50003L12.75 11.5753L16.1362 13.6069C16.3068 13.7093 16.4297 13.8753 16.4779 14.0684C16.5261 14.2614 16.4956 14.4657 16.3931 14.6363C16.2907 14.8068 16.1247 14.9297 15.9316 14.9779C15.7386 15.0261 15.5343 14.9956 15.3638 14.8932L11.6138 12.6432C11.5028 12.5765 11.4109 12.4822 11.3472 12.3695C11.2834 12.2568 11.25 12.1295 11.25 12L11.25 7.50003C11.25 7.30112 11.329 7.11035 11.4697 6.9697C11.6103 6.82905 11.8011 6.75003 12 6.75003C12.1989 6.75003 12.3897 6.82905 12.5303 6.9697C12.671 7.11035 12.75 7.30112 12.75 7.30112ZM12 3.00003C10.8169 2.99708 9.64491 3.22881 8.55193 3.6818C7.45895 4.1348 6.46667 4.80006 5.6325 5.63909C4.95094 6.32909 4.34531 6.99284 3.75 7.68753L3.75 6.00003C3.75 5.80112 3.67098 5.61035 3.53033 5.4697C3.38968 5.32905 3.19891 5.25003 3 5.25003C2.80109 5.25003 2.61032 5.32905 2.46967 5.4697C2.32902 5.61035 2.25 5.80112 2.25 6.00003L2.25 9.75003C2.25 9.94894 2.32902 10.1397 2.46967 10.2804C2.61032 10.421 2.80109 10.5 3 10.5L6.75 10.5C6.94891 10.5 7.13968 10.421 7.28033 10.2804C7.42098 10.1397 7.5 9.94894 7.5 9.75003C7.5 9.55112 7.42098 9.36035 7.28033 9.2197C7.13968 9.07905 6.94891 9.00003 6.75 9.00003L4.59375 9.00003C5.26406 8.21065 5.93156 7.46722 6.69281 6.69659C7.73518 5.65423 9.0616 4.94216 10.5063 4.64935C11.9511 4.35654 13.4501 4.49598 14.816 5.05023C16.182 5.60449 17.3543 6.54899 18.1866 7.76572C19.0188 8.98245 19.474 10.4175 19.4953 11.8914C19.5166 13.3654 19.1031 14.813 18.3064 16.0532C17.5098 17.2935 16.3652 18.2716 15.0159 18.8651C13.6665 19.4586 12.1722 19.6414 10.7196 19.3905C9.26698 19.1396 7.92052 18.4662 6.84844 17.4544C6.77679 17.3867 6.6925 17.3338 6.60039 17.2986C6.50828 17.2635 6.41015 17.2468 6.3116 17.2496C6.21305 17.2524 6.11602 17.2746 6.02604 17.3149C5.93606 17.3551 5.8549 17.4128 5.78719 17.4844C5.71947 17.5561 5.66654 17.6403 5.6314 17.7325C5.59626 17.8246 5.57961 17.9227 5.5824 18.0212C5.58518 18.1198 5.60735 18.2168 5.64764 18.3068C5.68792 18.3968 5.74554 18.4779 5.81719 18.5457C6.88542 19.5537 8.18414 20.285 9.6 20.6757C11.0159 21.0665 12.5058 21.1047 13.9399 20.7872C15.3739 20.4696 16.7085 19.806 17.827 18.854C18.9456 17.9021 19.8142 16.6909 20.357 15.3261C20.8998 13.9613 21.1003 12.4844 20.9411 11.0243C20.7818 9.56414 20.2677 8.16517 19.4434 6.94946C18.6192 5.73376 17.5099 4.73825 16.2125 4.04982C14.915 3.3614 13.4688 3.00098 12 3.00003Z"
                              fill="rgb(230,231,231)"
                              fillRule="nonzero"
                            />
                          </svg>
                          Recurring Buy
                          <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                          >
                            <path
                              d="M17.25 8.25L21 12L17.25 15.75M21 12L3 12"
                              fillRule="nonzero"
                              stroke="rgb(230,231,231)"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                          </svg>
                        </span>
                      }
                    />
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}

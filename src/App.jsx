import { twMerge } from "tailwind-merge";
import { balance } from "./constants";

function App() {
    return (
        <main className="flex items-center justify-center w-screen h-screen">
            <section className="flex flex-col w-full max-w-xl gap-4 mx-4 sm:gap-6">
                <article className="flex items-center justify-between w-full p-5 text-white sm:p-8 bg-soft-red rounded-xl sm:rounded-3xl">
                    <div>
                        <p className="mb-3 ">My balance</p>
                        <h1 className="text-2xl font-bold sm:text-4xl ">
                            $921.48
                        </h1>
                    </div>
                    <img src="/images/logo.svg" alt="" />
                </article>
                <article className="flex flex-col gap-6 px-5 py-6 sm:p-10 sm:gap-8 bg-orange-pale rounded-xl sm:rounded-3xl">
                    <h1 className="text-2xl font-bold sm:text-4xl">
                        Spending - Last 7 days
                    </h1>
                    <div className="flex flex-row items-end justify-between gap-5 mt-10">
                        {balance.map((el, index) => {
                            return (
                                <div className="relative flex flex-col items-center w-full gap-2 group">
                                    <div className="hidden absolute p-2 px-3 font-normal tracking-wide text-white group-hover:block rounded -top-[52px] bg-brown-dark">
                                        ${el.amount}
                                    </div>
                                    <div
                                        className={twMerge(
                                            "bg-soft-red w-full rounded [&:nth-child(3)]:bg-red-500 hover:opacity-60",
                                            "h-[" + el.amount + "px]",
                                            index == 2 && "bg-cyan"
                                        )}
                                        style={{ height: el.amount * 3 }}
                                        // style={`height: ${el.amount}px`}
                                    ></div>
                                    <span className="text-xs font-normal opacity-50 sm:text-base">
                                        {el.day}
                                    </span>
                                </div>
                            );
                        })}
                        {}
                    </div>
                    <div className="w-full h-[2px] bg-cream" />
                    <article className="flex items-end justify-between w-full ">
                        <div>
                            <p className="mb-2 text-brown-medium">
                                Total this month
                            </p>
                            <h1 className="text-3xl font-bold sm:text-5xl">
                                $478.33
                            </h1>
                        </div>
                        <div className="text-right">
                            <p className="font-bold text-brown-dark">+2.4%</p>
                            <p className=" text-brown-medium">
                                from last month
                            </p>
                        </div>
                    </article>
                </article>
            </section>
        </main>
    );
}

export default App;

import React, { Component } from "react";

export default class KentuckyCard extends Component {
        render() {
            return(
                <div className="mt-9 mb-3">
                    <div className='p-5'>
                        <h2 className="uppercase text-8xl text-center uppercase font-bold">yes.</h2>
                        <p className="capitalize text-center text-5xl mt-3 pt-8"><span className="underline decoration-solid">Kentucky</span> does have a trigger law.</p>
                        <div className="mt-8 p-5 flex justify-center">
                            <div className="p-5 sm:w-5/6 md:w-4/5 rounded overflow-hidden shadow-lg border border-slate-100">
                                <h3 className="text-2xl uppercase text-bluish font-bold mb-3">Details:</h3>
                                <p className="pb-4"><span className="capitalize font-bold">Trigger ban:</span> Law designed to be “triggered” and take effect automatically or by quick state action if Roe no longer applies</p>
                                <p className="pb-4"><span className="capitalize font-bold">Six-week ban:</span> Law prohibiting abortion after six weeks of pregnancy (one in effect)</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
}
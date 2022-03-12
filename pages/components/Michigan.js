import React, { Component } from "react";

export default class MichiganCard extends Component {
        render() {
            return(
                <div className="mt-9 mb-3">
                    <div className='p-5'>
                        <h2 className="uppercase text-8xl text-center uppercase font-bold">yes.</h2>
                        <p className="capitalize text-center text-5xl mt-3 pt-8"><span className="underline decoration-solid">Michigan</span> does have a trigger law.</p>
                        <div className="mt-8 p-5 flex justify-center">
                            <div className="p-5 sm:w-5/6 md:w-4/5 rounded overflow-hidden shadow-lg border border-slate-100">
                                <h3 className="text-2xl uppercase text-bluish font-bold mb-3">Details:</h3>
                                <p className="pb-4"><span className="capitalize font-bold">Pre-Roe Ban:</span> Law enacted before 1973 and never removed</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
}
import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import './GrandFather.css'

export const AssetContext = createContext('gold');
export const MoneyContext = createContext(1000);

const GrandFather = () => {
    const asset = 'diamond';
    const [money, setMonney] = useState(1000);
    return (
        <div className="grand-father">
            <h2>Grand Father</h2>
            <AssetContext.Provider value={[money, setMonney]}>
                <AssetContext.Provider value="gold">
                    <section className="flex">
                        <Father asset={asset}></Father>
                        <Uncle></Uncle>
                        <Aunty></Aunty>
                    </section>
                </AssetContext.Provider>
            </AssetContext.Provider>
        </div>
    );
};

export default GrandFather;
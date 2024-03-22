import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../GrandFather/GrandFather";



const Aunty = () => {
   const [money, setMonney]= useContext(MoneyContext);
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name={'Moofuo'}></Cousin>
                <Cousin name={'Rofuao'}></Cousin>
            </section>
            <p>Money: {money}</p>
        </div>
    );
};

export default Aunty;
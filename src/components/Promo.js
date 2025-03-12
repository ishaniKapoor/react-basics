import PromoHeading from "./PromoHeading" 

function Promo(){
    const data = {
        heading: "99% of all items",
        callToAction: "Everything must go!"
      }
    return (
        <div className="promo-section">
            <div>
                <PromoHeading 
                heading={data.heading}
                callToAction={data.callToAction}/>
            </div>
        </div>
    );
};

export default Promo;
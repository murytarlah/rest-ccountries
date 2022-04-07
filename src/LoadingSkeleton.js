const LoadingSkeleton = () => {     
    return ( 
        <div className="loader">
            {
                [...Array(250)].map((_,i) => (
                    <div className="country">
                        <div className="country">
                            <div className="country-img">
                                <div></div>
                            </div>
                            <div className="country-body">    
                                <div className="country-title">
                                    <h1></h1>
                                </div>
                                <div className="country-info">
                                    <p><span></span></p>
                                    <p><span></span></p>
                                    <p><span></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

     );
}
 
export default LoadingSkeleton;     
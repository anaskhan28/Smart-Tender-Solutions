const Tenders =[{
    tender1: {
    name: 'Bank of Baroda',
    detial: 'Quotation for shifting and new tech products',
    type1: 'Bank',
    type2: 'Shifting'
},
    tender2: {
    name: 'Public Department',
    detial: 'Quotation for shifting and new tech products',
    type1: 'Bank',
    type2: 'Shifting'
},
    tender3: {
    name: 'National Highway Delhi',
    detial: 'Quotation for shifting and new tech products',
    type1: 'Bank',
    type2: 'Shifting'
},
    tender4: {
    name: 'Governmetn Departments',
    detial: 'Quotation for shifting and new tech products',
    type1: 'Bank',
    type2: 'Shifting'
},
    tender5: {
    name: 'Union Bank Of India',
    detial: 'Quotation for shifting and new tech products',
    type1: 'Bank',
    type2: 'Shifting'
},
    tender6: {
    name: 'MisTech',
    detial: 'Quotation for shifting and new tech products',
    type1: 'Bank',
    type2: 'Shifting'
},
}]
function Tender (){
    return (
        <>
        <div className=" flex justify-center items-center
        underline underline-offset-2 mt-24">
            <h2 className="text-bold font-medium">Latest Tenders on our website</h2>
        </div>
        {Tenders.map((tender, id) =>{
            return(

                <>
                <div className="flex flex-col justify-center items-center 
               mb-4 md:flex-row md:gap-12 md:flex-wrap">
                <div className="card w-96 bg-base-100 border-2  border-blue-500 mt-12 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">
                            {tender.tender1.name}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>{tender.tender1.detial}</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">{tender.tender1.type1}</div>
                            <div className="badge badge-outline">{tender.tender2.type2}</div>
                        </div>
                    </div>
                </div><div className="card w-96 bg-base-100 border-2  border-blue-500 mt-12 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">
                                {tender.tender2.name}
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>{tender.tender2.detial}</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">{tender.tender2.type1}</div>
                                <div className="badge badge-outline">{tender.tender2.type2}</div>
                            </div>
                        </div>
                    </div>

                    <div className="card w-96 bg-base-100 border-2  border-blue-500 mt-12 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">
                    {tender.tender3.name}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>{tender.tender3.detial}</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">{tender.tender3.type1}</div> 
                    <div className="badge badge-outline">{tender.tender3.type2}</div>
                  </div>
                </div>
              </div>

              <div className="card w-96 bg-base-100 border-2  border-blue-500 mt-12 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">
                    {tender.tender4.name}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>{tender.tender4.detial}</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">{tender.tender4.type1}</div> 
                    <div className="badge badge-outline">{tender.tender4.type2}</div>
                  </div>
                </div>
              </div>

              <div className="card w-96 bg-base-100 border-2  border-blue-500 mt-12 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">
                    {tender.tender5.name}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>{tender.tender5.detial}</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">{tender.tender5.type1}</div> 
                    <div className="badge badge-outline">{tender.tender5.type2}</div>
                  </div>
                </div>
              </div>

              <div className="card w-96 bg-base-100 border-2  border-blue-500 mt-12 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">
                    {tender.tender6.name}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>{tender.tender6.detial}</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">{tender.tender6.type1}</div> 
                    <div className="badge badge-outline">{tender.tender6.type2}</div>
                  </div>
                </div>
              </div>
              </div>
                    
                    </>
              
            )
        })}
        </>
    )
}

export default Tender;
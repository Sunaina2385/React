import React,{useState,useEffect} from 'react'

const App24 = () => {

    const [data,setData]=useState();

    const getCovidData=async()=>{

        const res=await fetch('https://data.covid19india.org/data.json');
        const actualData=await res.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);

    }

    useEffect(()=>{
        getCovidData();
    },[])

    return (
        <>
        <div className="container-fluid mt-5">
            <div className='main_heading'>
                <h1 className='mb-5 text-center'><span className='font-weight-bold'>INDIA </span>
                COVID-19 Dashboard
                </h1>
            </div>

            <div className='table-responsive'>
                <table className='table table-hover'>
                    <thead className="thead-dark">
                        <tr>
                            <th>State</th>
                            <th>Confirmed</th>
                            <th>Recovered</th>
                            <th>Deaths</th>
                            <th>Active</th>
                            <th>Updated</th>
                        </tr>
                    </thead>
                    <tbody>

                        {data.map((currEle,index)=>{
                        return(
                            <tr key={index}>
                                <td>{currEle.state}</td>
                                <td>{currEle.confirmed}</td>
                                <td>{currEle.recovered}</td>
                                <td>{currEle.deaths}</td>
                                <td>{currEle.active}</td>
                                <td>{currEle.lastupdatedtime}</td>
                            </tr>
                        );
                        })}
                        
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default App24;

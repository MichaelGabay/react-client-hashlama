import { useAxios } from 'frontend-essentials'
import React, { useState } from 'react'
import { END_ALL_CONNECTION_URL, END_CONNECTION_URL, SHOW_ALL_CONNECTIONS_URL } from '../../routes/urls'
import Loading from '../../sherdComponents/loading/Loading'
import { If } from 'mg-js'

const MyConnections = () => {
    const [connections, setConnections] = useState([]);
    const { loading, data } = useAxios({
        method: "get",
        url: SHOW_ALL_CONNECTIONS_URL,
        camelCased: true,
        onSuccess: ({ data }) => setConnections(data)
    })

    const { loading: deleteLoad, activate } = useAxios({
        method: "delete",
        onSuccess: () => console.log("success"),
        manual: true
    })

    const endConnection = (id) => {
        activate({
            url: END_CONNECTION_URL + `?id=${id}`,
            onSuccess: (id) => {
                const afetrDeletingConnection = connections.filter(c => c.tokenId != id);
                console.log(afetrDeletingConnection);
                setConnections(afetrDeletingConnection)
            }
        })
    }


    const endAllConnections = () => {
        activate({
            url: END_ALL_CONNECTION_URL,
            method: "delete",
            onSuccess: () => setConnections([])
        })
    }


    if (loading || deleteLoad) return <Loading />
    return (

        <div className='w-75 mx-auto mt-4'>
            <div className='d-flex justify-content-center'>
                <button onClick={endAllConnections} className='btn btn-danger'>end all connections</button>
            </div>
            <h2>devices connections</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">browser name</th>
                        <th scope="col">browser platform</th>
                        <th scope="col">connction date</th>
                        <th scope="col">end connection</th>
                    </tr>
                </thead>
                <tbody>
                    {connections.map((c, i) =>
                        <tr key={c.tokenId}>
                            <th scope="row">{i + 1}</th>
                            <td>{c.browserName}</td>
                            <td>{c.browserPlatform}</td>
                            <td>{c.connectionDate}</td>
                            <td><button onClick={() => endConnection(c.tokenId)} className='btn btn-danger'>end</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
            <If condition={!connections.length}><h2 className='text-center'>no connections</h2></If>
        </div>
    )
}

export default MyConnections
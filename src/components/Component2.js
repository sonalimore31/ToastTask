import React, { useState, useMemo, useEffect } from "react"
import Pagination from "./Pagination"
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"
import Toast from "./Toast"
const Component2 = () => {
  let PageSize = 10
  const [currentPage, setCurrentPage] = useState(1)
  const [seconds, setSeconds] = useState()
  const [timer, setTimer] = useState()
  const [show, setShow] = useState(false)
  const [country, setCountry] = useState([])
  const [myInterval, setMyInterval] = useState(null)
  // useEffect(() => {
  //   fetch("https://api.knowmee.co/api/v1/master/get-country-list")
  //     .then((Response) => {
  //       return Response.json()
  //     })
  //     .then((data) => {
  //       setCountry(data.responseData)
  //       console.log("Country", data.responseData)
  //     })
  // }, [])
  const showToast = (e) => {
    e.preventDefault()

    const myInterval = setInterval(() => {
      if (seconds > 0) {
        setShow(!show)
        setSeconds((seconds) => seconds - 1)
      }
      clearInterval(myInterval)
      console.log("clear")
      fetch("https://api.knowmee.co/api/v1/master/get-country-list")
        .then((Response) => {
          return Response.json()
        })
        .then((data) => {
          setCountry(data.responseData)
          console.log("Country", data.responseData)
        })
    }, 1000)
  }
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize
    return country.slice(firstPageIndex, lastPageIndex)
  }, [currentPage])

  return (
    <div>
      <Header />
      {country.length !== 0 ? (
        <>
          <div
            style={{
              padding: 10,
            }}
          >
            <table className='table' id='table-id'>
              <thead>
                <tr>
                  <th>Country_ID</th>
                  <th>Country_Name</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {currentTableData.map((d, i) => (
                  <tr>
                    <td>{d.country_id}</td>
                    <td>{d.country_name}</td>
                    <td>{d.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              className='pagination-bar'
              currentPage={currentPage}
              totalCount={country.length}
              pageSize={PageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </>
      ) : (
        <form onSubmit={showToast}>
          <div>
            <input
              type='text'
              value={seconds}
              onChange={(e) => setSeconds(e.target.value)}
            />
            <button className='button1'>Submit</button>
            {show && <Toast message={seconds} />}
          </div>
        </form>
      )}

      <Footer />
    </div>
  )
}

export default Component2
